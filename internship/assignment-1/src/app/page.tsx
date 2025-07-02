"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const quote = "The best way to get started is to quit talking and begin doing.";
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(quote);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2s
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-900 text-center">
      <div className="max-w-xl w-full bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl">
        <blockquote className="text-xl italic text-gray-700 dark:text-gray-200 mb-4" >
          {quote}
        </blockquote>
        <p className="text-right text-sm text-gray-500 dark:text-gray-400 mb-6">– Walt Disney</p>

        <div className="flex justify-center gap-4">
          <Button variant="outline">New Quote</Button>
          <Button variant="outline" onClick={handleCopy} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">{copied ? "Copied!" : "Copy Quote"}</Button>
        </div>
      </div>
    </main>
  );
}
