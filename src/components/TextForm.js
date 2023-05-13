import React ,{useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        //console.log("UpperCase is clicked");
        let newText =text.toUpperCase();
        setText(newText)
        props.showAlert("Changed to UpperCase" , "success")
    }

    const handleLoClick = ()=>{
        //console.log("UpperCase is clicked");
        let newText =text.toLowerCase();
        setText(newText)
        props.showAlert("Changed to LowerCase" , "success")

    }

    const handleOnChange = (event)=>{
        //console.log("On Change");
        setText(event.target.value)
    }

    const handleCopy = ()=>{
        var text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text Copied Successfully" , "secondary")
        
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed Successfully" , "info")

        
    }

    // text ko 'setText' namak fn se change krna padego
    const [text ,setText] = useState('')
    // text="new text";  //* Wrong way to change the state
    //* Right way is below
    // setText("Naya Text");

  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter text here'></textarea>
        </div>
        <button className="btn btn-outline-primary" onClick={handleUpClick} >Convert to UpperCase</button>
        <button className="btn btn-outline-secondary border-radius-[0px] mx-3" onClick={handleLoClick} >Convert to LowerCase</button>
        <button className="btn btn-outline-info  mx-3" onClick={handleCopy} >Copy Text</button>
        <button className="btn btn-outline-success  mx-3" onClick={handleExtraSpaces} >Delete Extra Spaces</button>
    </div>
    {/* div 2 */}
    <div className="container my-3">
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} Words & {text.length} Characters</p>
    <p> {(text.split(" ").length)*0.008} Reading Minutes</p>
    <h2>Preview</h2>
    <p>{text}</p>

    </div>
    </>
  )
}

