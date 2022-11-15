import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col gap-5 p-5">
      <Link
        className=" bg-slate-600 rounded cursor-pointer py-1 px-4 w-fit text-white"
        to="/"
      >
        Go back
      </Link>
      Login
    </div>
  );
};
export default Login;
