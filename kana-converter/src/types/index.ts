// Type definitions for the Kana Converter application

export type KanaType = "hiragana" | "katakana" | "romaji" | "mixed";

export interface ConversionResult {
	hiragana: string;
	katakana: string;
	romaji: string;
}

export interface InputFieldProps {
	value: string;
	onChange: (value: string) => void;
	type: KanaType;
	placeholder?: string;
	label: string;
	disabled?: boolean;
}

export interface KanaCharacter {
	character: string;
	romaji: string;
	type: KanaType;
}

export interface ConversionOptions {
	preserveSpacing: boolean;
	preservePunctuation: boolean;
	convertLongVowels: boolean;
}

// Font-related types
export type FontSize = "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";

export interface FontFamily {
	name: string;
	value: string;
	displayName: string;
	description: string;
}

export interface FontSettings {
	fontSize: FontSize;
	romajiFontFamily: string;
	hiraganaFontFamily: string;
	katakanaFontFamily: string;
}

export interface FontSettingsContextType {
	fontSettings: FontSettings;
	updateFontSettings: (settings: Partial<FontSettings>) => void;
	resetFontSettings: () => void;
}
