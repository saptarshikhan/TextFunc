import React,{ useState } from 'react';
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


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
    }
    else {
      setmode('dark');
      document.body.style.backgroundColor='#343a40';
      showAlert('Dark Mode Enabled','success');
    }
  }

  return (
    <>
    <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>

    {/*<div className="container ">
      <About/>
  </div>*/}
    
    
    <div className="container my-3">
      <Textform showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>
  </div>
    </>
  );
}

export default App;
