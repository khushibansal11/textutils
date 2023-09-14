import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handelTextValue = (event)=>{
        setText(event.target.value)
    }
    const handelUppercase = (event)=>{
        setText(text.toUpperCase())
        props.showalert("Text converted to uppercase","success")
        console.log(text.match(/\S+/g))
    }
    const handelLowercase = (event)=>{
        setText(text.toLowerCase())
        props.showalert("Text converted to lowercase","success")
    }
    const handelclearcase = (event)=>{
        setText("")
        props.showalert("Text cleared","success")
    }
    const handelcopycase = (event)=>{
        navigator.clipboard.writeText(text)
        props.showalert("Text copied","success")
    }

  return (
    <>
    <div className="cantainer" style={{color: props.mode=="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} placeholder='Enter your text here...' style={{backgroundColor: props.mode=="dark"?"grey":"white"}} onChange={handelTextValue} id="exampleFormControlTextarea1" rows="7"></textarea>
        </div>
        <div className="btn btn-primary" onClick={handelUppercase}>Uppercase</div>
        <div className="btn btn-primary mx-1" onClick={handelLowercase}>Lowercase</div>
        <div className="btn btn-primary mx-1" onClick={handelclearcase}>Clear text</div>
        <div className="btn btn-primary mx-1" onClick={handelcopycase}>Copy text</div>
    </div>
    <div className='my-4' style={{color: props.mode=="dark"?"white":"black"}}> 
        <h4 >Text Summary</h4>
        <p>words: {text.trim() === '' ? 0 : text.match(/\S+/g).length} <br /> characters: {text.replace(/\s+/g, '').length}</p>
        <p>{0.008* text.split(' ').length} Minutes to read</p>
    </div>
    </>
  )
}
