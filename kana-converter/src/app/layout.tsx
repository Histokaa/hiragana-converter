import type { Metadata } from "next";
import {
	Geist,
	Geist_Mono,
	Noto_Sans_JP,
	Noto_Serif_JP,
	Inter,
	Roboto,
	Open_Sans
} from "next/font/google";
import "./globals.css";
import { FontSettingsProvider } from "@/hooks/FontSettingsContext";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"]
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"]
});

// Japanese fonts
const notoSansJP = Noto_Sans_JP({
	variable: "--font-noto-sans-jp",
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"],
	display: "swap"
});

const notoSerifJP = Noto_Serif_JP({
	variable: "--font-noto-serif-jp",
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	display: "swap"
});

// Western fonts
const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	display: "swap"
});

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"],
	display: "swap"
});

const openSans = Open_Sans({
	variable: "--font-open-sans",
	subsets: ["latin"],
	display: "swap"
});

export const metadata: Metadata = {
	title: "Kana Converter",
	description: "Convert between Hiragana, Katakana, and Romaji"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} ${notoSerifJP.variable} ${inter.variable} ${roboto.variable} ${openSans.variable} antialiased`}
			>
				<FontSettingsProvider>{children}</FontSettingsProvider>
			</body>
		</html>
	);
}
