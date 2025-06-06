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
    <div className="rounded-2xl max-w-[64rem] bg-blue-50 shadow-xl flex flex-col items-left p-4 m-2">
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
      {props.group === "deepseek" && (
        <>
          <h3 className={qClass}>• What is DeepSeek?</h3>
          <p className={aClass}>
            DeepSeek is a Chinese AI company founded in July 2023 by Liang
            Wenfeng. It develops large language models and launched its
            DeepSeek-R1 chatbot in January 2025. The company boasts low training
            costs—reportedly $6 million for its V3 model versus about $100
            million for GPT-4—due partly to limited access to Nvidia chipsets, a
            factor that has disrupted the market. DeepSeek uses an open weight
            approach, which offers less modification freedom than true
            open-source software.
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
      {props.model === "o4-mini" && (
        <>
          <h3 className={qClass}>• o4-mini Introduction</h3>
          <p className={aClass}>
            o4-mini is OpenAI latest small o-series model. It is optimized for
            fast, effective reasoning with exceptionally efficient performance
            in coding and visual tasks.
          </p>
        </>
      )}
      {props.model === "o3" && (
        <>
          <h3 className={qClass}>• o3 Introduction</h3>
          <p className={aClass}>
            o3 is a well-rounded and powerful model across domains. It sets a
            new standard for math, science, coding, and visual reasoning tasks.
            It also excels at technical writing and instruction-following. Use
            it to think through multi-step problems that involve analysis across
            text, code, and images.
          </p>
        </>
      )}
      {props.model === "o3-mini" && (
        <>
          <h3 className={qClass}>• o3-mini Introduction</h3>
          <p className={aClass}>
            o3-mini is OpenAI newest small reasoning model, providing high
            intelligence at the same cost and latency targets of o1-mini.
            o3-mini supports key developer features, like Structured Outputs,
            function calling, and Batch API.
          </p>
        </>
      )}
      {props.model === "o1" && (
        <>
          <h3 className={qClass}>• o1 Introduction</h3>
          <p className={aClass}>
            The o1 series of models are trained with reinforcement learning to
            perform complex reasoning. o1 models think before they answer,
            producing a long internal chain of thought before responding to the
            user.
          </p>
        </>
      )}
      {props.model === "o1-pro" && (
        <>
          <h3 className={qClass}>• o1-pro Introduction</h3>
          <p className={aClass}>
            The o1 series of models are trained with reinforcement learning to
            think before they answer and perform complex reasoning. The o1-pro
            model uses more compute to think harder and provide consistently
            better answers.
          </p>
        </>
      )}
      {props.model === "gpt-4.1" && (
        <>
          <h3 className={qClass}>• GPT-4.1 Introduction</h3>
          <p className={aClass}>
            GPT-4.1 is OpenAI flagship model for complex tasks. It is well
            suited for problem solving across domains.
          </p>
        </>
      )}
      {props.model === "claude-opus-4" && (
        <>
          <h3 className={qClass}>• Claude Opus 4 Introduction</h3>
          <p className={aClass}>
            Claude Opus 4 is Anthropic most capable and intelligent model yet.
            Claude Opus 4 sets new standards in complex reasoning and advanced
            coding
          </p>
        </>
      )}
      {props.model === "claude-sonnet-4" && (
        <>
          <h3 className={qClass}>• Claude Sonnet 4 Introduction</h3>
          <p className={aClass}>
            Claude Sonnet 4 is Anthropic high-performance model with exceptional
            reasoning and efficiency.
          </p>
        </>
      )}
      {props.model === "claude-3.7-sonnet" && (
        <>
          <h3 className={qClass}>• Claude 3.7 Sonnet Introduction</h3>
          <p className={aClass}>
            Claude 3.7 Sonnet exemplifies versatility through its dual-mode
            functionality. This innovative model combines traditional language
            processing with enhanced reasoning capabilities, allowing users to
            seamlessly switch between standard and advanced thinking modes. In
            standard mode, it functions as an improved iteration of Claude 3.5
            Sonnet, while the extended thinking mode enables deeper analytical
            processing through self-reflection. This advanced mode significantly
            enhances performance across various domains, including mathematics,
            physics, coding, and complex instruction execution. Notably, the
            model maintains consistent prompt responsiveness across both
            operational modes.
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
      {props.model === "mistral-small" && (
        <>
          <h3 className={qClass}>• Mistral Small Introduction</h3>
          <p className={aClass}>
            Mistral Small adds state-of-the-art vision understanding and
            enhances long context capabilities up to 128k tokens without
            compromising text performance. With 24 billion parameters, this
            model achieves top-tier capabilities in both text and vision tasks.
          </p>
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
      {props.model === "devstral-small" && (
        <>
          <h3 className={qClass}>• Devstral Small Introduction</h3>
          <p className={aClass}>
            Devstral is an agentic LLM for software engineering tasks built
            under a collaboration between Mistral AI and All Hands AI 🙌.
            Devstral excels at using tools to explore codebases, editing
            multiple files and power software engineering agents. The model
            achieves remarkable performance on SWE-bench which positionates it
            as the #1 open source model on this benchmark.
          </p>
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
      {props.model === "llama-4" && (
        <>
          <h3 className={qClass}>• Llama 4 Introduction</h3>
          <p className={aClass}>
            Meta Llama 4 is a state-of-the-art multimodal AI model capable of
            processing and integrating various data types, including text,
            images, video, and audio. It features an unprecedented context
            window of up to 10 million tokens, enabling it to handle extensive
            and complex inputs. Utilizing a mixture-of-experts (MoE)
            architecture, Llama 4 efficiently activates specialized components
            for specific tasks, enhancing performance while optimizing
            computational resources.
          </p>
        </>
      )}
      {props.model === "llama-3.3" && (
        <>
          <h3 className={qClass}>• Llama 3.3 Introduction</h3>
          <p className={aClass}>
            Llama 3.3 represents a sophisticated text-only 70B parameter model,
            meticulously instruction-tuned to deliver superior performance
            compared to its predecessor, Llama 3.1 70B, and even surpasses Llama
            3.2 90B in text-specific applications. Notably, in certain use
            cases, Llama 3.3 70B demonstrates capabilities that rival those of
            the much larger Llama 3.1 405B model.
          </p>
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
      {props.model === "deepseek-r1" && (
        <>
          <h3 className={qClass}>• DeepSeek R1 Introduction</h3>
          <p className={aClass}>
            DeepSeek introduced its first-generation reasoning models,
            DeepSeek-R1-Zero and DeepSeek-R1. DeepSeek-R1-Zero was trained using
            large-scale reinforcement learning without an initial supervised
            fine-tuning phase, and it demonstrated remarkable reasoning
            performance. Through reinforcement learning, the model naturally
            exhibited a range of powerful and intriguing reasoning behaviors.
          </p>
        </>
      )}
      {props.model === "deepseek-v3" && (
        <>
          <h3 className={qClass}>• DeepSeek V3 Introduction</h3>
          <p className={aClass}>
            DeepSeek presented DeepSeek-V3, a Mixture-of-Experts language model
            with 671B parameters (37B activated per token). Using MLA and
            DeepSeekMoE architectures, along with an auxiliary-loss-free load
            balancing strategy and multi-token prediction, the model was
            pre-trained on 14.8 trillion tokens, then refined through Supervised
            Fine-Tuning and Reinforcement Learning. Evaluations indicate that
            DeepSeek-V3 outperforms other open-source models and rivals leading
            closed-source models—all while requiring only 2.788M H800 GPU hours
            and maintaining a stable training process.
          </p>
        </>
      )}
      {props.model === "deepseek-v2" && (
        <>
          <h3 className={qClass}>• DeepSeek V2 Introduction</h3>
          <p className={aClass}>
            DeepSeek-V2 is presented as a robust Mixture-of-Experts (MoE)
            language model known for its economical training and efficient
            inference. The model contains a total of 236B parameters, with 21B
            activated per token. In comparison to its predecessor, DeepSeek 67B,
            DeepSeek-V2 demonstrates enhanced performance while reducing
            training costs by 42.5%, cutting the KV cache by 93.3%, and
            increasing the maximum generation throughput by a factor of 5.76.
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
