import Link from "next/link";

export default function FAQ() {
  const qClass = "text-l font-semibold my-1";
  const aClass = "text-s text-justify my-1";
  return (
    <div className="card w-full lg:w-1/2 bg-accent text-accent-content shadow-xl flex flex-col items-left m-8 p-4">
      <h2 className="text-xl font-semibold mt-2">FAQ:</h2>
      <div className="divider"></div>
      <h3 className={qClass}>• What is LLM Token Counter?</h3>
      <p className={aClass}>
        LLM Token Counter is a tool designed to count tokens for various popular
        LLMs (Language Model Models) such as GPT-3.5, GPT-4, Claude-3, Llama-3,
        and others.
      </p>
      <h3 className={qClass}>• How does the LLM Token Counter work?</h3>
      <p className={aClass}>
        LLM Token Counter works by{" "}
        <Link
          href="https://github.com/xenova/transformers.js"
          rel="noopener ugc nofollow"
          target="_blank"
          className="underline"
        >
          transformers.js
        </Link>
        , a JavaScript implementation of the Hugging Face Transformers library.
        Tokenizers are loaded in your browser and the token count is calculated
        client-side.
      </p>
      <h3 className={qClass}>• Why use an LLM Token Counter?</h3>
      <p className={aClass}>
        Using an LLM Token Counter provides valuable insights into token usage
        for different LLMs. It enables users to optimize their text inputs and
        better understand token limitations for specific language model models.
      </p>
      <h3 className={qClass}>• Is the LLM Token Counter accurate?</h3>
      <p className={aClass}>
        LLM Token Counter use{" "}
        <Link
          href="https://github.com/xenova/transformers.js"
          rel="noopener ugc nofollow"
          target="_blank"
          className="underline"
        >
          transformers.js
        </Link>{" "}
        to drive the real tokenizer in the browser. That ensures the exact same
        tokenization as the real model.
      </p>
    </div>
  );
}
