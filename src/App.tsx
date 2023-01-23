import React, { useEffect } from 'react';
import classes from './App.module.scss'
import Header from './components/Header/Header';
import AppRouter from './routes/AppRouter';
import { useCheckAuthMutation } from './services/RTK/UserService';
const App = () => {
  const [checkAuth,] = useCheckAuthMutation()

  const checkAuthHandler = async (): Promise<void> => {
    try {
      if (localStorage.getItem('token')) {
        const data = await checkAuth('').unwrap()
        if (data.token) {
          localStorage.setItem('token', data.token)
        }
      }
    } catch (error) { }
  }
  useEffect(() => {

    checkAuthHandler()
  })
  return (
    <div className={classes.app}>
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;
