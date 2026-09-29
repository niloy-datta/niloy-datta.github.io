// একটি নির্দিষ্ট route segment-এর ভিতরে runtime error হলে এই recovery UI দেখায়।
// "use client" দরকার কারণ error object ও reset function browser-এ কাজ করে।
"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // এখন console-এ error রাখছি; production-এ এখানে Sentry-এর মতো service যোগ করা যায়।
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
      <h2 className="text-2xl font-bold text-white">Something went wrong!</h2>
      <p className="text-gray-400">{error.message}</p>
      <button
        onClick={
          // একই route segment আবার render করে recovery করার চেষ্টা করি।
          () => reset()
        }
        className="px-4 py-2 bg-aurora-purple text-white rounded-lg hover:bg-aurora-purple/80 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
