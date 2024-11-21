import React ,{useState}from 'react'

export default function Textform(props) {
    const handleUpClick = () =>{
        console.log("uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }
    const handleOnchange = (event) =>{
        console.log("onchange")
        setText(event.target.value)
    }
    const handleloClick =() =>{
        let newTxt = text.toLowerCase();
        setText(newTxt);
        props.showAlert("Converted to LowerCase","success")
    }
    const handleOnclear =() =>{
        let newTxt=""
        setText(newTxt);
    }
    const handleOnTitle =()=>{
        let ntext = text.split(" ").map(word=> word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
        setText(ntext);
    }
    const handleOnSen = ()=>{
        let txt= text.charAt(0).toUpperCase() +text.substring(1).toLowerCase();
        setText(txt);
    }
    const handleOnalt = ()=>{
        let txt = text.split("").map((c,i) => { return i%2 === 0? c.toLowerCase(): c.toUpperCase()}).join("");
        setText(txt); 
    }
    const [text , setText]= useState("")
    //setText("type here");
  return (
    <>
    <div className='container' style={{color: props.mode==='light'?'black':'white'}}> 
        <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#052144':'white',color: props.mode==='light'?'black':'white'}} onChange={handleOnchange}id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleloClick}>LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleOnclear}>Clear text</button>
<button className="btn btn-primary mx-2" onClick={handleOnTitle}>Title Case</button>
<button className="btn btn-primary mx-2" onClick={handleOnSen}>Sentence Case</button>
<button className="btn btn-primary mx-2" onClick={handleOnalt}>Alternate Case</button>

 </div>
    <div className="container my-3"style={{color: props.mode==='light'?'black':'white'}}>
        <h1>Text Summary</h1>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in textbox to preview it here"}</p>
    </div>
    </>
  )
}
