import Cards from "@/app/components/cards";
import FAQ from "@/app/components/faq";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col items-center bg-base-200">
      <h1 className="text-2xl font-semibold m-8">
        All in one LLM Token Counter
      </h1>
      <Cards />
      <FAQ />
      <div className="h-12"></div>
    </main>
  );
}
