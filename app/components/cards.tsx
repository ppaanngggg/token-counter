import { groups } from "@/app/utils/groups";
import Link from "next/link";

export default function Cards() {
  return (
    <div className="carousel carousel-center w-fit max-w-full space-x-4 rounded-box mx-auto p-2 my-4">
      {groups.map((d) => {
        return (
          <div className="carousel-item bg-base-100 rounded-box" key={d.name}>
            <div className="card w-64 shadow-sm">
              <div className="card-body">
                <Link href={`/${d.name.toLowerCase()}`}>
                  <h2 className="card-title btn btn-ghost">{d.name}</h2>
                </Link>
                <div className="divider"></div>
                <div className="card-actions">
                  {d.models.map((model) => {
                    return (
                      <Link
                        href={`/${d.name.toLowerCase()}/${model.value}`}
                        key={model.value}
                      >
                        <div className="btn btn-outline btn-sm">
                          {model.name}
                        </div>
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
  );
}
