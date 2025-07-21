// Optimized conversion functions with memoization for better performance
import { convertToAllFormats } from "./index";
import type { ConversionResult, ConversionOptions } from "../../types";

// Simple LRU cache for conversion results
class ConversionCache {
	private cache = new Map<string, ConversionResult>();
	private maxSize = 100;

	get(key: string): ConversionResult | undefined {
		const result = this.cache.get(key);
		if (result) {
			// Move to end (most recently used)
			this.cache.delete(key);
			this.cache.set(key, result);
		}
		return result;
	}

	set(key: string, value: ConversionResult): void {
		if (this.cache.size >= this.maxSize) {
			// Remove oldest entry
			const firstKey = this.cache.keys().next().value;
			if (firstKey) {
				this.cache.delete(firstKey);
			}
		}
		this.cache.set(key, value);
	}

	clear(): void {
		this.cache.clear();
	}
}

const conversionCache = new ConversionCache();

/**
 * Optimized conversion with caching
 */
export function optimizedConvertToAllFormats(
	text: string,
	options?: Partial<ConversionOptions>
): ConversionResult {
	if (!text.trim()) {
		return {
			hiragana: "",
			katakana: "",
			romaji: ""
		};
	}

	// Create cache key
	const cacheKey = `${text}|${JSON.stringify(options || {})}`;

	// Check cache first
	const cached = conversionCache.get(cacheKey);
	if (cached) {
		return cached;
	}

	// Compute result
	const result = convertToAllFormats(text, options);

	// Cache result
	conversionCache.set(cacheKey, result);

	return result;
}

/**
 * Clear conversion cache (useful for memory management)
 */
export function clearConversionCache(): void {
	conversionCache.clear();
}
