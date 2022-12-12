import React,{useState} from 'react'

export default function About(props) {
  const [newStyle,changeStyle] = useState({
    color : 'black',
    backgroundColor : 'white'
});

  const [btnText,setBtnText]= useState('Enable Dark Mode')

  const toggleStyle = ()=> {
    if (newStyle.color==='black') {
      changeStyle({
        color : 'white',
        backgroundColor : 'black',
        border : '1px solid white'
      })
      setBtnText('Enable Light Mode')
    }
    else {
      changeStyle({
        color : 'black',
        backgroundColor : 'white',
      })
      setBtnText('Enable Dark Mode')
    }
  }

  return (
    <div className={`container text-${props.mode==='light'?'dark':'light'} bg-${props.mode==='light'?'light':'#343a40'}`}>
        <h1 classNameName='my-3' >About Us</h1>
        <div className={`accordion accordion-flush" id="accordionFlushExample" text-${props.mode==='light'?'dark':'light'} bg-${props.mode==='light'?'light':'#343a40'} `} >
  <div className="accordion-item" >
    <h2 className="accordion-header" id="flush-headingOne">
      <button className={`accordion-button collapsed text-${props.mode==='light'?'dark':'light'} bg-${props.mode==='light'?'light':'secondary'}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" className={`accordion-collapse collapse text-${props.mode==='light'?'dark':'light'} bg-${props.mode==='light'?'light':'secondary'} "`} aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"  >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className={`accordion-button collapsed text-${props.mode==='light'?'dark':'light'} bg-${props.mode==='light'?'light':'secondary'}`}type="button"  data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" className={`accordion-collapse collapse text-${props.mode==='light'?'dark':'light'} bg-${props.mode==='light'?'light':'secondary'}`} aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"  >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className={`accordion-button collapsed text-${props.mode==='light'?'dark':'light'} bg-${props.mode==='light'?'light':'secondary'}`} type="button"  data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" className={`accordion-collapse collapse text-${props.mode==='light'?'dark':'light'} bg-${props.mode==='light'?'light':'secondary'}`} aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" >Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
{/*<div className="container my-3">
<button className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
  </div>*/}


    </div>
  )
}
