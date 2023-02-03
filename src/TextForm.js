import React, {useState} from 'react'

const TextForm = (props) => {

    const handleUpClick = ()=> {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }
    const handleOnChange = (event)=> {
        // console.log("On Change");
        setText(event.target.value);
    }
    
    const handleLoClick = () =>{
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to Lowercase!", "success")
    }

    const handleClearClick = () =>{
      let newText = '';
      setText(newText)
      props.showAlert("Cleared!", "success")

    }
    const handleTitleCaseClick = (string) =>{
      let newText = text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
      setText(newText)
      props.showAlert("Converted to Titlecase!", "success")

    }
    const handleCopyClick = () =>{
      let text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copy to clipboard!", "success")
    }
    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(' '))
      props.showAlert("Remove Extraspaces!", "success")

    }
    
  

    const [text, setText] = useState('');
  return (
     <> 
     <div className="container" style={{color: props.mode==='dark'?'white':'#290036'}}>
     <h1>{props.heading}</h1>
<div className="mb-3">
  <label htmlFor="myBox" className="form-label"></label>
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#290036'}} id="myBox" rows="8"></textarea>
</div>
<div className="container ">
<button className='btn btn-primary m-1' onClick={handleUpClick}>Covert to Uppercase</button>
<button className='btn btn-primary m-1' onClick={handleLoClick}>Covert to Lowercase</button>
<br />
<button className='btn btn-primary m-1' onClick={handleClearClick}>Clear Text</button>
<button className='btn btn-primary m-1' onClick={handleTitleCaseClick}>Tittle Case</button>
<button className='btn btn-primary m-1' onClick={handleCopyClick}>Copy Text</button>
<button className='btn btn-primary m-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'#290036'}}>
  <h2>Your text summary</h2>
  <p>{text.trim() === "" ? 0 : text.trim().split(" ").length} words and {text.length} characters</p>

  <p>{0.008 * text.split(" ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something to preview it here"}</p>
</div>
</div>
</>
  )
}

export default TextForm
