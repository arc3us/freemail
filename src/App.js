import React from 'react';
import './App.css';
import Header from "./Header.js"
import Sidebar from './Sidebar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Mail from "./Mail"
import EmailList from './EmailList';
import SendMail from './SendMail';

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
     <SendMail />
     </Router>
    </div>
  );
}

export default App;
