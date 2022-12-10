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
    props.showAlert("Converted to UpperCase","success")
  }

  const handleLowercase = ()=> {
    let lowerText=text.toLowerCase();
    setText(lowerText);
    props.showAlert("Converted to LowerCase","success")
  }

  const handleclearText = ()=> {
    setText("");
    props.showAlert("Text Cleared","success")
  }

  const handleCopy = ()=> {
    console.log('I am copy')
    let texts=document.getElementById('Workarea')
    texts.select();
    navigator.clipboard.writeText(texts.value);
    props.showAlert("Copied to Clipboard","success")

  }

  const handleExtraspaces = ()=> {
    let reasult =text.replace(/\s+/g,' ').trim();
    setText(reasult);
    props.showAlert("Extra spaces are deleted","success")

  }

  const handle1stCharacter =()=> {
    let arr=text.split(" ");
    for(let i=0;i<arr.length;i++ ) {
      arr[i]=arr[i].charAt(0).toLocaleUpperCase() +arr[i].slice(1);
    }
    let newText=arr.join(" ");
    setText(newText);
    props.showAlert("Capitalised first character","success")

  }

  

  const handleonchange = (event)=> {
    console.log("onChange")
    setText(event.target.value);
  }

  return (
    <>
    <div className={`containar text-${props.mode==='light'? 'dark' : 'light'}`} >
        <h1>{props.heading}</h1>
    <div className="mb-3 my-3">
    <textarea className={`form-control text-${props.mode==='light'? 'dark' : 'light'} bg-${props.mode==='light'?'light':'secondary'} `} value={text} onChange={handleonchange} id="Workarea" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpcase}>CONVERT TO UPPERCASE</button>
    <button className="btn btn-primary mx-2" onClick={handleLowercase}>convert to lower case</button>
    <button className="btn btn-primary mx-2" onClick={handleclearText}>Clear text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraspaces}>Remove extra spaces</button>
    <button className="btn btn-primary mx-2" onClick={handle1stCharacter}>Make  Every word 1st Character uppercase</button>
    </div>
    <div className={`container my-4 text-${props.mode==='light'? 'dark' : 'light'}`}>
      <h1>Your Test Summery</h1>
      <p><h3>You have written <b>{text.split(" ").length-1}</b> words and <b>{text.length} </b> characters</h3></p>
      <br />
      <p><h3>Average time to read a word is <b>{0.008 * (text.split(" ").length-1) }</b> minutes</h3></p>
      <br />
      <p><h3>No. of Sentances <b>{text.split('.').length -1}</b></h3></p>
    </div>

    <div className={`container my-4 text-${props.mode==='light'? 'dark' : 'light'}`}>
      <h2>Preview</h2>
      <p><h5>{text.length>0?text:"Enter something in the textbox to preview it here"}</h5></p>
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


