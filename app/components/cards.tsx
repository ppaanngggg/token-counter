import { groups } from "@/app/utils/groups";

export default function Cards() {
  return (
    <div className="w-[80rem] max-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto p-2 my-4">
      {groups.map((d) => {
        return (
          <div key={d.name}>
            <div className="card bg-base-100 w-full shadow-sm">
              <div className="card-body">
                <a href={`/${d.name.toLowerCase()}`}>
                  <h2 className="card-title btn btn-ghost hover:underline">
                    {d.name}
                  </h2>
                </a>
                <div className="divider"></div>
                <div className="card-actions">
                  {d.models.map((model) => {
                    return (
                      <a
                        href={`/${d.name.toLowerCase()}/${model.value}`}
                        key={model.value}
                      >
                        <div className="btn btn-outline btn-sm">
                          {model.name}
                        </div>
                      </a>
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
