import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setmode]=useState("light")
  const togglemode=()=>{
    if(mode==="dark"){
      setmode("light")
      document.body.style.backgroundColor="white"
      showalert("Light mode enabled!","success")
      // document.title='TextUtils-enabled'
    }
    else{
      setmode("dark")
      document.body.style.backgroundColor="#1d254b"
      showalert("Dark mode enabled!","success")
    }
  }

  const [alert,setalert]=useState(null)

  const showalert=(message,type)=>{
    setalert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1000);
  }

  return (
    <>
    <Router>
    <Navbar title='Textutils' homeText='Home' aboutText='About' mode={mode} togglemode={togglemode} />
    <Alert alert={alert}/>
    <div className="container my-4">
        <Routes>
          <Route exact path="/about" element={<About />}>
            
          </Route>
          <Route exact path="/" element={<TextForm showalert={showalert} heading='Enter your text to analyse below' mode={mode}/>}>
            
          </Route>
        </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
