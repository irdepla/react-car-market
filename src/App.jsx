import { useState } from 'react'
import './App.css'
import './index.css'
import  Router  from './router';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {

  return (
    <>
    <Router  />
    </>
  )
}

export default App;
