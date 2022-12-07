import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
  const [text,setText] = useState('');
  
  // text= "new text" //incorrect way to update state variable
  // setText("new state") //correct way to update state variable

  const handleUpcase = ()=> {
    console.log("Uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
  }

  const handleLowercase = ()=> {
    let lowerText=text.toLowerCase();
    setText(lowerText);
  }

  const handleclearText = ()=> {
    setText("");
  }

  const handleonchange = (event)=> {
    console.log("onChange")
    setText(event.target.value);
  }

  return (
    <>
    <div className='containar'>
        <h1>{props.heading}</h1>
    <div className="mb-3 my-3">
    <textarea className="form-control" value={text} onChange={handleonchange} id="Workarea" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpcase}>CONVERT TO UPPERCASE</button>
    <button className="btn btn-primary mx-2" onClick={handleLowercase}>convert to lower case</button>
    <button className="btn btn-primary mx-2" onClick={handleclearText}>Clear text</button>
    </div>
    <div className="container my-4">
      <h1>Your Test Summery</h1>
      <p><h3>You have written <b>{text.split(" ").length}</b> words and <b>{text.length} </b> characters</h3></p>
      <div className="container"><h1><b>&</b></h1></div>
      <p><h3>Average time to read a word is <b>{0.008 * text.split(" ").length }</b> minutes</h3></p>
    </div>

    <div className="container">
      <h2>Preview</h2>
      <p><h5>{text}</h5></p>
    </div>
    </>
  )
}
Textform.propTypes = {
    heading : PropTypes.string
}

Textform.defaultProps = {
    heading: "Entre your text"
}


