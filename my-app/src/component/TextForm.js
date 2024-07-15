import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('ENTER THE TEXT');

    const clicked = () => {
        console.log("clicked");

        let newText=text.toUpperCase();
        setText(newText);

    };
    const clickedlower =()=>{

        console.log("clickedlower");
        let newText1=text.toLowerCase();
        setText(newText1);
    }

    const changee = (event) => {
        console.log("changed");
        setText(event.target.value); // Update state with the value from the textarea
    };

    return (
        <>
        <div class="container">
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea 
                    className="form-control" 
                    id="mybox" 
                    value={text} 
                    onChange={changee} 
                    rows="12"
                ></textarea>
                
            </div>
            <button 
                    className="btn btn-primary mx-5" 
                    onClick={clicked}
                >
                    convertToUpper
                </button>
              
                <button 
                    className="btn btn-primary mx-5" 
                    onClick={clickedlower}
                >
                    convertToLower
                </button>
        </div>

        <div className="container my-5">

            <h3> This is the summary </h3>
            <p> There are {text.length}letters and {text.split(" ").length}words </p>
            <h3>Time needed to reed the doc</h3>
            <p> Minutes needed to read this is {0.008 * text.split(" ").length}</p>

            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    );
}
