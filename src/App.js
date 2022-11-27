import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Body from './components/body/body';
import Output from './components/output/output';
import WillForm from './components/willform/willform';

function App() {
  
  let [will, setWill] = useState('')

  function handleForm(will_){
    console.log(will_)
    setWill(will_)
    console.log(will['firstName'])
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WillForm handleForm={handleForm}/>}/>     
        <Route path='/viewWill' element={<Output willO={will}/>}/>
      </Routes>
    </div>
  );
}

export default App;
 