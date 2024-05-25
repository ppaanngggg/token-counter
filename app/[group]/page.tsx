import { redirect } from "next/navigation";
import { getGroup } from "@/app/utils/groups";

export default function Page({ params }: { params: { group: string } }) {
  const group = getGroup(params.group);
  if (!group) {
    redirect("/");
  }

  return (
    <main className="flex-1 flex flex-col items-center bg-base-200"></main>
  );
}
