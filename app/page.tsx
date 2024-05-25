import Cards from "@/app/components/cards";
import FAQ from "@/app/components/faq";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center bg-base-200">
      <div className="card shadow-xl bg-secondary text-secondary-content m-4">
        <div className="card-body items-center text-center">
          <h1 className="card-title">LLM Token Counter</h1>
          <h2>Supported models gallery.</h2>
        </div>
      </div>
      <Cards />
      <FAQ group={undefined} model={undefined} />
      <div className="h-12"></div>
    </main>
  );
}
