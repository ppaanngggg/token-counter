interface Model {
  name: string;
  value: string;
  context: number;
  hub?: string;
  sdk?: boolean;
}

interface Group {
  name: string;
  models: Model[];
}

const groups: Group[] = [
  {
    name: "OpenAI",
    models: [
      {
        name: "GPT-5",
        value: "gpt-5",
        context: 400000,
      },
      {
        name: "o4-mini",
        value: "o4-mini",
        context: 200000,
      },
      {
        name: "o3",
        value: "o3",
        context: 200000,
      },
      {
        name: "o3-mini",
        value: "o3-mini",
        context: 200000,
      },
      {
        name: "o1",
        value: "o1",
        context: 200000,
      },
      {
        name: "o1-pro",
        value: "o1-pro",
        context: 200000,
      },
      {
        name: "GPT-4.1",
        value: "gpt-4.1",
        context: 1047576,
      },
      {
        name: "GPT-4o",
        value: "gpt-4o",
        context: 128000,
      },
      {
        name: "GPT-4o mini",
        value: "gpt-4o-mini",
        context: 128000,
      },
      {
        name: "GPT-4 Turbo",
        value: "gpt-4-turbo",
        context: 128000,
      },
      { name: "GPT-4", value: "gpt-4", context: 8192 },
      {
        name: "GPT-3.5 Turbo",
        value: "gpt-3.5-turbo",
        context: 16385,
      },
      {
        name: "Embedding V3 large",
        value: "text-embedding-3-large",
        context: 8191,
      },
      {
        name: "Embedding V3 small",
        value: "text-embedding-3-small",
        context: 8191,
      },
      {
        name: "Embedding Ada 002",
        value: "text-embedding-ada-002",
        context: 8191,
      },
    ],
  },
  {
    name: "Anthropic",
    models: [
      {
        name: "Claude Sonnet 4.5",
        value: "claude-sonnet-4.5",
        context: 200000,
        sdk: true,
      },
      {
        name: "Claude Haiku 4.5",
        value: "claude-haiku-4.5",
        context: 200000,
        sdk: true,
      },
      {
        name: "Claude Opus 4.1",
        value: "claude-opus-4.1",
        context: 200000,
        sdk: true,
      },
      {
        name: "Claude Opus 4",
        value: "claude-opus-4",
        context: 200000,
        sdk: true,
      },
      {
        name: "Claude Sonnet 4",
        value: "claude-sonnet-4",
        context: 200000,
        sdk: true,
      },
      {
        name: "Claude 3.7 Sonnet",
        value: "claude-3.7-sonnet",
        context: 200000,
        sdk: true,
      },
      {
        name: "Claude 3.5 Sonnet",
        value: "claude-3.5-sonnet",
        context: 200000,
        sdk: true,
      },
      {
        name: "Claude 3.5 Haiku",
        value: "claude-3.5-haiku",
        context: 200000,
        sdk: true,
      },
      {
        name: "Claude 3 Opus",
        value: "claude-3-opus",
        context: 200000,
        sdk: true,
      },
      {
        name: "Claude 3 Sonnet",
        value: "claude-3-sonnet",
        context: 200000,
        sdk: true,
      },
      {
        name: "Claude 3 Haiku",
        value: "claude-3-haiku",
        context: 200000,
        sdk: true,
      },
      {
        name: "Claude 2.1",
        value: "claude-2.1",
        context: 200000,
        hub: "Xenova/claude-tokenizer",
      },
      {
        name: "Claude 2.0",
        value: "claude-2.0",
        context: 100000,
        hub: "Xenova/claude-tokenizer",
      },
      {
        name: "Claude Instant 1.2",
        value: "claude-instant-1.2",
        context: 100000,
        hub: "Xenova/claude-tokenizer",
      },
    ],
  },
  {
    name: "Meta",
    models: [
      {
        name: "Llama 4",
        value: "llama-4",
        context: 1000000,
        hub: "Xenova/llama4-tokenizer",
      },
      {
        name: "Llama 3.3",
        value: "llama-3.3",
        context: 128000,
        hub: "unsloth/Llama-3.3-70B-Instruct",
      },
      {
        name: "Llama 3.2",
        value: "llama-3.2",
        context: 128000,
        hub: "Xenova/Llama-3.2-Tokenizer",
      },
      {
        name: "Llama 3.1",
        value: "llama-3.1",
        context: 128000,
        hub: "Xenova/Meta-Llama-3.1-Tokenizer",
      },
      {
        name: "Llama 3",
        value: "llama-3",
        context: 8192,
        hub: "Xenova/llama3-tokenizer-new",
      },
      {
        name: "Llama 2",
        value: "llama-2",
        context: 4096,
        hub: "Xenova/llama2-tokenizer",
      },
      {
        name: "Code Llama",
        value: "code-llama",
        context: 16384,
        hub: "Xenova/llama-code-tokenizer",
      },
    ],
  },
  {
    name: "Deepseek",
    models: [
      {
        name: "Deepseek V3.2 Exp",
        value: "deepseek-v3.2-exp",
        context: 128000,
        hub: "deepseek-ai/DeepSeek-V3.2-Exp",
      },
      {
        name: "Deepseek V3.1",
        value: "deepseek-v3.1",
        context: 128000,
        hub: "deepseek-ai/DeepSeek-V3.1",
      },
      {
        name: "Deepseek R1",
        value: "deepseek-r1",
        context: 128000,
        hub: "deepseek-ai/DeepSeek-R1",
      },
      {
        name: "Deepseek V3",
        value: "deepseek-v3",
        context: 128000,
        hub: "deepseek-ai/DeepSeek-V3",
      },
      {
        name: "Deepseek V2",
        value: "deepseek-v2",
        context: 128000,
        hub: "deepseek-ai/DeepSeek-V2",
      },
    ],
  },
  {
    name: "Mistral",
    models: [
      {
        name: "Mistral Large",
        value: "mistral-large",
        context: 128000,
        hub: "Xenova/mistral-tokenizer-v3",
      },
      {
        name: "Mistral Small",
        value: "mistral-small",
        context: 128000,
        hub: "Xenova/mistral-tokenizer-v3",
      },
      {
        name: "Mistral Nemo",
        value: "mistral-nemo",
        context: 128000,
        hub: "Xenova/Mistral-Nemo-Instruct-Tokenizer",
      },
      {
        name: "Devstral Small",
        value: "devstral-small",
        context: 128000,
        hub: "Xenova/Mistral-Nemo-Instruct-Tokenizer",
      },
      {
        name: "Codestral",
        value: "codestral",
        context: 32000,
        hub: "Xenova/mistral-tokenizer-v3",
      },
    ],
  },
];

function getGroup(group: string): Group | undefined {
  return groups.find((m) => m.name.toLowerCase() === group);
}

function getModel(group: Group, model: string): Model | undefined {
  return group.models.find((m) => m.value === model);
}

export { getGroup, getModel, groups };
export type { Group, Model };
