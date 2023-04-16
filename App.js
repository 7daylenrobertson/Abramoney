import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {motion} from "framer-motion";
import {StepperContext} from "./contexts/StepperContext";
import Navbar from './Components/Navbar';
import Home from "./Components/pages/home";
import Landing from "./Components/pages/landing";
import Upcoming_events from './Components/pages/upcoming_events';
import Live_events from './Components/pages/live_events';
import Selected_event from './Components/pages/selected_event';
import Budget from './Components/pages/budget';
import Investing from './Components/pages/investing';
import Career from './Components/pages/career';
import College from './Components/pages/college';




function App() {

  //const [currStep, setStep] = useState(1);
  //const [userData, setUserData] = useState({"XP":[]});
  //const [finalData, setFinalData] = useState([]);
  //console.log(currStep);


  
  

  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}> </Route>
          <Route path='/budget' element={<Budget/>}> </Route>
          <Route path='/invest' element={<Investing/>}> </Route>
          <Route path='/career' element={<Career/>}> </Route>
          <Route path='/college' element={<College/>}> </Route>
          <Route path='/explore' element={<Live_events/>}> </Route>
          <Route path='/selected' element={<Selected_event/>}> </Route>










          
        </Routes>
      </Router>
     

      
      
      
      
    </div>
  );
}

export default App;
