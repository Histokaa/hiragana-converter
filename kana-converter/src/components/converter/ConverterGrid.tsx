"use client";

import React, { useState, useCallback, memo, useMemo } from "react";
import InputField from "./InputField";
import FontSettings from "../ui/FontSettings";
import { optimizedConvertToAllFormats } from "../../lib/conversion/optimized";
import { detectKanaType } from "../../lib/utils";
import {
	validateInputForType,
	getValidationError
} from "../../lib/conversion/validation";
import type { ConversionResult, KanaType } from "../../types";
import { DEFAULT_CONVERSION_OPTIONS } from "../../constants";

interface ConverterGridProps {
	className?: string;
}

const ConverterGrid = memo(function ConverterGrid({
	className = ""
}: ConverterGridProps) {
	const [universalInput, setUniversalInput] = useState("");
	const [hiraganaInput, setHiraganaInput] = useState("");
	const [katakanaInput, setKatakanaInput] = useState("");
	const [romajiInput, setRomajiInput] = useState("");

	const [errors, setErrors] = useState<Record<string, string | null>>({
		universal: null,
		hiragana: null,
		katakana: null,
		romaji: null
	});

	const [activeField, setActiveField] = useState<
		"universal" | "hiragana" | "katakana" | "romaji"
	>("universal");

	const updateAllFields = useCallback(
		(inputText: string, sourceField: KanaType | "universal") => {
			if (!inputText.trim()) {
				setUniversalInput("");
				setHiraganaInput("");
				setKatakanaInput("");
				setRomajiInput("");
				setErrors({
					universal: null,
					hiragana: null,
					katakana: null,
					romaji: null
				});
				return;
			}

			try {
				const result: ConversionResult = optimizedConvertToAllFormats(
					inputText,
					DEFAULT_CONVERSION_OPTIONS
				);

				// Update fields based on source
				if (sourceField !== "universal") setUniversalInput(inputText);
				if (sourceField !== "hiragana") setHiraganaInput(result.hiragana);
				if (sourceField !== "katakana") setKatakanaInput(result.katakana);
				if (sourceField !== "romaji") setRomajiInput(result.romaji);

				// Clear errors for successful conversion
				setErrors({
					universal: null,
					hiragana: null,
					katakana: null,
					romaji: null
				});
			} catch (error) {
				console.error("Conversion error:", error);
			}
		},
		[]
	);

	const handleUniversalChange = useCallback(
		(value: string) => {
			setUniversalInput(value);
			setActiveField("universal");
			updateAllFields(value, "universal");
		},
		[updateAllFields]
	);

	const handleHiraganaChange = useCallback(
		(value: string) => {
			setHiraganaInput(value);
			setActiveField("hiragana");

			const error = getValidationError(value, "hiragana");
			setErrors((prev) => ({ ...prev, hiragana: error }));

			if (!error) {
				updateAllFields(value, "hiragana");
			}
		},
		[updateAllFields]
	);

	const handleKatakanaChange = useCallback(
		(value: string) => {
			setKatakanaInput(value);
			setActiveField("katakana");

			const error = getValidationError(value, "katakana");
			setErrors((prev) => ({ ...prev, katakana: error }));

			if (!error) {
				updateAllFields(value, "katakana");
			}
		},
		[updateAllFields]
	);

	const handleRomajiChange = useCallback(
		(value: string) => {
			setRomajiInput(value);
			setActiveField("romaji");

			const error = getValidationError(value, "romaji");
			setErrors((prev) => ({ ...prev, romaji: error }));

			if (!error) {
				updateAllFields(value, "romaji");
			}
		},
		[updateAllFields]
	);

	const clearAllFields = useCallback(() => {
		setUniversalInput("");
		setHiraganaInput("");
		setKatakanaInput("");
		setRomajiInput("");
		setErrors({
			universal: null,
			hiragana: null,
			katakana: null,
			romaji: null
		});
		setActiveField("universal");
	}, []);

	const hasAnyContent = useMemo(
		() => universalInput || hiraganaInput || katakanaInput || romajiInput,
		[universalInput, hiraganaInput, katakanaInput, romajiInput]
	);

	return (
		<div className={`space-y-8 ${className}`}>
			{/* Header with Clear All Button and Font Settings */}
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
				<div>
					<h2 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
						Kana Converter
					</h2>
					<p className="text-gray-600 mt-2 leading-relaxed">
						Type in any field to see real-time conversion between Japanese
						writing systems
					</p>
				</div>

				<div className="flex items-center gap-3">
					<FontSettings className="flex-shrink-0" />

					{hasAnyContent && (
						<button
							onClick={clearAllFields}
							className="px-6 py-3 text-sm font-semibold text-gray-600 bg-gradient-to-r from-gray-100 to-gray-200 
                       hover:from-gray-200 hover:to-gray-300 rounded-xl transition-all duration-300
                       flex items-center gap-2 shadow-sm hover:shadow-md
                       transform hover:scale-105 active:scale-95 backdrop-blur-sm"
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
									d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1H9a1 1 0 00-1 1v3M4 7h16"
								/>
							</svg>
							Clear All
						</button>
					)}
				</div>
			</div>

			{/* Converter Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
				{/* Universal Input Field */}
				<div
					className={`p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/50
                   transition-all duration-300 hover:shadow-lg hover:bg-white/80 ${
											activeField === "universal"
												? "ring-2 ring-blue-500/30 shadow-lg bg-white/90"
												: ""
										}`}
				>
					<InputField
						value={universalInput}
						onChange={handleUniversalChange}
						type="mixed"
						label="Universal Input (Everything)"
						placeholder="Type in any format - Hiragana, Katakana, or Romaji..."
						error={errors.universal}
					/>
				</div>

				{/* Hiragana Field */}
				<div
					className={`p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/50
                   transition-all duration-300 hover:shadow-lg hover:bg-white/80 ${
											activeField === "hiragana"
												? "ring-2 ring-blue-500/30 shadow-lg bg-white/90"
												: ""
										}`}
				>
					<InputField
						value={hiraganaInput}
						onChange={handleHiraganaChange}
						type="hiragana"
						label="Hiragana (ひらがな)"
						error={errors.hiragana}
					/>
				</div>

				{/* Katakana Field */}
				<div
					className={`p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/50
                   transition-all duration-300 hover:shadow-lg hover:bg-white/80 ${
											activeField === "katakana"
												? "ring-2 ring-blue-500/30 shadow-lg bg-white/90"
												: ""
										}`}
				>
					<InputField
						value={katakanaInput}
						onChange={handleKatakanaChange}
						type="katakana"
						label="Katakana (カタカナ)"
						error={errors.katakana}
					/>
				</div>

				{/* Romaji Field */}
				<div
					className={`p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/50
                   transition-all duration-300 hover:shadow-lg hover:bg-white/80 ${
											activeField === "romaji"
												? "ring-2 ring-blue-500/30 shadow-lg bg-white/90"
												: ""
										}`}
				>
					<InputField
						value={romajiInput}
						onChange={handleRomajiChange}
						type="romaji"
						label="Romaji (Roman Alphabet)"
						error={errors.romaji}
					/>
				</div>
			</div>
		</div>
	);
});

export default ConverterGrid;
