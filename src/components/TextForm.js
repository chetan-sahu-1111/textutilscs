import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase is clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase.","success");
  };
  const replaceString=()=>{
    let repval=prompt("Enter the word to be replaced:")
    let tobereplaced= new RegExp(repval,'g');

    let toreplace=prompt("Enter the text that you want to replace with:");
    
    let newText= text.replace(tobereplaced,toreplace);
    setText(newText);
    props.showAlert("Text replaced.","success");
  }
  const handleLowClick = () => {
    // console.log("lowercase was clicked");
    let newText1 = text.toLowerCase();
    setText(newText1);
    props.showAlert("Converted to Lowercase.","success");
  };
  const handleClearClick = () => {
    // console.log("lowercase was clicked");
    let newText1 = "";
    setText(newText1);
    props.showAlert("Text Cleared.","success")
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard.","success");
};

const handleCapitalize = () => {
  let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
  setText(newText);
  props.showAlert("Text Capitalized.","success");
}
const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Removed extra spaces.","success");
};

  const handleOnChange = (event) => {
    // console.log("Onchange");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{backgroundcolour: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'white': 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 shadow p-3 mb-5 bg-white rounded text-center">
          <textarea
            name="myBox"
            style={{maxWidth: "100%", backgroundcolour: props.mode=== 'light'?'white': 'grey' , color:props.mode=== 'dark'? 'Grey': 'black'}}
            value={text}
           
            id="myBox"
            onChange={handleOnChange}
            cols="148" 
            rows="8"
            
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2 " onClick={handleUpClick}>
          Convert to Upercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
          Copy to Clipboard
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={replaceString}>
          Replace Text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCapitalize}>
          Capitalize
        </button>
        
      </div>
      <div className="container my-3" style={{backgroundcolour: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'white': 'black'}}>
        <h2>Your text Summary</h2>
        <p>
          <b>
            {text.split(" ").length} words {text.length} characters
          </b>
        </p>
        <p>
          <b>{0.008 * text.split("").length} minutes to read</b>
        </p>
        <h2>Preview</h2>
        <p> {text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
        </div>
      
  </>
);
      }

