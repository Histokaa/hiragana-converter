import ConverterGrid from "../components/converter/ConverterGrid";
import ErrorBoundary from "../components/layout/ErrorBoundary";
import { APP_NAME, APP_DESCRIPTION } from "../constants";

export default function Home() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
			{/* Header */}
			<header className="relative">
				<div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-5"></div>
				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
					<div className="text-center">
						<h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
							{APP_NAME}
							<span className="ml-2 text-xl md:text-2xl">かな</span>
						</h1>
						<p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
							{APP_DESCRIPTION} - Real-time conversion between Hiragana,
							Katakana, and Romaji
						</p>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<section className="relative">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
					<ErrorBoundary>
						<ConverterGrid className="max-w-7xl mx-auto" />
					</ErrorBoundary>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t border-gray-200 bg-white/80 backdrop-blur-sm">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<div className="text-center">
						<p className="text-gray-600">
							Built with Next.js, TypeScript, and Tailwind CSS
						</p>
						<p className="text-sm text-gray-500 mt-2">
							Perfect for Japanese language learners and developers
						</p>
					</div>
				</div>
			</footer>
		</main>
	);
}
