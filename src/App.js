import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
    <Navbar title="Textutils" aboutText="About"/>

    {/*<div className="container ">
      <About/>
  </div>*/}
    
    
    <div className="container my-3">
      <Textform heading="Enter the text to analyse below"/>
  </div>
    </>
  );
}

export default App;
