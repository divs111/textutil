import { useState } from 'react';
import './App.css';
// import About from './components/About'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
/* import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"; */
//import { Link } from "react-router-dom";


function App() {

  const [mode,setMode] = useState('light');
  const [alert ,setAlert] = useState(null);
  

    const showAlert=(message,type)=>
    {setAlert({
      msg : message,
      type: type
    })
    }
    setTimeout(() => {
      setAlert(null)
    }, 5000);

    const removeBodyClasses=()=>
      {
        document.body.classList.remove('bg-light')
        document.body.classList.remove('bg-dark')
        document.body.classList.remove('bg-warning')
        document.body.classList.remove('bg-success')
        document.body.classList.remove('bg-primary')
        document.body.classList.remove('bg-danger')
      }
const palletemode = (cls) =>{
  removeBodyClasses();
     document.body.classList.add('bg-'+cls)
}
  const toggleMode = () =>{
    removeBodyClasses();
    if(mode === 'light'){
    setMode("dark")
    document.body.style.backgroundColor='#052144'
    showAlert("Dark mode has been enabled","success")
    document.title= "TextUtils - DarkMode"
    /* setInterval(() => {
      document.title="Textutil is nice app"
    }, 2000);
    setInterval(() => {
      document.title="Install Textutil"
    }, 1500);   */
  }
    else {
      setMode("light");
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
      document.title="TextUtils - LightMode"
    }
  }


  return (
    <>
     
   <Navbar title = 'TextUtils' mode={mode} toggleMode={toggleMode} palletemode={palletemode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
    
   { /*<Switch>
          <Route exact path="/about">
            <About />
          </Route>
  <Route path="/"> */ }
    <Textform showAlert={showAlert} heading = 'Enter the text here' mode={mode}/>
         {/* </Route>
        </Switch> */}
   </div>
{/* </Router> */}
    </>
  );
}

export default App;
