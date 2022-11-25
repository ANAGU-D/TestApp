import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Body from './components/body/body';
import WillForm from './components/willForm/willForm';

function App() {
  
  let[will, setWill] = useState('')

  function handleForm(will){
    setWill(will)
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WillForm handleForm={handleForm}/>}/>
        <Route path='/viewWill' element={<Body will={will}/>}/>
      </Routes>
    </div>
  );
}

export default App;
 