import { groups } from "@/app/utils/groups";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="navbar h-16 bg-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
            {groups.map((group) => {
              return (
                <li key={group.name}>
                  <details>
                    <summary className="font-semibold">{group.name}</summary>
                    <ul className="p-2">
                      {group.models.map((model) => {
                        return (
                          <li key={model.value}>
                            <a
                              href={`/${group.name.toLowerCase()}/${model.value}`}
                            >
                              {model.name}
                            </a>
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
        <Image
          src="/favicon.ico"
          alt="token counter icon"
          width={42}
          height={42}
          className="rounded-full"
        />
        <a href={"/"} className="btn btn-ghost text-xl font-bold px-2">
          Token Counter
        </a>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul>
          {groups.map((group) => {
            return (
              <li key={group.name} className="dropdown dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost m-1 hover:underline"
                >
                  <a href={`/${group.name.toLowerCase()}`}>{group.name}</a>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {group.models.map((model) => {
                    return (
                      <li key={model.value}>
                        <a
                          href={`/${group.name.toLowerCase()}/${model.value}`}
                          className="hover:underline"
                        >
                          {model.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end pr-2 space-x-1">
        <a
          href="https://github.com/ppaanngggg/token-counter"
          rel="noopener ugc nofollow"
          target="_blank"
        >
          <Image src="/static/github.svg" alt="github" width={24} height={24} />
        </a>
        <a
          href="https://buymeacoffee.com/ppaanngggg"
          rel="noopener ugc nofollow"
          target="_blank"
        >
          <Image
            src="/static/bmc.svg"
            alt="buymeacoffee"
            width={40}
            height={40}
          />
        </a>
        <a
          href="https://ko-fi.com/ppaanngggg"
          rel="noopener ugc nofollow"
          target="_blank"
        >
          <Image src="/static/ko-fi.svg" alt="ko-fi" width={30} height={30} />
        </a>
      </div>
    </header>
  );
}
