import React,{ useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode,setmode] = useState('light'); //whether dark mode is enabled or not

  const [alert,setAlert]=useState(null);

  const showAlert =(message,type)=> {
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null); 
    }, 1500);

  }
  const toggleMode =()=> {
    if (mode ==='dark') {
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled","success");
      // document.title='TextFunc -Dark Mode Enabled'
      /*setInterval(() => {
        document.title='TextFunc is Amazing!!!'
      }, 2000);
      setInterval(() => {
        document.title='Install TextFunc Now'
      }, 1500);*/
    }
    else if (mode ==='light') {
      setmode('dark');
      document.body.style.backgroundColor='#343a40';
      showAlert('Dark Mode Enabled','success');
      // document.title='TextFunc - Light Mode Enabled'
    }
  }

  return (
    <>
    <Router>
    <Navbar title="TextFunc" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">

    <Switch>
          <Route path="/about">
      <About mode={mode} showAlert={showAlert}/>
          
          </Route>
          <Route path="/">
        <Textform showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>
          </Route>
    </Switch>
    

    {/*<div className="container ">
      <About mode={mode} showAlert={showAlert}/>
  </div>*/} 
    
    </div>
    </Router>

    </>
  );
}

export default App;
