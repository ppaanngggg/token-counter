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

export default function FAQ(props: {
  group: string | undefined;
  model: string | undefined;
}) {
  const qClass = "text-l font-semibold my-1";
  const aClass = "text-s text-justify my-1";
  return (
    <div className="rounded-2xl max-w-[64rem] bg-accent text-accent-content shadow-xl flex flex-col items-left p-4 m-4">
      <h2 className="text-xl font-semibold mt-2">FAQ:</h2>
      <div className="divider"></div>
      {props.model === undefined && (
        <>
          <h3 className={qClass}>• What is LLM Token Counter?</h3>
          <p className={aClass}>
            LLM Token Counter is a sophisticated tool meticulously crafted to
            assist users in effectively managing token limits for a diverse
            array of widely-adopted Language Models (LLMs), including GPT-3.5,
            GPT-4, Claude-3, Llama-3, and many others. I am committed to
            continuously expanding the supported models and enhancing the
            tool&apos;s capabilities to empower you with an optimal experience
            in leveraging generative AI technology. Should you require any
            assistance or have suggestions for additional features, please feel
            free to reach out to me via{" "}
            <Link href="mailto:hantian.pang@gmail.com" className="underline">
              email
            </Link>
            .
          </p>
          <h3 className={qClass}>• Why use an LLM Token Counter?</h3>
          <p className={aClass}>
            Due to the inherent limitations of LLMs, it is crucial to ensure
            that the token count of your prompt falls within the specified token
            limit. Exceeding this limit may result in unexpected or undesirable
            outputs from the LLM.
          </p>
          <h3 className={qClass}>• How does the LLM Token Counter work?</h3>
          <p className={aClass}>
            LLM Token Counter works by utilizing <LinkOfXenovaTransformers />, a
            JavaScript implementation of the renowned Hugging Face Transformers
            library. Tokenizers are loaded directly in your browser, enabling
            the token count calculation to be performed client-side. Thanks to
            the efficient Rust implementation of the Transformers library, the
            token count calculation is remarkably fast.
          </p>
        </>
      )}
      {props.group === "openai" && (
        <>
          <h3 className={qClass}>• What is OpenAI</h3>
          <p className={aClass}>
            OpenAI is a research and deployment company that aims to promote and
            develop friendly artificial general intelligence (AGI) in a way that
            benefits humanity as a whole. OpenAI&apos;s goals are to advance
            digital intelligence in the way that is most likely to benefit
            humanity as a whole.
          </p>
        </>
      )}
      {props.model === "gpt-3.5-turbo" && (
        <>
          <h3 className={qClass}>• GPT-3.5 Turbo Introduction</h3>
          <p className={aClass}>
            GPT-3.5 Turbo models are highly capable of comprehending and
            generating natural language or code, and have been meticulously
            optimized for seamless chat interactions through the Chat
            Completions API. However, their versatility extends beyond
            chat-based tasks, making them well-suited for a wide range of
            applications. Noting that the maximum context window for GPT-3.5
            Turbo is 16,385 tokens, ensuring efficient processing of substantial
            input data.
          </p>
        </>
      )}
      {props.model === "gpt-4" && (
        <>
          <h3 className={qClass}>• GPT-4 Introduction</h3>
          <p className={aClass}>
            GPT-4 is a cutting-edge, large multimodal model that accepts both
            text and image inputs, and generates highly accurate text outputs.
            Its advanced reasoning capabilities and expansive general knowledge
            enable it to tackle intricate problems with unparalleled precision
            compared to our previous models. Notably, GPT-4 boasts an impressive
            maximum context window of 128,000 tokens, facilitating the seamless
            processing of extensive input data.
          </p>
        </>
      )}
      <h3 className={qClass}>• Will I leak my prompt?</h3>
      <p className={aClass}>
        No, you will not leak your prompt. The token count calculation is
        performed client-side, ensuring that your prompt remains secure and
        confidential. Your data privacy is of utmost importance, and this
        approach guarantees that your sensitive information is never transmitted
        to the server or any external entity.
      </p>
    </div>
  );
}
