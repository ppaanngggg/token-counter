"use client";

import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Model } from "@/app/utils/groups";

export default function ClaudeTokenCounter({ model }: { model: Model }) {
  const [text, setText] = useState<string>("");
  const [tokens, setTokens] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const countTokens = useDebouncedCallback(async (text: string) => {
    if (!text) {
      setTokens(0);
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/claude/tokencounter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ model: model.value, text }),
      });
      const data = await response.json();
      setTokens(data.tokens);
    } catch (error) {
      console.error("Error counting tokens:", error);
    } finally {
      setLoading(false);
    }
  }, 300);

  useEffect(() => {
    countTokens(text);
  }, [text, countTokens]);

  return (
    <div className="max-w-full w-[64rem] h-[50vh] flex flex-col items-left content-center p-2">
      <p className="text-sm m-1">
        * Don&apos;t worry about your data, calculation is happening on our
        server.
      </p>
      <textarea
        className="textarea textarea-bordered textarea-md rounded-md flex-1 w-full bg-base-100 shadow"
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      {loading ? (
        <span className="h-10 loading loading-dots loading-md m-1"></span>
      ) : (
        <p className="h-10 text-base font-bold m-1">Tokens: {tokens}</p>
      )}
    </div>
  );
}
