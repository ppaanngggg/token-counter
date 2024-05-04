import TokenCounter from "@/app/components/tokencounter";
import { Suspense } from "react";

export default function Page({
  params,
}: {
  params: { group: string; model: string };
}) {
  return (
    <div className="flex flex-col items-center justify-between">
      <Suspense>
        <TokenCounter group={params.group} model={params.model} />
      </Suspense>
    </div>
  );
}
