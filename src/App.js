import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Body from './components/body/body';
import Header from './components/header/header';
import Landingpage from './components/landingpage/landingpage';

function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/body' element={<Body/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
 