import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { quotes } from "@/data/quotes";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [displayedQuotes, setDisplayedQuotes] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [error, setError] = useState("");

  const generateQuotes = () => {
    if (!selectedTopic) {
      setError("Please select a topic first.");
      setDisplayedQuotes([]);
      return;
    }
    setError("");
    const topicQuotes = quotes[selectedTopic as keyof typeof quotes];
    const shuffled = [...topicQuotes].sort(() => 0.5 - Math.random());
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
      className="min-h-screen flex flex-col text-foreground"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <header className="bg-gradient-header dark:bg-gradient-header-dark p-5 shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center tracking-wide">
          ✨ Quotes Generator
        </h1>
      </header>

      {/* Main */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 gap-6">
        {/* Topic Dropdown */}
        <div className="w-full max-w-xs">
          <Select onValueChange={setSelectedTopic}>
            <SelectTrigger className="w-full bg-card dark:bg-quote-surface-dark">
              <SelectValue placeholder="Select a topic" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(quotes).map((topic) => (
                <SelectItem key={topic} value={topic}>
                  {topic.charAt(0).toUpperCase() + topic.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={generateQuotes}
          className="text-lg font-semibold px-8 py-4 rounded-full bg-gradient-button text-white shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
        >
          🚀 Generate Quotes
        </Button>

        {error && <p className="text-quote-error text-sm">{error}</p>}

        {/* Display Quotes */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
          {displayedQuotes.map((quote, index) => (
            <div
              key={index}
              className="bg-card dark:bg-quote-surface-dark rounded-2xl p-6 shadow-xl border border-border dark:border-muted transition-transform hover:scale-105 duration-300"
            >
              <blockquote className="text-lg md:text-xl italic text-card-foreground dark:text-foreground mb-4">
                "{quote}"
              </blockquote>
              <Button
                variant="outline"
                onClick={() => handleCopy(quote, index)}
                className="text-sm bg-muted dark:bg-muted hover:bg-secondary dark:hover:bg-accent"
              >
                {copiedIndex === index ? "✅ Copied!" : "📋 Copy Quote"}
              </Button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-footer dark:bg-gradient-footer-dark p-4 text-center text-white font-medium shadow-inner">
        © 2025 Quotes Generator. Made with ❤️ for inspiration.
      </footer>
    </div>
  );
};

export default Index;