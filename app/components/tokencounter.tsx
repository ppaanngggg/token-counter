"use client";

import { useState, useEffect, useRef } from "react";
import { AutoTokenizer, PreTrainedTokenizer } from "@xenova/transformers";

export default function TokenCounter(props: {
  model: { name: string; value: string; hub: string };
}) {
  const [text, setText] = useState<string>("");
  const [tokens, setTokens] = useState<number>(0);
  const tokenizer = useRef<PreTrainedTokenizer>();

  // init tokenizer from file
  useEffect(() => {
    AutoTokenizer.from_pretrained(props.model.hub).then((t) => {
      tokenizer.current = t;
    });
  }, [props.model]);

  // update tokens
  useEffect(() => {
    let tokens = 0;
    if (tokenizer.current) {
      let encoding = tokenizer.current.encode(text);
      tokens = encoding.length;
    }
    setTokens(tokens);
  }, [text]);

  return (
    <div className="flex-1 w-full lg:max-h-[50vh] lg:max-w-[80vh] flex flex-col items-center px-4">
      <p className="text-sm bg-accent text-accent-content rounded-lg m-2 py-0.5 px-2">
        * No need to worry about your data, counter is running on your browser.
      </p>
      <textarea
        className="textarea textarea-bordered textarea-md rounded-md flex-1 w-full bg-base-100"
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      {tokenizer.current ? (
        <p className="text-base font-bold m-4">Tokens: {tokens}</p>
      ) : (
        <span className="loading loading-dots loading-md m-4"></span>
      )}
    </div>
  );
}
