import Cards from "@/app/components/cards";
import FAQ from "@/app/components/faq";
import MoreTools from "@/app/components/more-tools";

export default function Home() {
  return (
    <>
      <div className="my-6 card card-compact shadow-xl bg-secondary text-secondary-content">
        <div className="mx-12 card-body items-center text-center">
          <h1 className="card-title">LLM Token Counter</h1>
          <h2>Supported models gallery.</h2>
        </div>
      </div>
      <Cards />
      <FAQ group={undefined} model={undefined} />
      <MoreTools />
      <div className="h-12"></div>
    </>
  );
}
