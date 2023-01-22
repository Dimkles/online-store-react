import React from 'react';
import classes from './App.module.scss'
import Header from './components/Header/Header';
import AppRouter from './routes/AppRouter';
const App = () => {
  return (
    <div className={classes.app}>
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;
