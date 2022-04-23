import React from 'react';
import './App.css';
import Header from "./Header.js"
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Mail from "./Mail"
import EmailList from './EmailList';

function App() {
  return (
    <div className="App">
     <Header /> 
     <Router>
     <div className="app_body">
      <Sidebar />
      <Routes>
         <Route path = "/mail" element={<Mail />} />
         <Route path="/" element={  <EmailList />} />
      </Routes>
     </div>
     </Router>
    </div>
  );
}

export default App;
