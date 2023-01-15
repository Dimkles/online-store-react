import React from 'react';
import classes from './App.module.scss'
import AppRouter from './routes/AppRouter';
const App = () => {
  return (
    <div className={classes.app}>
      <AppRouter />
      work
    </div>
  );
};

export default App;
