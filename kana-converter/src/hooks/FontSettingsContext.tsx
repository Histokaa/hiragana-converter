"use client";

import {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
	ReactElement
} from "react";
import type { FontSettings, FontSettingsContextType } from "../types";
import { DEFAULT_FONT_SETTINGS } from "../constants";

// Font Settings Context
const FontSettingsContext = createContext<FontSettingsContextType | undefined>(
	undefined
);

interface FontSettingsProviderProps {
	children: ReactNode;
}

export function FontSettingsProvider({
	children
}: FontSettingsProviderProps): ReactElement {
	const [fontSettings, setFontSettings] = useState<FontSettings>(
		DEFAULT_FONT_SETTINGS
	);

	// Load settings from localStorage on mount
	useEffect(() => {
		const savedSettings = localStorage.getItem("kana-converter-font-settings");
		if (savedSettings) {
			try {
				const parsed = JSON.parse(savedSettings) as FontSettings;
				setFontSettings({
					...DEFAULT_FONT_SETTINGS,
					...parsed
				});
			} catch (error) {
				console.error("Error loading font settings:", error);
			}
		}
	}, []);

	// Save settings to localStorage whenever they change
	useEffect(() => {
		localStorage.setItem(
			"kana-converter-font-settings",
			JSON.stringify(fontSettings)
		);
	}, [fontSettings]);

	const updateFontSettings = (settings: Partial<FontSettings>) => {
		setFontSettings((prev) => ({
			...prev,
			...settings
		}));
	};

	const resetFontSettings = () => {
		setFontSettings(DEFAULT_FONT_SETTINGS);
	};

	const value: FontSettingsContextType = {
		fontSettings,
		updateFontSettings,
		resetFontSettings
	};

	return (
		<FontSettingsContext.Provider value={value}>
			{children}
		</FontSettingsContext.Provider>
	);
}

export function useFontSettings(): FontSettingsContextType {
	const context = useContext(FontSettingsContext);
	if (context === undefined) {
		throw new Error(
			"useFontSettings must be used within a FontSettingsProvider"
		);
	}
	return context;
}
