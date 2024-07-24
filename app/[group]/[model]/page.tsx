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
    <>
      <div className="card card-compact shadow-xl bg-secondary text-secondary-content m-4">
        <div className="card-body items-center text-center">
          <h1 className="card-title">{model.name} Token Counter</h1>
          <h2>Count the tokens of the prompt you enter below.</h2>
        </div>
      </div>
      <Suspense>
        <TokenCounter model={model} />
      </Suspense>
      <FAQ group={params.group} model={params.model} />
      <div className="h-12"></div>
    </>
  );
}
