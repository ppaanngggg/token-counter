interface Model {
  name: string;
  value: string;
  context: number;
  hub: string;
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
        name: "GPT-4o",
        value: "gpt-4o",
        context: 128000,
        hub: "Xenova/gpt-4o",
      },
      {
        name: "GPT-4o mini",
        value: "gpt-4o-mini",
        context: 128000,
        hub: "Xenova/gpt-4o",
      },
      {
        name: "GPT-4 Turbo",
        value: "gpt-4-turbo",
        context: 128000,
        hub: "Xenova/gpt-4",
      },
      { name: "GPT-4", value: "gpt-4", context: 8192, hub: "Xenova/gpt-4" },
      {
        name: "GPT-3.5 Turbo",
        value: "gpt-3.5-turbo",
        context: 16385,
        hub: "Xenova/gpt-3.5-turbo",
      },
      {
        name: "Embedding V3 large",
        value: "text-embedding-3-large",
        context: 8191,
        hub: "Xenova/text-embedding-ada-002",
      },
      {
        name: "Embedding V3 small",
        value: "text-embedding-3-small",
        context: 8191,
        hub: "Xenova/text-embedding-ada-002",
      },
      {
        name: "Embedding Ada 002",
        value: "text-embedding-ada-002",
        context: 8191,
        hub: "Xenova/text-embedding-ada-002",
      },
    ],
  },
  {
    name: "Anthropic",
    models: [
      {
        name: "Claude 3.5 Sonnet",
        value: "claude-3.5-sonnet",
        context: 200000,
        hub: "Xenova/claude-tokenizer",
      },
      {
        name: "Claude 3 Opus",
        value: "claude-3-opus",
        context: 200000,
        hub: "Xenova/claude-tokenizer",
      },
      {
        name: "Claude 3 Sonnet",
        value: "claude-3-sonnet",
        context: 200000,
        hub: "Xenova/claude-tokenizer",
      },
      {
        name: "Claude 3 Haiku",
        value: "claude-3-haiku",
        context: 200000,
        hub: "Xenova/claude-tokenizer",
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
    name: "Mistral",
    models: [
      {
        name: "Mistral Large",
        value: "mistral-large",
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

export { groups, getGroup, getModel };
export type { Group, Model };
