import React, { useEffect, useState } from 'react';
import classes from './App.module.scss'
import AppRouter from './components/AppRouter';
import { useCheckAuthQuery } from './services/RTK/UserService';
const App = () => {
  const { data, isLoading } = useCheckAuthQuery('')
  useEffect(() => {
    if (!isLoading && data?.token) {
      localStorage.setItem('token', data.token)
    }
  }, [isLoading])
  return (
    <div className={classes.app}>
      {isLoading
        ? 'asdasdas'
        : <AppRouter />
      }

    </div>
  );
};

export default App;
