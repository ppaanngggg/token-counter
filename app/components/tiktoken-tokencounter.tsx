"use client";

import { encodingForModel, Tiktoken } from "js-tiktoken";
import { useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export default function TikTokenCounter(props: {
  model: { name: string; value: string; context: number; hub: string };
}) {
  const [text, setText] = useState<string>("");
  const [tokens, setTokens] = useState<number>(0);
  const tokenizer = useRef<Tiktoken>();

  useEffect(() => {
    const init = async () => {
      try {
        tokenizer.current = encodingForModel(props.model.value as any);
        setTokens(tokenizer.current.encode(text).length);
      } catch (e) {
        console.log(e);
      }
    };
    init();
  }, [props.model]);

  // update tokens
  useEffect(
    useDebouncedCallback(() => {
      let tokens = 0;
      if (tokenizer.current) {
        let encoding = tokenizer.current.encode(text);
        tokens = encoding.length;
      }
      console.log(tokens);
      setTokens(tokens);
    }, 300),
    [text],
  );

  return (
    <div className="max-w-full w-[64rem] h-[50vh] flex flex-col items-left content-center p-2">
      <p className="text-sm m-1">
        * Don&apos;t worry about your data, calculation is happening on your
        browser.
      </p>
      <textarea
        className="textarea textarea-bordered textarea-md rounded-md flex-1 w-full bg-base-100 shadow"
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      {tokenizer.current ? (
        <p className="h-10 text-base font-bold m-1">Tokens: {tokens}</p>
      ) : (
        <span className="h-10 loading loading-dots loading-md m-1"></span>
      )}
    </div>
  );
}
