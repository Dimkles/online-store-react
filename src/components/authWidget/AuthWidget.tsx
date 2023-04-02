import { useAppSelector } from '../../hooks/redux';
import { useLogoutMutation } from '../../services/RTK/UserService';
import MyButton from '../UI/MyButton/MyButton';
import classes from './AuthWidget.module.scss'
import { Link } from 'react-router-dom';
const AuthWidget = () => {
    const { isAuth, user } = useAppSelector(state => state.user)
    const [logout] = useLogoutMutation()
    const logoutHandler = async () => {
        await logout('').unwrap()
        localStorage.removeItem('token')
    }
    return (
        isAuth
            ?
            <div className={classes.content}>
                <div>{user.name}</div>
                <MyButton onClick={logoutHandler} type='button'>Выйти</MyButton>
            </div>
            :
            <div className={classes.content}>
                <Link to='/login'>Войти</Link>
            </div>


    );
};

export default AuthWidget;
