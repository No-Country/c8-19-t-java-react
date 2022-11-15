import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';

const LoginForm = () => {
    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('El correo no tiene un formato válido')
                .required('Requerido'),
            password: Yup.string()
                .min(8, 'Debe de tener mínimo 8 caracteres')
                .required('Requerido')
        }),
    });

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
            <div className='flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md'>
                <div className='font-medium text-center text-xl sm:text-3xl text-gray-800'>
                    Ingresar a mi cuenta
                </div>
                <form onSubmit={handleSubmit} className='mt-10' noValidate>
                    <div className='flex flex-col mb-5'>
                        <label
                            htmlFor='email'
                            className='mb-1 text-xs tracking-wide text-gray-600'
                        >
                            E-Mail
                        </label>
                        <input
                            type='email'
                            className='text-sm  placeholder-gray-500 pl-3 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400'
                            {...getFieldProps('email')}
                        />
                        {touched.email && errors.email && (
                            <span className='text-red-500'>{errors.email}</span>
                        )}
                    </div>
                    
                    <div className='flex flex-col mb-5'>
                        <label
                            htmlFor='password'
                            className='mb-1 text-xs tracking-wide text-gray-600'
                        >
                            Contraseña
                        </label>
                        <input
                            type='password'
                            className='text-sm  placeholder-gray-500 pl-3 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400'
                            {...getFieldProps('password')}
                        />
                        {touched.password && errors.password && (
                            <span className='text-red-500'>{errors.password}</span>
                        )}
                    </div>

                    <div className='flex w-full'>
                        <button
                            type='submit'
                            className='flex mt-2 items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-500  hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in'
                        >
                            <span className='mr-2 uppercase'>Ingresar</span>
                            <span className='text-lg'>
                                <BsArrowRightCircle />
                            </span>
                        </button>
                    </div>
                </form>
            </div>
            <div className='flex justify-center items-center mt-6'>
                <Link
                    className='inline-flex items-center text-gray-700 font-medium text-xs text-center'
                    to='#'
                >
                    <span className='ml-2'>No tengo cuenta.</span>
                    <span className='text-xs ml-2 text-blue-500 font-semibold'>
                        Quiero Registrarme
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default LoginForm;
