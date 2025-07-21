// Constants for the Kana Converter application
import type { FontFamily, FontSettings } from "../types";

export const APP_NAME = "Kana Converter";
export const APP_DESCRIPTION = "Convert between Hiragana, Katakana, and Romaji";

// Default conversion options
export const DEFAULT_CONVERSION_OPTIONS = {
	preserveSpacing: true,
	preservePunctuation: true,
	convertLongVowels: true
};

// Field labels
export const FIELD_LABELS = {
	universal: "Universal Input",
	hiragana: "Hiragana (ひらがな)",
	katakana: "Katakana (カタカナ)",
	romaji: "Romaji (ローマ字)"
} as const;

// Placeholder texts
export const PLACEHOLDERS = {
	universal: "Type in any format...",
	hiragana: "Enter hiragana...",
	katakana: "Enter katakana...",
	romaji: "Enter romaji..."
} as const;

// Font size labels and values
export const FONT_SIZE_OPTIONS = {
	sm: { label: "Small", value: "sm", className: "text-sm" },
	base: { label: "Medium", value: "base", className: "text-base" },
	lg: { label: "Large", value: "lg", className: "text-lg" },
	xl: { label: "Extra Large", value: "xl", className: "text-xl" },
	"2xl": { label: "2X Large", value: "2xl", className: "text-2xl" },
	"3xl": { label: "3X Large", value: "3xl", className: "text-3xl" }
} as const;

// Font families for Romaji
export const ROMAJI_FONTS: FontFamily[] = [
	{
		name: "system-ui",
		value: "ui-sans-serif, system-ui, sans-serif",
		displayName: "System Default",
		description: "Your system's default sans-serif font"
	},
	{
		name: "inter",
		value: "var(--font-inter), ui-sans-serif, system-ui, sans-serif",
		displayName: "Inter",
		description: "Modern, highly readable sans-serif"
	},
	{
		name: "roboto",
		value: "var(--font-roboto), ui-sans-serif, system-ui, sans-serif",
		displayName: "Roboto",
		description: "Google's versatile sans-serif font"
	},
	{
		name: "open-sans",
		value: "var(--font-open-sans), ui-sans-serif, system-ui, sans-serif",
		displayName: "Open Sans",
		description: "Friendly and readable humanist sans-serif"
	},
	{
		name: "source-sans",
		value: "'Source Sans Pro', ui-sans-serif, system-ui, sans-serif",
		displayName: "Source Sans Pro",
		description: "Clean and professional sans-serif"
	},
	{
		name: "mono",
		value:
			"var(--font-geist-mono), 'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
		displayName: "Monospace",
		description: "Fixed-width font for precise alignment"
	}
];

// Font families for Hiragana
export const HIRAGANA_FONTS: FontFamily[] = [
	{
		name: "noto-sans-jp",
		value:
			"var(--font-noto-sans-jp), 'Hiragino Sans', 'Yu Gothic', 'Meiryo', sans-serif",
		displayName: "Noto Sans Japanese",
		description: "Google's modern Japanese font (recommended)"
	},
	{
		name: "hiragino-sans",
		value:
			"'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', sans-serif",
		displayName: "Hiragino Sans",
		description: "Clean and modern Japanese font"
	},
	{
		name: "yu-gothic",
		value: "'Yu Gothic', 'Yu Gothic UI', 'Meiryo', sans-serif",
		displayName: "Yu Gothic",
		description: "Microsoft's Japanese font"
	},
	{
		name: "meiryo",
		value: "'Meiryo', 'MS Gothic', sans-serif",
		displayName: "Meiryo",
		description: "Clear and readable Japanese font"
	},
	{
		name: "ms-gothic",
		value: "'MS Gothic', monospace",
		displayName: "MS Gothic",
		description: "Traditional monospace Japanese font"
	},
	{
		name: "noto-serif-jp",
		value: "var(--font-noto-serif-jp), 'Yu Mincho', serif",
		displayName: "Noto Serif Japanese",
		description: "Elegant serif Japanese font"
	}
];

// Font families for Katakana (same as Hiragana but with different descriptions)
export const KATAKANA_FONTS: FontFamily[] = [
	{
		name: "noto-sans-jp",
		value:
			"var(--font-noto-sans-jp), 'Hiragino Sans', 'Yu Gothic', 'Meiryo', sans-serif",
		displayName: "Noto Sans Japanese",
		description: "Google's modern Japanese font (recommended)"
	},
	{
		name: "hiragino-sans",
		value:
			"'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', sans-serif",
		displayName: "Hiragino Sans",
		description: "Clean and modern Japanese font"
	},
	{
		name: "yu-gothic",
		value: "'Yu Gothic', 'Yu Gothic UI', 'Meiryo', sans-serif",
		displayName: "Yu Gothic",
		description: "Microsoft's Japanese font"
	},
	{
		name: "meiryo",
		value: "'Meiryo', 'MS Gothic', sans-serif",
		displayName: "Meiryo",
		description: "Clear and readable Japanese font"
	},
	{
		name: "ms-gothic",
		value: "'MS Gothic', monospace",
		displayName: "MS Gothic",
		description: "Traditional monospace Japanese font"
	},
	{
		name: "noto-serif-jp",
		value: "var(--font-noto-serif-jp), 'Yu Mincho', serif",
		displayName: "Noto Serif Japanese",
		description: "Elegant serif Japanese font"
	}
];

// Default font settings
export const DEFAULT_FONT_SETTINGS: FontSettings = {
	fontSize: "base",
	romajiFontFamily: "system-ui",
	hiraganaFontFamily: "noto-sans-jp",
	katakanaFontFamily: "noto-sans-jp"
};

// Re-export mapping constants
export * from "./kana-mappings";
