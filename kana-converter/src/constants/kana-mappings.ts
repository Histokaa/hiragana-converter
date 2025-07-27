// Comprehensive Kana to Romaji mapping data

// Hiragana to Romaji mapping
export const HIRAGANA_TO_ROMAJI: Record<string, string> = {
	// Basic vowels
	あ: "a",
	い: "i",
	う: "u",
	え: "e",
	お: "o",

	// K sounds
	か: "ka",
	き: "ki",
	く: "ku",
	け: "ke",
	こ: "ko",
	が: "ga",
	ぎ: "gi",
	ぐ: "gu",
	げ: "ge",
	ご: "go",

	// S sounds
	さ: "sa",
	し: "shi",
	す: "su",
	せ: "se",
	そ: "so",
	ざ: "za",
	じ: "ji",
	ず: "zu",
	ぜ: "ze",
	ぞ: "zo",

	// T sounds
	た: "ta",
	ち: "chi",
	つ: "tsu",
	て: "te",
	と: "to",
	だ: "da",
	づ: "zu",
	で: "de",
	ど: "do",

	// N sounds
	な: "na",
	に: "ni",
	ぬ: "nu",
	ね: "ne",
	の: "no",

	// H sounds
	は: "ha",
	ひ: "hi",
	ふ: "fu",
	へ: "he",
	ほ: "ho",
	ば: "ba",
	び: "bi",
	ぶ: "bu",
	べ: "be",
	ぼ: "bo",
	ぱ: "pa",
	ぴ: "pi",
	ぷ: "pu",
	ぺ: "pe",
	ぽ: "po",

	// M sounds
	ま: "ma",
	み: "mi",
	む: "mu",
	め: "me",
	も: "mo",

	// Y sounds
	や: "ya",
	ゆ: "yu",
	よ: "yo",

	// R sounds
	ら: "ra",
	り: "ri",
	る: "ru",
	れ: "re",
	ろ: "ro",

	// W sounds
	わ: "wa",
	ゐ: "wi",
	ゑ: "we",
	を: "wo",

	// N
	ん: "n",

	// Combination sounds (Kyō, Ryō, etc.)
	きゃ: "kya",
	きゅ: "kyu",
	きょ: "kyo",
	しゃ: "sha",
	しゅ: "shu",
	しょ: "sho",
	ちゃ: "cha",
	ちゅ: "chu",
	ちょ: "cho",
	にゃ: "nya",
	にゅ: "nyu",
	にょ: "nyo",
	ひゃ: "hya",
	ひゅ: "hyu",
	ひょ: "hyo",
	みゃ: "mya",
	みゅ: "myu",
	みょ: "myo",
	りゃ: "rya",
	りゅ: "ryu",
	りょ: "ryo",
	ぎゃ: "gya",
	ぎゅ: "gyu",
	ぎょ: "gyo",
	じゃ: "ja",
	じゅ: "ju",
	じょ: "jo",
	びゃ: "bya",
	びゅ: "byu",
	びょ: "byo",
	ぴゃ: "pya",
	ぴゅ: "pyu",
	ぴょ: "pyo",

	// Small tsu for double consonants
	っ: "tsu"
};

// Katakana to Romaji mapping
export const KATAKANA_TO_ROMAJI: Record<string, string> = {
	// Basic vowels
	ア: "a",
	イ: "i",
	ウ: "u",
	エ: "e",
	オ: "o",

	// K sounds
	カ: "ka",
	キ: "ki",
	ク: "ku",
	ケ: "ke",
	コ: "ko",
	ガ: "ga",
	ギ: "gi",
	グ: "gu",
	ゲ: "ge",
	ゴ: "go",

	// S sounds
	サ: "sa",
	シ: "shi",
	ス: "su",
	セ: "se",
	ソ: "so",
	ザ: "za",
	ジ: "ji",
	ズ: "zu",
	ゼ: "ze",
	ゾ: "zo",

	// T sounds
	タ: "ta",
	チ: "chi",
	ツ: "tsu",
	テ: "te",
	ト: "to",
	ダ: "da",
	ヂ: "ji",
	ヅ: "zu",
	デ: "de",
	ド: "do",

	// N sounds
	ナ: "na",
	ニ: "ni",
	ヌ: "nu",
	ネ: "ne",
	ノ: "no",

	// H sounds
	ハ: "ha",
	ヒ: "hi",
	フ: "fu",
	ヘ: "he",
	ホ: "ho",
	バ: "ba",
	ビ: "bi",
	ブ: "bu",
	ベ: "be",
	ボ: "bo",
	パ: "pa",
	ピ: "pi",
	プ: "pu",
	ペ: "pe",
	ポ: "po",

	// M sounds
	マ: "ma",
	ミ: "mi",
	ム: "mu",
	メ: "me",
	モ: "mo",

	// Y sounds
	ヤ: "ya",
	ユ: "yu",
	ヨ: "yo",

	// R sounds
	ラ: "ra",
	リ: "ri",
	ル: "ru",
	レ: "re",
	ロ: "ro",

	// W sounds
	ワ: "wa",
	ヰ: "wi",
	ヱ: "we",
	ヲ: "wo",

	// N
	ン: "n",

	// Combination sounds
	キャ: "kya",
	キュ: "kyu",
	キョ: "kyo",
	シャ: "sha",
	シュ: "shu",
	ショ: "sho",
	チャ: "cha",
	チュ: "chu",
	チョ: "cho",
	ニャ: "nya",
	ニュ: "nyu",
	ニョ: "nyo",
	ヒャ: "hya",
	ヒュ: "hyu",
	ヒョ: "hyo",
	ミャ: "mya",
	ミュ: "myu",
	ミョ: "myo",
	リャ: "rya",
	リュ: "ryu",
	リョ: "ryo",
	ギャ: "gya",
	ギュ: "gyu",
	ギョ: "gyo",
	ジャ: "ja",
	ジュ: "ju",
	ジョ: "jo",
	ビャ: "bya",
	ビュ: "byu",
	ビョ: "byo",
	ピャ: "pya",
	ピュ: "pyu",
	ピョ: "pyo",

	// Extended katakana for foreign words
	ヴ: "vu",
	ファ: "fa",
	フィ: "fi",
	フェ: "fe",
	フォ: "fo",
	ティ: "ti",
	トゥ: "tu",
	ディ: "di",
	ドゥ: "du",
	ウィ: "wi",
	ウェ: "we",
	ウォ: "wo",

	// Small tsu for double consonants
	ッ: "tsu"
};

// Reverse mappings for conversion from Romaji
export const ROMAJI_TO_HIRAGANA: Record<string, string> = Object.fromEntries(
	Object.entries(HIRAGANA_TO_ROMAJI).map(([kana, romaji]) => [romaji, kana])
);

export const ROMAJI_TO_KATAKANA: Record<string, string> = Object.fromEntries(
	Object.entries(KATAKANA_TO_ROMAJI).map(([kana, romaji]) => [romaji, kana])
);

// Hiragana to Katakana direct mapping
export const HIRAGANA_TO_KATAKANA: Record<string, string> = {
	あ: "ア",
	い: "イ",
	う: "ウ",
	え: "エ",
	お: "オ",
	か: "カ",
	き: "キ",
	く: "ク",
	け: "ケ",
	こ: "コ",
	が: "ガ",
	ぎ: "ギ",
	ぐ: "グ",
	げ: "ゲ",
	ご: "ゴ",
	さ: "サ",
	し: "シ",
	す: "ス",
	せ: "セ",
	そ: "ソ",
	ざ: "ザ",
	じ: "ジ",
	ず: "ズ",
	ぜ: "ゼ",
	ぞ: "ゾ",
	た: "タ",
	ち: "チ",
	つ: "ツ",
	て: "テ",
	と: "ト",
	だ: "ダ",
	ぢ: "ヂ",
	づ: "ヅ",
	で: "デ",
	ど: "ド",
	な: "ナ",
	に: "ニ",
	ぬ: "ヌ",
	ね: "ネ",
	の: "ノ",
	は: "ハ",
	ひ: "ヒ",
	ふ: "フ",
	へ: "ヘ",
	ほ: "ホ",
	ば: "バ",
	び: "ビ",
	ぶ: "ブ",
	べ: "ベ",
	ぼ: "ボ",
	ぱ: "パ",
	ぴ: "ピ",
	ぷ: "プ",
	ぺ: "ペ",
	ぽ: "ポ",
	ま: "マ",
	み: "ミ",
	む: "ム",
	め: "メ",
	も: "モ",
	や: "ヤ",
	ゆ: "ユ",
	よ: "ヨ",
	ら: "ラ",
	り: "リ",
	る: "ル",
	れ: "レ",
	ろ: "ロ",
	わ: "ワ",
	ゐ: "ヰ",
	ゑ: "ヱ",
	を: "ヲ",
	ん: "ン",
	っ: "ッ"
};

// Katakana to Hiragana direct mapping
export const KATAKANA_TO_HIRAGANA: Record<string, string> = Object.fromEntries(
	Object.entries(HIRAGANA_TO_KATAKANA).map(([hiragana, katakana]) => [
		katakana,
		hiragana
	])
);
