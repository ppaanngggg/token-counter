import TokenCounter from "@/app/components/tokencounter";
import { Suspense } from "react";
import { getGroup, getModel } from "@/app/utils/groups";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { buildMetadata } from "@/app/utils/metadata";
import FAQ from "@/app/components/faq";

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
      <div className="card shadow-xl bg-secondary text-secondary-content my-6 mx-4">
        <div className="card-body py-4">
          <h2 className="card-title">
            {group.name} {model.name}
          </h2>
          <p>Count the tokens of the prompt you enter below.</p>
        </div>
      </div>
      <Suspense>
        <TokenCounter model={model} />
      </Suspense>
      <FAQ group={params.group} model={params.model} />
      <div className="h-12"></div>
    </main>
  );
}
