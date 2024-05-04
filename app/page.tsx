import { models } from "@/app/utils/models";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center bg-base-200">
      <h1 className="text-2xl font-semibold m-8">
        All in one LLM Token Counter
      </h1>
      <div className="carousel carousel-center w-fit max-w-full p-4 space-x-4 rounded-box">
        {models.map((d) => {
          return (
            <div
              className="carousel-item bg-base-100 rounded-box"
              key={d.group}
            >
              <div className="card w-64 shadow-sm">
                <div className="card-body">
                  <h2 className="card-title">{d.group}</h2>
                  <div className="divider"></div>
                  <div className="card-actions">
                    {d.models.map((model) => {
                      return (
                        <Link
                          href={`/${d.group.toLowerCase()}/${model.value}`}
                          className="btn btn-outline btn-sm"
                          key={model.value}
                        >
                          {model.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
