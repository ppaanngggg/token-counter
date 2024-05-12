import Link from "next/link";

function LinkOfXenovaTransformers() {
  return (
    <Link
      href="https://xenova.github.io/transformers.js"
      rel="noopener ugc nofollow"
      target="_blank"
      className="underline"
    >
      Transformers.js
    </Link>
  );
}

export default function FAQ() {
  const qClass = "text-l font-semibold my-1";
  const aClass = "text-s text-justify my-1";
  return (
    <div className="card max-w-[64rem] bg-accent text-accent-content shadow-xl flex flex-col items-left p-4 mx-auto">
      <h2 className="text-xl font-semibold mt-2">FAQ:</h2>
      <div className="divider"></div>
      <h3 className={qClass}>• What is LLM Token Counter?</h3>
      <p className={aClass}>
        LLM Token Counter is a sophisticated tool meticulously crafted to assist
        users in effectively managing token limits for a diverse array of
        widely-adopted Language Models (LLMs), including GPT-3.5, GPT-4,
        Claude-3, Llama-3, and many others. I am committed to continuously
        expanding the supported models and enhancing the tool&apos;s
        capabilities to empower you with an optimal experience in leveraging
        generative AI technology. Should you require any assistance or have
        suggestions for additional features, please feel free to reach out to me
        via{" "}
        <Link href="mailto:hantian.pang@gmail.com" className="underline">
          email
        </Link>
        .
      </p>
      <h3 className={qClass}>• Why use an LLM Token Counter?</h3>
      <p className={aClass}>
        Due to the inherent limitations of LLMs, it is crucial to ensure that
        the token count of your prompt falls within the specified token limit.
        Exceeding this limit may result in unexpected or undesirable outputs
        from the LLM.
      </p>
      <h3 className={qClass}>• How does the LLM Token Counter work?</h3>
      <p className={aClass}>
        LLM Token Counter works by utilizing <LinkOfXenovaTransformers />, a
        JavaScript implementation of the renowned Hugging Face Transformers
        library. Tokenizers are loaded directly in your browser, enabling the
        token count calculation to be performed client-side. Thanks to the
        efficient Rust implementation of the Transformers library, the token
        count calculation is remarkably fast.
      </p>
    </div>
  );
}
