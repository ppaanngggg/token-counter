import { redirect } from "next/navigation";
import { getGroup } from "@/app/utils/groups";
import FAQ from "@/app/components/faq";
import Table from "@/app/components/table";
import { Metadata } from "next";
import { buildMetadata } from "@/app/utils/metadata";

export function generateMetadata({
  params,
}: {
  params: { group: string };
}): Metadata {
  return buildMetadata(params.group, undefined);
}

export default function Page({ params }: { params: { group: string } }) {
  const group = getGroup(params.group);
  if (!group) {
    redirect("/");
  }

  return (
    <>
      <div className="card card-compact md:card-normal shadow-xl bg-secondary text-secondary-content m-4">
        <div className="card-body items-center text-center">
          <h1 className="card-title">{group.name} Model List</h1>
          <h2>Full list of supported models and their context windows.</h2>
        </div>
      </div>
      <Table group={group} />
      <FAQ group={params.group} model={undefined} />
    </>
  );
}
