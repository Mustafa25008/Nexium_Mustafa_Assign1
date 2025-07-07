"use client";
import { useState } from "react";
import quotes from "@/data/quotes";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [generatedQuotes, setGeneratedQuotes] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const generateQuotes = () => {
    const shuffled = [...quotes].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3); // get 3 random quotes
    setGeneratedQuotes(selected);
    setCopiedIndex(null);
  };

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gray-100 dark:bg-green-600 text-center">
      {generatedQuotes.length === 0 ? (
        <Button onClick={generateQuotes} className="text-lg px-6 py-3">
          Generate Quotes
        </Button>
      ) : (
        <>
          <div className="space-y-6 max-w-2xl w-full">
            {generatedQuotes.map((quote, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition hover:shadow-xl"
              >
                <blockquote className="text-lg italic text-gray-700 dark:text-gray-200 mb-4">
                  {quote}
                </blockquote>
                <Button
                  onClick={() => handleCopy(quote, index)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  {copiedIndex === index ? "Copied!" : "Copy Quote"}
                </Button>
              </div>
            ))}
          </div>
          <Button
            onClick={generateQuotes}
            className="mt-10 text-base px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
          >
            Generate New Quotes
          </Button>
        </>
      )}
    </main>
  );
}
