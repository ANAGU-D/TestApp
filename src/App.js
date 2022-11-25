import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Body from './components/body/body';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<Body/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
 