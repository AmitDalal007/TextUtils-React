import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=> {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLoClick = ()=> {
        // console.log("lowercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleClearClick = ()=> {
        let newText = "";
        setText(newText);
        props.showAlert("Text removes from your field", "warning");
    }
    const handleCopy = ()=> {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to your clipboard", "success");
    }
    const handleExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed successfully", "success");
    }

    const handleOnChange= (event)=> {
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // const [text, setText] = useState('Enter text here');
    // text = "new text"; // Wrong way to change state
    // setText("new text"); // Correct way to change state
    return (
        <>
        <div className="container" style={{color: props.mode === 'light'?'#042743':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'light'?'#042743':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="5"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
            <button className="btn btn-secondary mx-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'light'?'#042743':'white'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in above textbox to preview it here."}</p>
        </div>
        </>
    )
}
