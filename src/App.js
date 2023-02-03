// import About from './About';
// import './App.css';
import { Navbar } from './Navbar';
import TextForm from './TextForm';
import React, { useState} from 'react';
import Alert from './Alert';
// import{
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
    
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#1b1735"
      showAlert("Dark mode has been enabled", "success")
    }
    else{
    setMode('light');
    document.body.style.backgroundColor = "White"
    showAlert("Light mode has been enabled", "success")
    }
  }
  
  return ( 
      <>
  {/* <Navbar title = "ModifyText" aboutText = "About Us"/> */}
  {/* <Navbar/> */}
  {/* <BrowserRouter> */}
  
  <Navbar title = "ModifyText" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container">
          {/* <Routes>
            <Route exaxt path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes> */}
        </div>
   {/* </BrowserRouter> */}
  <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
   {/* <About/> */}
      </>
  );
}

export default App;
