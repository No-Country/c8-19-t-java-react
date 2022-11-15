import useAuth from "../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="text-slate-900 md:text-7xl text-6xl  font-bold text-center ">
      Home
    </div>
  );
};
export default Home;
