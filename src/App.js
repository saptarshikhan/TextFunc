import React,{ useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {
  const [mode,setmode] = useState('light'); //whether dark mode is enabled or not

  const toggleMode =()=> {
    if (mode ==='dark') {
      setmode('light');
      document.body.style.backgroundColor='white';
    }
    else {
      setmode('dark');
      document.body.style.backgroundColor='#343a40';
    }
  }

  return (
    <>
    <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode}/>

    {/*<div className="container ">
      <About/>
  </div>*/}
    
    
    <div className="container my-3">
      <Textform heading="Enter the text to analyse below" mode={mode}/>
  </div>
    </>
  );
}

export default App;
