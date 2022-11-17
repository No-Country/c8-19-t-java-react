import useAuth from "../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="container text-slate-900 md:text-7xl text-6xl  font-bold text-center ">
      hola mundo
    </div>
  );
};
export default Home;
