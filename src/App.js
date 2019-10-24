import React, { Fragment } from 'react';
import './App.css';
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import TemporaryDrawer from './components/TemporaryDrawer'

function App() {
  return (
    <>
      <PrimarySearchAppBar />
      <TemporaryDrawer />
    </>
  );
}

export default App;
