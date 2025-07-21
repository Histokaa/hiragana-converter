// Utility functions for the Kana Converter application

/**
 * Detect the type of Japanese text input
 */
export function detectKanaType(
	text: string
): "hiragana" | "katakana" | "romaji" | "mixed" {
	if (!text.trim()) return "romaji";

	const hasHiragana = /[\u3040-\u309F]/.test(text);
	const hasKatakana = /[\u30A0-\u30FF]/.test(text);
	const hasRomaji = /[a-zA-Z]/.test(text);

	if (hasHiragana && hasKatakana) return "mixed";
	if (hasHiragana) return "hiragana";
	if (hasKatakana) return "katakana";
	if (hasRomaji) return "romaji";

	return "mixed";
}

/**
 * Clean and normalize input text
 */
export function normalizeText(text: string): string {
	return text.trim().toLowerCase().replace(/\s+/g, " "); // Replace multiple spaces with single space
}

/**
 * Check if a character is a Japanese character
 */
export function isJapaneseCharacter(char: string): boolean {
	const code = char.charCodeAt(0);
	return (
		(code >= 0x3040 && code <= 0x309f) || // Hiragana
		(code >= 0x30a0 && code <= 0x30ff) || // Katakana
		(code >= 0x4e00 && code <= 0x9faf) // Kanji (for future use)
	);
}

/**
 * Copy text to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch (err) {
		console.error("Failed to copy text to clipboard:", err);
		return false;
	}
}
