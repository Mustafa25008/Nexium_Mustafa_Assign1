import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-900 text-center">
      <div className="max-w-xl w-full bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl">
        <blockquote className="text-xl italic text-gray-700 dark:text-gray-200 mb-4">
          "The best way to get started is to quit talking and begin doing."
        </blockquote>
        <p className="text-right text-sm text-gray-500 dark:text-gray-400 mb-6">– Walt Disney</p>

        <div className="flex justify-center gap-4">
          <Button variant="outline">New Quote</Button>
          <Button variant="outline">Copy</Button>
        </div>
      </div>
    </main>
  );
}
