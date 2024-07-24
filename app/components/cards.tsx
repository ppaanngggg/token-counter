import { groups } from "@/app/utils/groups";

export default function Cards() {
  return (
    <div className="carousel carousel-center w-fit max-w-full space-x-4 rounded-box mx-auto p-2 my-4">
      {groups.map((d) => {
        return (
          <div className="carousel-item bg-base-100 rounded-box" key={d.name}>
            <div className="card w-64 shadow-sm">
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
