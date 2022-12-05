import { useFormik } from "formik";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { BsArrowRightCircle } from "react-icons/bs";
import { useSignInMutation } from "../redux/api/sunnyApi";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../redux/slices/authSlice";

const LoginForm = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signIn, { data, isLoading, error }] = useSignInMutation();

  useEffect(() => {
    if (data?.token) {
      dispatch(setCredentials(data));
      toast.success("logeado correctamente");
    }
    if (error?.status === 401) {
      toast.error(error.data.msg);
    }

    if (auth?.token) navigate(from);
  }, [data, error]);

  useEffect(() => {
    if (auth?.token) navigate(from);
  }, [auth]);

  const { handleSubmit, getFieldProps } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        await signIn(values);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    
    <div className="min-h-screen px-4 flex flex-col items-center justify-center bg-hero bg-cover">
      <div className="flex flex-col w-[400px] sm:w-[500px] bg-white/80 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-4 rounded-3xl w-50 max-w-md">
        <div className="font-medium text-center text-xl sm:text-3xl text-slate">
          Ingresar a mi cuenta
        </div>
        <form onSubmit={handleSubmit} className="mt-10" noValidate>
          <div className="flex flex-col mb-5 min-h-[80px] ">
            <label
              htmlFor="email"
              className="mb-1 text-xs tracking-wide text-slate"
            >
              E-Mail
            </label>
            <input
              type="email"
              className={`text-sm  placeholder-gray-500 pl-3 pr-4 rounded-md border border-slate/40 w-full py-2 focus:outline-none focus:border-blue-400`}
              {...getFieldProps("email")}
            />
          </div>

          <div className="flex flex-col mb-5 min-h-[80px]">
            <label
              htmlFor="password"
              className="mb-1 text-xs tracking-wide text-slate"
            >
              Contraseña
            </label>
            <input
              type="password"
              className="text-sm  placeholder-gray-500 pl-3 pr-4 rounded-md border border-slate/40 w-full py-2 focus:outline-none focus:border-blue-400"
              {...getFieldProps("password")}
            />
          </div>

          <div className="flex w-full">
            <button
              type="submit"
              className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue  hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in"
            >
              <span className="mr-2 uppercase py-1">
                {isLoading ? (
                  <CircularProgress
                    size="1.4rem"
                    sx={{ color: "rgba(255,255,255,.4)" }}
                  />
                ) : (
                  <div className="flex items-center gap-2 ">
                    Ingresar
                    <BsArrowRightCircle />
                  </div>
                )}
              </span>
            </button>
          </div>
        </form>
        <div className="flex justify-center items-center mt-6">
        <Link
          className="inline-flex items-center text-gray-700 font-medium text-xs text-center"
          to="/register"
        >
          <span className="ml-2">No tengo cuenta.</span>
          <span className="text-xs ml-2 text-blue font-semibold">
            Quiero Registrarme
          </span>
        </Link>
      </div>
      </div>
      
    </div>
  );
};

export default LoginForm;
