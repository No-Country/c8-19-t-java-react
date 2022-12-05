import { Link } from "react-router-dom";

const LoginModal = () => {
  return (
    <div className="absolute top-0 right-[-260px] w-64 bg-slate px-2 py-4 rounded-md">
      <h4 className="text-white">
        Debes estar autenticado para poder comentar
      </h4>
      <Link
        to="/login"
        className="text-blue flex justify-end capitalize text-md "
      >
        iniciar sesion
      </Link>
    </div>
  );
};
export default LoginModal;
