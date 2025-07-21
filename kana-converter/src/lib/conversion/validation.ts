// Input validation functions for Kana conversion

import type { KanaType } from "../../types";

/**
 * Validate if a string contains valid Hiragana characters
 */
export function isValidHiragana(text: string): boolean {
	if (!text) return true; // Empty string is valid

	// Test for valid Hiragana characters (including basic punctuation)
	const hiraganaRegex = /^[\u3040-\u309F\s！？。、]*$/;
	return hiraganaRegex.test(text);
}

/**
 * Validate if a string contains valid Katakana characters
 */
export function isValidKatakana(text: string): boolean {
	if (!text) return true; // Empty string is valid

	// Test for valid Katakana characters (including extended katakana and basic punctuation)
	const katakanaRegex = /^[\u30A0-\u30FF\s！？。、]*$/;
	return katakanaRegex.test(text);
}

/**
 * Validate if a string contains valid Romaji characters
 */
export function isValidRomaji(text: string): boolean {
	if (!text) return true; // Empty string is valid

	// Test for valid Romaji characters (letters, spaces, and basic punctuation)
	const romajiRegex = /^[a-zA-Z\s!?.,-]*$/;
	return romajiRegex.test(text);
}

/**
 * Validate input based on expected character type
 */
export function validateInputForType(
	text: string,
	expectedType: KanaType
): boolean {
	switch (expectedType) {
		case "hiragana":
			return isValidHiragana(text);
		case "katakana":
			return isValidKatakana(text);
		case "romaji":
			return isValidRomaji(text);
		case "mixed":
			return true; // Mixed input allows any combination
		default:
			return false;
	}
}

/**
 * Get validation error message for invalid input
 */
export function getValidationError(
	text: string,
	expectedType: KanaType
): string | null {
	if (!text.trim()) return null; // Empty input is always valid

	if (validateInputForType(text, expectedType)) {
		return null; // Valid input
	}

	switch (expectedType) {
		case "hiragana":
			return "Please enter only Hiragana characters (ひらがな)";
		case "katakana":
			return "Please enter only Katakana characters (カタカナ)";
		case "romaji":
			return "Please enter only Roman letters (a-z, A-Z)";
		case "mixed":
			return null; // Mixed input shouldn't have validation errors
		default:
			return "Invalid character type";
	}
}

/**
 * Check if text contains any Japanese characters
 */
export function containsJapanese(text: string): boolean {
	return /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(text);
}

/**
 * Check if text contains any Roman characters
 */
export function containsRoman(text: string): boolean {
	return /[a-zA-Z]/.test(text);
}

/**
 * Sanitize input text by removing invalid characters for the given type
 */
export function sanitizeInput(text: string, expectedType: KanaType): string {
	if (!text) return "";

	switch (expectedType) {
		case "hiragana":
			// Keep only Hiragana, spaces, and basic punctuation
			return text.replace(/[^\u3040-\u309F\s！？。、]/g, "");

		case "katakana":
			// Keep only Katakana, spaces, and basic punctuation
			return text.replace(/[^\u30A0-\u30FF\s！？。、]/g, "");

		case "romaji":
			// Keep only Roman letters, spaces, and basic punctuation
			return text.replace(/[^a-zA-Z\s!?.,-]/g, "");

		case "mixed":
			// Keep Japanese characters, Roman letters, spaces, and punctuation
			return text.replace(
				/[^\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAFa-zA-Z\s！？。、!?.,-]/g,
				""
			);

		default:
			return text;
	}
}
