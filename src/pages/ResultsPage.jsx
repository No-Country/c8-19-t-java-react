import { useState } from "react";
import Filters from "../components/Filters";
import Results from "../components/Results";

const ResultsPage = () => {
  const [active, setActive] = useState(false);
  
  const handleToggleFilters =()=>{
    setActive(!active)
  }
  return (
    <section className="min-h-screen bg-gray pt-[100px] mb-6 ">
      <div className="grid grid-cols-4 min-h-screen md:container gap-4 ">
        <div className="hidden md:block md:col-span-1 bg-white h-fit">
          <Filters />
        </div>
        <div className={`${active ? 'block' : 'hidden'} absolute md:hidden w-10/12 bg-white h-fit z-10 transition ease-in-out delay-300`}>
          <Filters onToggleFilters={handleToggleFilters}/>
        </div>
        <div className="col-span-4 md:col-span-3 ">
          <Results onToggleFilters={handleToggleFilters} viewFilters={active} />
        </div>
      </div>
    </section>
  );
};
export default ResultsPage;
