import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";

import { BsArrowRightCircle } from "react-icons/bs";
import basicSchema from "../schemas/basicSchema";
import { useSignUpMutation } from "../redux/api/sunnyApi";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import { useEffect } from "react";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [signUp, { data, error, isLoading }] = useSignUpMutation();

  useEffect(() => {
    console.log(error);
    if (data?.user) {
      navigate("/login");
    }

    if (error?.status === 401) {
      toast.error(error?.data?.msg);
    }
  }, [data, error]);

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      await signUp(values);
    },
    validationSchema: basicSchema,
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-hero bg-cover ">
      <div className="flex flex-col w-[400px] sm:w-[500px] bg-white/80 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-4 rounded-3xl w-50 max-w-md">
        <h2 className="font-medium text-center text-xl sm:text-3xl text-slate">
          Create Account
        </h2>
        <form onSubmit={handleSubmit} className="mt-10" noValidate>
          <div className="flex flex-col mb-5 min-h-[80px] ">
            <label
              htmlFor="name"
              className="mb-1 text-xs tracking-wide text-slate"
            >
              Username
            </label>
            <input
              type="name"
              className={`text-sm  placeholder-gray pl-3 pr-4 rounded-md border border-slate/40 w-full py-2 focus:outline-none focus:border-blue ${
                errors.name ? "border-red" : ""
              }`}
              {...getFieldProps("name")}
            />
            {touched.name && errors.name && (
              <span className="text-red">{errors.name}</span>
            )}
          </div>
          <div className="flex flex-col mb-5 min-h-[80px] ">
            <label
              htmlFor="email"
              className="mb-1 text-xs tracking-wide text-slate"
            >
              E-Mail
            </label>
            <input
              type="email"
              className={`text-sm  placeholder-gray pl-3 pr-4 rounded-md border border-slate/40 w-full py-2 focus:outline-none focus:border-blue ${
                errors.email ? "border-red" : ""
              }`}
              {...getFieldProps("email")}
            />
            {touched.email && errors.email && (
              <span className="text-red">{errors.email}</span>
            )}
          </div>

          <div className="flex flex-col mb-5 min-h-[80px]">
            <label
              htmlFor="password"
              className="mb-1 text-xs tracking-wide text-slate"
            >
              Password
            </label>
            <input
              type="password"
              className={`text-sm  placeholder-gray pl-3 pr-4 rounded-md border border-slate/40 w-full py-2 focus:outline-none focus:border-blue ${
                errors.userName ? "border-red" : ""
              }`}
              {...getFieldProps("password")}
            />
            {touched.password && errors.password && (
              <span className="text-red">{errors.password}</span>
            )}
          </div>

          <div className="flex flex-col mb-5 min-h-[80px]">
            <label
              htmlFor="confirmPassword"
              className="mb-1 text-xs tracking-wide text-slate"
            >
              Confirm Password
            </label>
            <input
              type="password"
              className={`text-sm  placeholder-gray pl-3 pr-4 rounded-md border border-slate/40 w-full py-2 focus:outline-none focus:border-blue ${
                errors.userName ? "border-red" : ""
              }`}
              {...getFieldProps("confirmPassword")}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <span className="text-red">{errors.confirmPassword}</span>
            )}
          </div>

          <div className="flex w-full">
            <button
              type="submit"
              className="flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue  hover:bg-blue/90 rounded-2xl py-2 w-[200px] mx-auto transition duration-150 ease-in"
            >
              <span className="mr-2 uppercase py-1">
                {isLoading ? (
                  <CircularProgress
                    size="1.4rem"
                    sx={{ color: "rgba(255,255,255,.4)" }}
                  />
                ) : (
                  <div className="flex items-center gap-2 ">
                    Register
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
          to="/login"
        >
          <span className="ml-2">Ya tengo una cuenta.</span>
          <span className="text-xs ml-2 text-blue font-semibold">
            Quiero Ingresar
          </span>
        </Link>
      </div>
      </div>
      
    </div>
  );
};

export default RegisterForm;
