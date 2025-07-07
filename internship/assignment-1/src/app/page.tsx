"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import quotes from "@/data/quotes";

export default function Home() {
  const [displayedQuotes, setDisplayedQuotes] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const generateQuotes = () => {
    const shuffled = [...quotes].sort(() => 0.5 - Math.random());
    setDisplayedQuotes(shuffled.slice(0, 3));
  };

  const handleCopy = async (quote: string, index: number) => {
    try {
      await navigator.clipboard.writeText(quote);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col text-gray-800 dark:text-white"
      style={{
        backgroundImage: "url('/1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 dark:from-indigo-700 dark:to-purple-700 p-5 shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center tracking-wide">
          ✨ Quotes Generator
        </h1>
      </header>

      {/* Main */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12">
        <Button
          onClick={generateQuotes}
          className="mb-10 text-lg font-semibold px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
        >
          🚀 Generate Quotes
        </Button>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
          {displayedQuotes.map((quote, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 transition-transform hover:scale-105 duration-300"
            >
              <blockquote className="text-lg md:text-xl italic text-gray-700 dark:text-gray-100 mb-4">
                “{quote}”
              </blockquote>
              <Button
                variant="outline"
                onClick={() => handleCopy(quote, index)}
                className="text-sm bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                {copiedIndex === index ? "✅ Copied!" : "📋 Copy Quote"}
              </Button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-yellow-500 via-pink-500 to-red-500 dark:from-purple-800 dark:to-indigo-800 p-4 text-center text-white font-medium shadow-inner">
        © 2025 Quotes Generator. Made with ❤️ for the Nexium Internship.
      </footer>
    </div>
  );
}
