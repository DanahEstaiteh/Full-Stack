import  Form  from './Components/Form/Form';
import React, {  } from 'react';
import './App.css';
import Main from './Components/Main/Main';
import {BrowserRouter , Switch , Route} from 'react-router-dom';


function App() {
 

  return (
    <div className="App">
       
       <BrowserRouter>
       <Main />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
