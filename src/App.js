import React from 'react'
import { Menu, Nav } from './components/' 
import {AppButton} from './components/atoms'

import './App.css';

function App() {
  return (
    <>
      <Nav title="Home" />
      <h1>Hello World</h1>
      <AppButton>Click Here</AppButton>
      <AppButton className="ui circular icon button"><i aria-hidden="true" className="settings icon"></i></AppButton>
      <Menu />
    </>
  );
}

export default App;
