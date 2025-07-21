"use client";

import React, { memo } from "react";
import type { InputFieldProps } from "../../types";
import { FIELD_LABELS, PLACEHOLDERS } from "../../constants";

import {
	FONT_SIZE_OPTIONS,
	ROMAJI_FONTS,
	HIRAGANA_FONTS,
	KATAKANA_FONTS
} from "../../constants";
import { useFontSettings } from "@/hooks/FontSettingsContext";

interface ExtendedInputFieldProps extends InputFieldProps {
	onClear?: () => void;
	onCopy?: () => void;
	showCharacterCount?: boolean;
	isReadOnly?: boolean;
	error?: string | null;
}

const InputField = memo(function InputField({
	value,
	onChange,
	type,
	placeholder,
	label = "",
	disabled = false,
	onClear,
	onCopy,
	showCharacterCount = true,
	isReadOnly = false,
	error
}: ExtendedInputFieldProps) {
	const { fontSettings } = useFontSettings();

	const displayLabel =
		label || FIELD_LABELS[type as keyof typeof FIELD_LABELS] || label;
	const displayPlaceholder =
		placeholder ||
		PLACEHOLDERS[type as keyof typeof PLACEHOLDERS] ||
		placeholder;

	const handleClear = () => {
		if (onClear) {
			onClear();
		} else {
			onChange("");
		}
	};

	const handleCopy = async () => {
		if (onCopy) {
			onCopy();
		} else if (value) {
			try {
				await navigator.clipboard.writeText(value);
				// Could add toast notification here
			} catch (err) {
				console.error("Failed to copy text:", err);
			}
		}
	};

	// Get font styles based on type
	const getFontStyles = () => {
		const fontSize =
			FONT_SIZE_OPTIONS[fontSettings.fontSize as keyof typeof FONT_SIZE_OPTIONS]
				.className;

		let fontFamily = "";
		switch (type) {
			case "romaji":
				const romajiFont = ROMAJI_FONTS.find(
					(f) => f.name === fontSettings.romajiFontFamily
				);
				fontFamily = romajiFont?.value || ROMAJI_FONTS[0].value;
				break;
			case "hiragana":
				const hiraganaFont = HIRAGANA_FONTS.find(
					(f) => f.name === fontSettings.hiraganaFontFamily
				);
				fontFamily = hiraganaFont?.value || HIRAGANA_FONTS[0].value;
				break;
			case "katakana":
				const katakanaFont = KATAKANA_FONTS.find(
					(f) => f.name === fontSettings.katakanaFontFamily
				);
				fontFamily = katakanaFont?.value || KATAKANA_FONTS[0].value;
				break;
			case "mixed":
			default:
				// For mixed/universal input, use system default
				fontFamily = "ui-sans-serif, system-ui, sans-serif";
				break;
		}

		return {
			fontSize: fontSize,
			fontFamily: fontFamily
		};
	};

	const fontStyles = getFontStyles();
	const characterCount = value.length;
	const hasContent = value.trim().length > 0;

	return (
		<div className="relative">
			{/* Field Label */}
			<label className="block text-sm font-semibold text-gray-800 mb-3 tracking-wide">
				{displayLabel}
			</label>

			{/* Input Container */}
			<div className="relative">
				<textarea
					value={value}
					onChange={(e) => onChange(e.target.value)}
					placeholder={displayPlaceholder}
					disabled={disabled}
					readOnly={isReadOnly}
					style={{
						fontFamily: fontStyles.fontFamily
					}}
					className={`
            w-full min-h-[120px] sm:min-h-[130px] px-3 sm:px-4 py-3 sm:py-4 pr-16 sm:pr-20
            border-2 rounded-xl resize-none
            transition-all duration-300 ease-in-out
            focus:outline-none focus:ring-3 focus:ring-blue-500/20
            backdrop-blur-sm bg-white/90
            shadow-sm hover:shadow-md focus:shadow-lg
            ${fontStyles.fontSize}
            ${
							error
								? "border-red-300 bg-red-50/80 focus:border-red-500 focus:ring-red-500/20"
								: "border-gray-200 hover:border-blue-300 focus:border-blue-500"
						}
            ${
							disabled || isReadOnly
								? "bg-gray-50/80 text-gray-500 cursor-not-allowed"
								: "text-gray-900"
						}
            ${hasContent ? "font-medium" : ""}
            placeholder:text-gray-400 placeholder:font-normal
          `}
				/>

				{/* Action Buttons */}
				<div className="absolute top-3 right-3 flex flex-col gap-1">
					{hasContent && (
						<>
							<button
								onClick={handleCopy}
								type="button"
								className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-100/80 
                         rounded-lg transition-all duration-200 backdrop-blur-sm
                         transform hover:scale-105 active:scale-95"
								title="Copy text"
							>
								<svg
									className="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
									/>
								</svg>
							</button>

							{!isReadOnly && (
								<button
									onClick={handleClear}
									type="button"
									className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-100/80 
                           rounded-lg transition-all duration-200 backdrop-blur-sm
                           transform hover:scale-105 active:scale-95"
									title="Clear text"
								>
									<svg
										className="w-4 h-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							)}
						</>
					)}
				</div>
			</div>

			{/* Character Count and Error */}
			<div className="flex justify-between items-center mt-2">
				<div>
					{error && (
						<p className="text-sm text-red-600 flex items-center gap-1">
							<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
									clipRule="evenodd"
								/>
							</svg>
							{error}
						</p>
					)}
				</div>

				{showCharacterCount && (
					<span className="text-xs text-gray-500 tabular-nums">
						{characterCount} characters
					</span>
				)}
			</div>
		</div>
	);
});

export default InputField;
