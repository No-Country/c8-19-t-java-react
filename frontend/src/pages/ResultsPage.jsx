import Results from "../components/Results";

const ResultsPage = () => {
  return (
    <section className="min-h-screen bg-gray pt-[100px] ">
      <div className="grid grid-cols-4 min-h-screen md:container gap-4 ">
        <div className="col-span-1 bg-white">filtro</div>
        <div className="col-span-3 ">
          <Results />
        </div>
      </div>
    </section>
  );
};
export default ResultsPage;
