import TokenCounter from "@/app/components/tokencounter";
import { Suspense } from "react";
import { getGroup, getModel } from "@/app/utils/groups";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { buildMetadata } from "@/app/utils/metadata";

export function generateMetadata({
  params,
}: {
  params: { group: string; model: string };
}): Metadata {
  return buildMetadata(params.group, params.model);
}

export default function Page({
  params,
}: {
  params: { group: string; model: string };
}) {
  const group = getGroup(params.group);
  if (!group) {
    redirect("/");
  }
  const model = getModel(group, params.model);
  if (!model) {
    redirect("/");
  }

  return (
    <main className="flex-1 flex flex-col items-center bg-base-200">
      <h1 className="text-lg font-semibold bg-secondary text-secondary-content rounded-2xl mt-2 py-2 px-4">
        Count Token for {group.name} {model.name}
      </h1>
      <Suspense>
        <TokenCounter model={model} />
      </Suspense>
    </main>
  );
}
