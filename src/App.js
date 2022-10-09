import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Components/Contact';
import Reviews from './Components/Reviews';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 


function App() {
 return (
      <>
      <Router>
        <Navbar/>
       <Switch>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
        <Route path='/reviews'>
         <Reviews/>
        </Route>
       </Switch>
      </Router>
      </>
    );
  }
  
  
  
  export default App;