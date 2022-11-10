import logo from './logo.svg';
import './App.css';
import First from './First';
import Test from './Test';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [n,setn] = useState("")
  const [p,setp] = useState("")

  const getdata = (data) => {
    setn(data)
  }
  const id = (d) => {
    setp(d)
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <First onsubmit={getdata} sub={id}/>}/>
          <Route path="/t" element={ <Test nam={n} id={p}/>}/>
        </Routes>
      </Router>
    
     
    </div>
  );
}

export default App;
