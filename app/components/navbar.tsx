import Link from "next/link";

const models = [
  {
    group: "OpenAI",
    models: [
      { name: "GPT-3.5", value: "gpt-3.5" },
      { name: "GPT-3.5 Turbo", value: "gpt-3.5-turbo" },
      { name: "GPT-4", value: "gpt-4" },
      { name: "GPT-4 Turbo", value: "gpt-4-turbo" },
      { name: "Embedding V3 large", value: "text-embedding-3-large" },
      { name: "Embedding V3 small", value: "text-embedding-3-small" },
      { name: "Embedding Ada 002", value: "text-embedding-ada-002" },
    ],
  },
  {
    group: "Anthropic",
    models: [
      { name: "Claude 3 Opus", value: "claude-3-opus" },
      { name: "Claude 3 Sonnet", value: "claude-3-sonnet" },
      { name: "Claude 3 Haiku", value: "claude-3-haiku" },
      { name: "Claude 2.1", value: "claude-2.1" },
      { name: "Claude 2.0", value: "claude-2.0" },
      { name: "Claude Instant 1.2", value: "claude-instant-1.2" },
    ],
  },
  {
    group: "Llama",
    models: [
      { name: "Llama 3", value: "llama-3" },
      { name: "Llama 2", value: "llama-2" },
      { name: "Code Llama", value: "code-llama" },
    ],
  },
];

export default function Navbar() {
  return (
    <header className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {models.map((d) => {
              return (
                <li key={d.group}>
                  <details>
                    <summary className="font-semibold">{d.group}</summary>
                    <ul className="p-2">
                      {d.models.map((model) => {
                        return (
                          <li key={model.value}>
                            <Link
                              href={`/${d.group.toLowerCase()}/${model.value}`}
                              className="px-2"
                            >
                              {model.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </details>
                </li>
              );
            })}
          </ul>
        </div>
        <Link href={"/"} className="text-xl font-bold px-2">
          Token Counter
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {models.map((d) => {
            return (
              <li key={d.group} className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost">
                  {d.group}
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  {d.models.map((model) => {
                    return (
                      <li key={model.value}>
                        <Link
                          href={`/${d.group.toLowerCase()}/${model.value}`}
                          className="px-2"
                        >
                          {model.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          href={"https://github.com/ppaanngggg/token-counter"}
          rel="noopener ugc nofollow"
          target="_blank"
          className="px-2"
        >
          <svg
            aria-hidden="true"
            height="24"
            viewBox="0 0 16 16"
            version="1.1"
            width="24"
            data-view-component="true"
            className="octicon octicon-mark-github"
          >
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
          </svg>
        </Link>
      </div>
    </header>
  );
}
