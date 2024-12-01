function LinkOfXenovaTransformers() {
  return (
    <a
      href="https://xenova.github.io/transformers.js"
      rel="noopener ugc nofollow"
      target="_blank"
      className="underline"
    >
      Transformers.js
    </a>
  );
}

export default function FAQ(props: {
  group: string | undefined;
  model: string | undefined;
}) {
  const qClass = "text-l font-semibold my-1";
  const aClass = "text-s text-justify my-1";
  return (
    <div className="rounded-2xl max-w-[64rem] bg-base-100 shadow-xl flex flex-col items-left p-4 m-2">
      <h2 className="text-xl font-semibold mt-2">FAQ:</h2>
      <div className="divider"></div>
      {props.group === "openai" && (
        <>
          <h3 className={qClass}>• What is OpenAI?</h3>
          <p className={aClass}>
            OpenAI is a research and deployment company that aims to promote and
            develop friendly artificial general intelligence (AGI) in a way that
            benefits humanity as a whole. OpenAI&apos;s goals are to advance
            digital intelligence in the way that is most likely to benefit
            humanity as a whole.
          </p>
        </>
      )}
      {props.group === "anthropic" && (
        <>
          <h3 className={qClass}>• What is Anthropic?</h3>
          <p className={aClass}>
            Anthropic is an AI safety and research company founded in 2021 by
            former OpenAI employees, focused on developing AI systems that are
            interpretable, steerable, and safe. The company aims to align AI
            technologies with human values and ensure their beneficial impact on
            society. Anthropic&apos;s work involves cutting-edge research in AI
            alignment and large-scale model training.
          </p>
        </>
      )}
      {props.group === "meta" && (
        <>
          <h3 className={qClass}>• What is Meta Llama?</h3>
          <p className={aClass}>
            Meta LLaMA (Large Language Model Meta AI) is a state-of-the-art
            language model developed by Meta, designed to understand and
            generate human-like text. It is part of Meta&apos;s broader efforts
            to advance AI capabilities and integrate them into various
            applications. LLaMA aims to enhance user interactions by providing
            more accurate and contextually relevant responses.
          </p>
        </>
      )}
      {props.group === "mistral" && (
        <>
          <h3 className={qClass}>• What is Mistral AI?</h3>
          <p className={aClass}>
            Mistral AI is a small, creative team with high scientific standards.
            Mistral AI make open, efficient, helpful and trustworthy AI models
            through ground-breaking innovations. Their mission is to make
            frontier AI ubiquitous, and to provide tailor-made AI to all the
            builders. This requires fierce independence, strong commitment to
            open, portable and customisable solutions, and an extreme focus on
            shipping the most advanced technology in limited time.
          </p>
        </>
      )}
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
            <a href="mailto:hantian.pang@gmail.com" className="underline">
              email
            </a>
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
      {props.model === "gpt-4-turbo" && (
        <>
          <h3 className={qClass}>• GPT-4 vs GPT-4 Turbo</h3>
          <p className={aClass}>
            1. GPT-4 Turbo offers significantly faster processing speeds and
            enhanced performance compared to GPT-4, making it better suited for
            applications requiring real-time interaction and high-throughput
            processing.
            <br />
            2. GPT-4 Turbo achieves higher levels of accuracy and precision in
            text generation and comprehension, thanks to its optimized
            algorithms and advanced learning techniques.
            <br />
            3. GPT-4 Turbo exhibits greater versatility and adaptability, with
            an expanded vocabulary and adaptive learning capabilities that
            enable it to handle a broader range of tasks and contexts.
            <br />
            4. While GPT-4 is well-suited for a wide range of applications,
            GPT-4 Turbo excels in scenarios where speed, accuracy, and real-time
            interaction are paramount, such as customer service chatbots,
            virtual assistants, and automated content generation platforms.
          </p>
        </>
      )}
      {props.model === "gpt-4o" && (
        <>
          <h3 className={qClass}>• GPT-4o Introduction</h3>
          <p className={aClass}>
            GPT-4o (&quot;o&quot; for &quot;omni&quot;) represents the pinnacle
            of OpenAI&apos;s language model capabilities. As a multimodal AI
            system, it seamlessly accepts text or image inputs and generates
            highly coherent and contextually relevant text outputs. Boasting an
            intelligence on par with GPT-4 Turbo, GPT-4o distinguishes itself
            through unparalleled efficiency, generating text at twice the speed
            while incurring only half the computational cost. Moreover, GPT-4o
            excels in vision tasks and exhibits exceptional performance across
            non-English languages, surpassing its counterparts in these domains.
            This cutting-edge model is available through the OpenAI API,
            empowering paying customers to harness its remarkable capabilities
            in their applications.
            <br />
            Notably, GPT-4o boasts an impressive maximum context window of
            128,000 tokens, facilitating the seamless processing of extensive
            input data.
          </p>
        </>
      )}
      {props.model === "gpt-4o-mini" && (
        <>
          <h3 className={qClass}>• GPT-4o mini Introduction</h3>
          <p className={aClass}>
            GPT-4o mini (“o” for “omni”) is most advanced model in the small
            models category, and cheapest model yet. It is multimodal (accepting
            text or image inputs and outputting text), has higher intelligence
            than gpt-3.5-turbo but is just as fast. It is meant to be used for
            smaller tasks, including vision tasks.
          </p>
        </>
      )}
      {props.model === "claude-3.5-sonnet" && (
        <>
          <h3 className={qClass}>• Claude 3.5 Sonnet Introduction</h3>
          <p className={aClass}>
            Claude 3.5 Sonnet sets new industry benchmarks for graduate-level
            reasoning (GPQA), undergraduate-level knowledge (MMLU), and coding
            proficiency (HumanEval). It shows marked improvement in grasping
            nuance, humor, and complex instructions, and is exceptional at
            writing high-quality content with a natural, relatable tone.
            <br />
            Claude 3.5 Sonnet operates at twice the speed of Claude 3 Opus. This
            performance boost, combined with cost-effective pricing, makes
            Claude 3.5 Sonnet ideal for complex tasks such as context-sensitive
            customer support and orchestrating multi-step workflows.
            <br />
            <a
              href="https://www.anthropic.com/news/claude-3-5-sonnet"
              rel="noopener ugc nofollow"
              target="_blank"
              className="underline"
            >
              More details about Claude 3.5 Sonnet.
            </a>
          </p>
        </>
      )}
      {props.model === "claude-3.5-haiku" && (
        <>
          <h3 className={qClass}>• Claude 3.5 Haiku Introduction</h3>
          <p className={aClass}>
            Claude 3.5 Haiku is an enhanced AI model that delivers both speed
            and superior performance. The model matches Claude 3 Haiku speed
            while improving across all skill sets and surpasses Claude 3 Opus on
            many intelligence benchmarks. It particularly shines in coding
            tasks, achieving a 40.6% score on SWE-bench Verified, outperforming
            both Claude 3.5 Sonnet and GPT-4.
            <br />
            The model features low latency, enhanced instruction following, and
            more precise tool usage. These capabilities make it especially
            effective for user-facing products, specialized sub-agent tasks, and
            processing large datasets such as purchase history, pricing, and
            inventory records. Overall, Claude 3.5 Haiku represents a
            significant advancement in balancing speed with enhanced
            capabilities across various applications.
            <br />
            <a
              href="https://www.anthropic.com/news/3-5-models-and-computer-use"
              rel="noopener ugc nofollow"
              target="_blank"
              className="underline"
            >
              More details about Claude 3.5 Haiku.
            </a>
          </p>
        </>
      )}
      {props.model === "claude-3-opus" && (
        <>
          <h3 className={qClass}>• Claude 3 Opus Introduction</h3>
          <p className={aClass}>
            The Claude 3 family of models represents the cutting edge of AI
            technology, offering unparalleled performance, versatility, and ease
            of use. These models excel at open-ended conversation, collaboration
            on ideas, coding tasks, and working with text – whether searching,
            writing, editing, translating, outlining, or summarizing.{" "}
            <b>Claude 3 Opus</b> is the most powerful model, delivering
            state-of-the-art performance on highly complex tasks and
            demonstrating fluency and human-like understanding. The context
            window of Claude 3 Opus is 200K.
          </p>
        </>
      )}
      {props.model === "claude-3-sonnet" && (
        <>
          <h3 className={qClass}>• Claude 3 Sonnet Introduction</h3>
          <p className={aClass}>
            The Claude 3 family of models represents the cutting edge of AI
            technology, offering unparalleled performance, versatility, and ease
            of use. These models excel at open-ended conversation, collaboration
            on ideas, coding tasks, and working with text – whether searching,
            writing, editing, translating, outlining, or summarizing.{" "}
            <b>Claude 3 Sonnet</b> is the most balanced model between
            intelligence and speed, a great choice for enterprise workloads and
            scaled AI deployments. The context window of Claude 3 Sonnet is
            200K.
          </p>
        </>
      )}
      {props.model === "claude-3-haiku" && (
        <>
          <h3 className={qClass}>• Claude 3 Haiku Introduction</h3>
          <p className={aClass}>
            The Claude 3 family of models represents the cutting edge of AI
            technology, offering unparalleled performance, versatility, and ease
            of use. These models excel at open-ended conversation, collaboration
            on ideas, coding tasks, and working with text – whether searching,
            writing, editing, translating, outlining, or summarizing.{" "}
            <b>Claude 3 Haiku</b> is the most fastest and most compact model,
            designed for near-instant responsiveness and seamless AI experiences
            that mimic human interactions. The context window of Claude 3 Haiku
            is 200K.
          </p>
        </>
      )}
      {props.model === "mistral-large" && (
        <>
          <h3 className={qClass}>• Mistral Large Introduction</h3>
          <p className={aClass}>
            Top-tier reasoning for high-complexity tasks, for your most
            sophisticated needs.
          </p>
          <ul className="list-disc pl-6">
            <li>
              Multi-lingual (incl. European languages, Chinese, Japanese,
              Korean, Hindi, Arabic)
            </li>
            <li>Large context window of 128K tokens</li>
            <li>Native function calling capacities and JSON outputs</li>
            <li>High coding proficiency (80+ coding languages)</li>
          </ul>
        </>
      )}
      {props.model === "mistral-nemo" && (
        <>
          <h3 className={qClass}>• Mistral Nemo Introduction</h3>
          <p className={aClass}>
            A state-of-the-art 12B small model built in collaboration with
            NVIDIA.
          </p>
          <ul className="list-disc pl-6">
            <li>The most powerful model in its size category</li>
            <li>Available under Apache 2.0 license</li>
            <li>
              Multi-lingual (incl. European languages, Chinese, Japanese,
              Korean, Hindi, Arabic)
            </li>
            <li>Large context window of 128K tokens</li>
          </ul>
        </>
      )}
      {props.model === "codestral" && (
        <>
          <h3 className={qClass}>• Codestral Introduction</h3>
          <p className={aClass}>
            State-of-the-art Mistral model trained specifically for code tasks.
          </p>
          <ul className="list-disc pl-6">
            <li>
              Trained on 80+ programming languages (incl. Python, Java, C, C++,
              PHP, Bash)
            </li>
            <li>
              Optimized for low latency: Way smaller than competitive coding
              models
            </li>
            <li>Context window of 32K tokens</li>
          </ul>
        </>
      )}
      {props.model === "llama-3.2" && (
        <>
          <h3 className={qClass}>• Llama 3.2 Introduction</h3>
          <p className={aClass}>
            Llama 3.2 is a collection of open, customizable AI models including
            lightweight text models (1B and 3B parameters) optimized for edge
            and mobile devices, and vision LLMs (11B and 90B parameters). The
            smaller models excel at on-device tasks like summarization and
            instruction following with 128K token context, while the larger
            models add image understanding and reasoning capabilities. Llama 3.2
            also introduces Llama Stack distributions for easier deployment
            across various environments.
          </p>
        </>
      )}
      {props.model === "llama-3.1" && (
        <>
          <h3 className={qClass}>• Llama 3.1 Introduction</h3>
          <p className={aClass}>
            Llama 3.1 is a collection of open-source large language models,
            including a flagship 405B parameter model, and upgraded 8B and 70B
            models. These models boast improved performance rivaling
            closed-source alternatives, support a 128K context window, and are
            multilingual. Key features include enhanced reasoning, tool use, and
            capabilities suitable for tasks like long-form summarization and
            coding assistance. Llama 3.1 is designed for customization and
            extensibility within a larger AI system.
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
