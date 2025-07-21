// Core conversion functions for Kana transformations

import {
	HIRAGANA_TO_ROMAJI,
	KATAKANA_TO_ROMAJI,
	ROMAJI_TO_HIRAGANA,
	ROMAJI_TO_KATAKANA,
	HIRAGANA_TO_KATAKANA,
	KATAKANA_TO_HIRAGANA
} from "../../constants/kana-mappings";

import type { ConversionResult, ConversionOptions } from "../../types";
import { detectKanaType, normalizeText } from "../utils";

/**
 * Convert Hiragana text to Romaji
 */
export function hiraganaToRomaji(
	text: string,
	options?: Partial<ConversionOptions>
): string {
	if (!text) return "";

	const opts = { preserveSpacing: true, preservePunctuation: true, ...options };
	let result = "";
	let i = 0;

	while (i < text.length) {
		const char = text[i];

		// Handle spaces and punctuation
		if (opts.preserveSpacing && /\s/.test(char)) {
			result += char;
			i++;
			continue;
		}

		if (opts.preservePunctuation && /[！？。、]/.test(char)) {
			result += char;
			i++;
			continue;
		}

		// Try two-character combinations first (for きゃ, etc.)
		const twoChar = text.slice(i, i + 2);
		if (HIRAGANA_TO_ROMAJI[twoChar]) {
			result += HIRAGANA_TO_ROMAJI[twoChar];
			i += 2;
			continue;
		}

		// Try single character
		if (HIRAGANA_TO_ROMAJI[char]) {
			result += HIRAGANA_TO_ROMAJI[char];
		} else {
			result += char; // Keep unknown characters as-is
		}
		i++;
	}

	return result;
}

/**
 * Convert Katakana text to Romaji
 */
export function katakanaToRomaji(
	text: string,
	options?: Partial<ConversionOptions>
): string {
	if (!text) return "";

	const opts = { preserveSpacing: true, preservePunctuation: true, ...options };
	let result = "";
	let i = 0;

	while (i < text.length) {
		const char = text[i];

		// Handle spaces and punctuation
		if (opts.preserveSpacing && /\s/.test(char)) {
			result += char;
			i++;
			continue;
		}

		if (opts.preservePunctuation && /[！？。、]/.test(char)) {
			result += char;
			i++;
			continue;
		}

		// Try three-character combinations first (for extended katakana)
		const threeChar = text.slice(i, i + 3);
		if (KATAKANA_TO_ROMAJI[threeChar]) {
			result += KATAKANA_TO_ROMAJI[threeChar];
			i += 3;
			continue;
		}

		// Try two-character combinations (for キャ, etc.)
		const twoChar = text.slice(i, i + 2);
		if (KATAKANA_TO_ROMAJI[twoChar]) {
			result += KATAKANA_TO_ROMAJI[twoChar];
			i += 2;
			continue;
		}

		// Try single character
		if (KATAKANA_TO_ROMAJI[char]) {
			result += KATAKANA_TO_ROMAJI[char];
		} else {
			result += char; // Keep unknown characters as-is
		}
		i++;
	}

	return result;
}

/**
 * Convert Romaji text to Hiragana
 */
export function romajiToHiragana(
	text: string,
	options?: Partial<ConversionOptions>
): string {
	if (!text) return "";

	const opts = { preserveSpacing: true, preservePunctuation: true, ...options };
	const normalizedText = normalizeText(text);
	let result = "";
	let i = 0;

	while (i < normalizedText.length) {
		const char = normalizedText[i];

		// Handle spaces and punctuation
		if (opts.preserveSpacing && /\s/.test(char)) {
			result += char;
			i++;
			continue;
		}

		if (opts.preservePunctuation && /[!?.,-]/.test(char)) {
			result += char;
			i++;
			continue;
		}

		// Try progressively longer combinations
		let found = false;
		for (let len = 4; len >= 1; len--) {
			const substring = normalizedText.slice(i, i + len);
			if (ROMAJI_TO_HIRAGANA[substring]) {
				result += ROMAJI_TO_HIRAGANA[substring];
				i += len;
				found = true;
				break;
			}
		}

		if (!found) {
			result += char; // Keep unknown characters as-is
			i++;
		}
	}

	return result;
}

/**
 * Convert Romaji text to Katakana
 */
export function romajiToKatakana(
	text: string,
	options?: Partial<ConversionOptions>
): string {
	if (!text) return "";

	const opts = { preserveSpacing: true, preservePunctuation: true, ...options };
	const normalizedText = normalizeText(text);
	let result = "";
	let i = 0;

	while (i < normalizedText.length) {
		const char = normalizedText[i];

		// Handle spaces and punctuation
		if (opts.preserveSpacing && /\s/.test(char)) {
			result += char;
			i++;
			continue;
		}

		if (opts.preservePunctuation && /[!?.,-]/.test(char)) {
			result += char;
			i++;
			continue;
		}

		// Try progressively longer combinations
		let found = false;
		for (let len = 4; len >= 1; len--) {
			const substring = normalizedText.slice(i, i + len);
			if (ROMAJI_TO_KATAKANA[substring]) {
				result += ROMAJI_TO_KATAKANA[substring];
				i += len;
				found = true;
				break;
			}
		}

		if (!found) {
			result += char; // Keep unknown characters as-is
			i++;
		}
	}

	return result;
}

/**
 * Convert Hiragana to Katakana
 */
export function hiraganaToKatakana(text: string): string {
	if (!text) return "";

	return text
		.split("")
		.map((char) => HIRAGANA_TO_KATAKANA[char] || char)
		.join("");
}

/**
 * Convert Katakana to Hiragana
 */
export function katakanaToHiragana(text: string): string {
	if (!text) return "";

	return text
		.split("")
		.map((char) => KATAKANA_TO_HIRAGANA[char] || char)
		.join("");
}

/**
 * Universal conversion function that converts any input to all formats
 */
export function convertToAllFormats(
	text: string,
	options?: Partial<ConversionOptions>
): ConversionResult {
	if (!text.trim()) {
		return {
			hiragana: "",
			katakana: "",
			romaji: ""
		};
	}

	const inputType = detectKanaType(text);

	let hiragana = "";
	let katakana = "";
	let romaji = "";

	switch (inputType) {
		case "hiragana":
			hiragana = text;
			katakana = hiraganaToKatakana(text);
			romaji = hiraganaToRomaji(text, options);
			break;

		case "katakana":
			hiragana = katakanaToHiragana(text);
			katakana = text;
			romaji = katakanaToRomaji(text, options);
			break;

		case "romaji":
			hiragana = romajiToHiragana(text, options);
			katakana = romajiToKatakana(text, options);
			romaji = text;
			break;

		case "mixed":
			// For mixed input, try to convert each part appropriately
			hiragana = convertMixedToHiragana(text, options);
			katakana = convertMixedToKatakana(text, options);
			romaji = convertMixedToRomaji(text, options);
			break;
	}

	return { hiragana, katakana, romaji };
}

/**
 * Helper functions for mixed input conversion
 */
function convertMixedToHiragana(
	text: string,
	options?: Partial<ConversionOptions>
): string {
	let result = "";
	let i = 0;

	while (i < text.length) {
		const char = text[i];

		if (/[\u3040-\u309F]/.test(char)) {
			// Already hiragana
			result += char;
		} else if (/[\u30A0-\u30FF]/.test(char)) {
			// Convert katakana to hiragana
			result += KATAKANA_TO_HIRAGANA[char] || char;
		} else if (/[a-zA-Z]/.test(char)) {
			// Convert romaji portion to hiragana
			let j = i;
			while (j < text.length && /[a-zA-Z]/.test(text[j])) {
				j++;
			}
			const romajiPart = text.slice(i, j);
			result += romajiToHiragana(romajiPart, options);
			i = j - 1;
		} else {
			result += char;
		}
		i++;
	}

	return result;
}

function convertMixedToKatakana(
	text: string,
	options?: Partial<ConversionOptions>
): string {
	let result = "";
	let i = 0;

	while (i < text.length) {
		const char = text[i];

		if (/[\u30A0-\u30FF]/.test(char)) {
			// Already katakana
			result += char;
		} else if (/[\u3040-\u309F]/.test(char)) {
			// Convert hiragana to katakana
			result += HIRAGANA_TO_KATAKANA[char] || char;
		} else if (/[a-zA-Z]/.test(char)) {
			// Convert romaji portion to katakana
			let j = i;
			while (j < text.length && /[a-zA-Z]/.test(text[j])) {
				j++;
			}
			const romajiPart = text.slice(i, j);
			result += romajiToKatakana(romajiPart, options);
			i = j - 1;
		} else {
			result += char;
		}
		i++;
	}

	return result;
}

function convertMixedToRomaji(
	text: string,
	options?: Partial<ConversionOptions>
): string {
	let result = "";
	let i = 0;

	while (i < text.length) {
		const char = text[i];

		if (/[a-zA-Z]/.test(char)) {
			// Already romaji
			result += char;
		} else if (/[\u3040-\u309F]/.test(char)) {
			// Convert hiragana to romaji
			result += HIRAGANA_TO_ROMAJI[char] || char;
		} else if (/[\u30A0-\u30FF]/.test(char)) {
			// Convert katakana to romaji
			result += KATAKANA_TO_ROMAJI[char] || char;
		} else {
			result += char;
		}
		i++;
	}

	return result;
}

// Export validation functions
export * from "./validation";
