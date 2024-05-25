import { Group } from "@/app/utils/groups";
import Link from "next/link";

export default function Table(props: { group: Group }) {
  return (
    <div className="overflow-x-auto bg-base-100 rounded-xl shadow-2xl m-2">
      <table className="table table-lg table-zebra">
        <thead>
          <tr className="font-bold">
            <th></th>
            <td>Model Name</td>
            <td>Context Window</td>
          </tr>
        </thead>
        <tbody>
          {props.group.models.map((model, index) => (
            <tr key={index} className="hover">
              <th>{index + 1}</th>
              <td>
                <Link
                  href={`/${props.group.name.toLowerCase()}/${model.value}`}
                >
                  {model.name}
                </Link>
              </td>
              <td>{model.context}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
