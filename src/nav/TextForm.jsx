import React, { useState } from 'react'
function TextForm(props) {
    const [text, setText] = useState("")
    const [isUpperCase, setisUpperCase] = useState(false)


    const clrText = () => {
        setText("")
    }
    const toggleCase = () => {
        if (isUpperCase) {
            setText(text.toLowerCase());
        } else {
            setText(text.toUpperCase());
        }
        setisUpperCase(!isUpperCase);
    };

    const handleChange = (e) => {
        setText(e.target.value)
    }


    const trimmedText = text.trim()
    const finalText = trimmedText.split(/\s+/).filter(word => word.length > 0);
    const handleCopy = () => {
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control mb-3" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleChange} placeholder='Enter your text' >{toggleCase}</textarea>
                <button className='btn btn-primary mx-2 my-2' disabled={text.length === 0} onClick={clrText}>Clear text</button>
                <button className="btn btn-primary mx-2 my-2" disabled={text.length === 0} onClick={toggleCase}>
                    {isUpperCase ? 'Convert to lowercase' : 'Convert to uppercase'}
                </button>
                <div><button className='btn btn-primary mx-2 my-5' disabled={text.length === 0} onClick={handleCopy}>Copy text</button></div>


            </div>
            <div>

                <h1>{finalText.length} words and {text.length} characters</h1>
                <h2 >Preview: </h2>
                <p>{text.length > 0 ? text : "enter a text to preview"}</p>
            </div>
        </>
    )
}

export default TextForm;