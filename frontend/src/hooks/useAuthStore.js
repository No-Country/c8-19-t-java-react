import { useDispatch, useSelector } from 'react-redux';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store/auth/authSlice';


export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const handleLogin = ({ email, password }) => {
        dispatch( onChecking() );
        try {
          dispatch( onLogin({ email, password }) );
            
        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas') );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }

    const handleLogout = () => {
        dispatch( onLogout() );
    }

    return {
        //* Propiedades
        errorMessage,
        status, 
        user, 

        //* Métodos
        handleLogin,
        handleLogout,
        
    }

}
