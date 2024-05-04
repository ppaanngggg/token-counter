"use client";

import { useState, useEffect, useRef } from "react";
import { AutoTokenizer, PreTrainedTokenizer } from "@xenova/transformers";

const models: { [index: string]: { [index: string]: string } } = {
  openai: {
    "gpt-3.5": "Xenova/gpt-3.5-turbo",
    "gpt-3.5-turbo": "Xenova/gpt-3.5-turbo",
    "gpt-4": "Xenova/gpt-4",
    "gpt-4-turbo": "Xenova/gpt-4",
    "text-embedding-3-large": "Xenova/text-embedding-ada-002",
    "text-embedding-3-small": "Xenova/text-embedding-ada-002",
    "text-embedding-ada-002": "Xenova/text-embedding-ada-002",
  },
  anthropic: {
    "claude-3-opus": "Xenova/claude-tokenizer",
    "claude-3-sonnet": "Xenova/claude-tokenizer",
    "claude-3-haiku": "Xenova/claude-tokenizer",
    "claude-2.1": "Xenova/claude-tokenizer",
    "claude-2.0": "Xenova/claude-tokenizer",
    "claude-instant-1.2": "Xenova/claude-tokenizer",
  },
  llama: {
    "llama-3": "Xenova/llama-3-tokenizer",
    "llama-2": "Xenova/llama2-tokenizer",
    "code-llama": "Xenova/llama-code-tokenizer",
  },
};

export default function TokenCounter(props: { group: string; model: string }) {
  const [text, setText] = useState<string>("");
  const [tokens, setTokens] = useState<number>(0);
  const tokenizer = useRef<PreTrainedTokenizer>();

  // init tokenizer from file
  useEffect(() => {
    AutoTokenizer.from_pretrained(models[props.group][props.model]).then(
      (t) => {
        tokenizer.current = t;
      },
    );
  }, [props.group, props.model]);

  // update tokens
  useEffect(() => {
    let tokens = 0;
    if (tokenizer.current) {
      let encoding = tokenizer.current.encode(text);
      console.log(encoding);
      tokens = encoding.length;
    }
    setTokens(tokens);
  }, [text]);

  return (
    <div className="lg:w-1/2 sm:w-full lg:min-h-[40vh] sm:min-h-[80vh]">
      <textarea
        className="textarea textarea-bordered textarea-lg rounded-lg w-full h-full"
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <p>{tokens} tokens</p>
    </div>
  );
}
