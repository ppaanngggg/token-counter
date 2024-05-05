import TokenCounter from "@/app/components/tokencounter";
import { Suspense } from "react";
import { getModel } from "@/app/utils/models";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { buildMetadata } from "@/app/utils/metadata";

export function generateMetadata({
  params,
}: {
  params: { group: string; model: string };
}): Metadata {
  const title = "Token Counter for " + params.group + " " + params.model;
  return buildMetadata(title, title);
}

export default function Page({
  params,
}: {
  params: { group: string; model: string };
}) {
  const model = getModel(params.group, params.model);
  if (!model) {
    redirect("/");
  }

  return (
    <main className="flex-1 flex flex-col items-center bg-base-200">
      <h1 className="text-lg font-semibold bg-secondary text-secondary-content rounded-2xl mt-2 py-2 px-4">
        Count Token for {model.name}
      </h1>
      <Suspense>
        <TokenCounter model={model} />
      </Suspense>
    </main>
  );
}
