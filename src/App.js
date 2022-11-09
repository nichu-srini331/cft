import logo from './logo.svg';
import './App.css';
import First from './First';
import Test from './Test';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <First/>}/>
          <Route path="/t" element={ <Test/>}/>
        </Routes>
      </Router>
    
     
    </div>
  );
}

export default App;
