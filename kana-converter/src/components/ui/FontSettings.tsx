"use client";

import React, { useState } from "react";

import type { FontFamily } from "../../types";
import {
	FONT_SIZE_OPTIONS,
	ROMAJI_FONTS,
	HIRAGANA_FONTS,
	KATAKANA_FONTS
} from "../../constants";
import { useFontSettings } from "@/hooks/FontSettingsContext";

interface FontSettingsProps {
	className?: string;
}

export default function FontSettings({ className = "" }: FontSettingsProps) {
	const { fontSettings, updateFontSettings, resetFontSettings } =
		useFontSettings();
	const [isOpen, setIsOpen] = useState(false);

	const handleFontFamilyChange = (
		type: "romaji" | "hiragana" | "katakana",
		fontName: string
	) => {
		const settingKey = `${type}FontFamily` as keyof typeof fontSettings;
		updateFontSettings({ [settingKey]: fontName });
	};

	const FontFamilySelector = ({
		label,
		type,
		fonts,
		currentFont
	}: {
		label: string;
		type: "romaji" | "hiragana" | "katakana";
		fonts: FontFamily[];
		currentFont: string;
	}) => {
		const selectedFont = fonts.find((f) => f.name === currentFont) || fonts[0];

		return (
			<div className="space-y-2">
				<label className="block text-sm font-semibold text-gray-800 mb-1">
					{label}
				</label>
				<select
					value={currentFont}
					onChange={(e) => handleFontFamilyChange(type, e.target.value)}
					className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white text-gray-900 hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
				>
					{fonts.map((font) => (
						<option
							key={font.name}
							value={font.name}
							className="py-2 px-3 bg-white text-gray-900 hover:bg-blue-50"
						>
							{font.displayName}
						</option>
					))}
				</select>
				<p className="text-xs text-gray-600 bg-gray-50 p-2 rounded border-l-4 border-blue-200">
					{selectedFont.description}
				</p>
			</div>
		);
	};

	return (
		<div className={`relative ${className}`}>
			{/* Settings Toggle Button */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-all duration-200 shadow-sm"
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
						d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
					/>
				</svg>
				Font Settings
				<svg
					className={`w-4 h-4 transition-transform duration-200 ${
						isOpen ? "rotate-180" : ""
					}`}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>

			{/* Settings Panel */}
			{isOpen && (
				<div className="absolute top-12 right-0 z-50 w-80 max-w-sm bg-white border-2 border-gray-300 rounded-xl shadow-2xl p-6 backdrop-blur-sm">
					<div className="space-y-6">
						{/* Header */}
						<div className="flex items-center justify-between">
							<h3 className="text-lg font-semibold text-gray-800">
								Font Settings
							</h3>
							<button
								onClick={() => setIsOpen(false)}
								className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
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
						</div>

						{/* Font Size */}
						<div className="space-y-3">
							<label className="block text-sm font-semibold text-gray-800">
								Font Size
							</label>
							<div className="grid grid-cols-3 gap-2">
								{Object.entries(FONT_SIZE_OPTIONS).map(([size, config]) => (
									<button
										key={size}
										onClick={() =>
											updateFontSettings({
												fontSize: size as keyof typeof FONT_SIZE_OPTIONS
											})
										}
										className={`p-3 text-xs font-medium rounded-lg transition-all duration-200 border-2 ${
											fontSettings.fontSize === size
												? "bg-blue-500 text-white shadow-md border-blue-500"
												: "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm"
										}`}
									>
										{config.label}
									</button>
								))}
							</div>
						</div>

						{/* Font Families */}
						<div className="space-y-4">
							<FontFamilySelector
								label="Romaji Font"
								type="romaji"
								fonts={ROMAJI_FONTS}
								currentFont={fontSettings.romajiFontFamily}
							/>

							<FontFamilySelector
								label="Hiragana Font"
								type="hiragana"
								fonts={HIRAGANA_FONTS}
								currentFont={fontSettings.hiraganaFontFamily}
							/>

							<FontFamilySelector
								label="Katakana Font"
								type="katakana"
								fonts={KATAKANA_FONTS}
								currentFont={fontSettings.katakanaFontFamily}
							/>
						</div>

						{/* Reset Button */}
						<div className="pt-4 border-t border-gray-200">
							<button
								onClick={resetFontSettings}
								className="w-full px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-200"
							>
								Reset to Default
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Backdrop */}
			{isOpen && (
				<div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
			)}
		</div>
	);
}
