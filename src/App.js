import { useState } from 'react';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Output from './components/output/output';
import WillForm from './components/willForm/willForm';

function App() {
  
  const [will, setWill] = useState('')

  useEffect(() => {
    window.localStorage.setItem('will', JSON.stringify(will));
  }, [will])
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('will'));
    if (items) {
     setWill(items);
    }
  }, [])

  function handleForm(will_){
    window.localStorage.setItem('will', JSON.stringify(will_));
    setWill(will_)
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WillForm handleForm={handleForm}/>}/>     
        <Route path='/viewWill' element={<Output/>}/>
      </Routes>
    </div>
  );
}

export default App;
 