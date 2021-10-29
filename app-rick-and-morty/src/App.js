import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/home.jsx';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import N from './components/navbar/navbar';
import { useState, useEffect } from 'react';
import Character from './components/card/card.jsx';
import About from './components/about/about';
import Contact from './components/contact/contact';
import LandingPage from './components/landing/landing';
import Error from './components/error/error';
import Footer from './components/footer/footer';

function App() {

  const[name,setName] = useState("");


  const getName = (val) => setName(()=>{
    return val;
  })
  const [search, setSearch] = useState(false)

  const isHome = (val) => setSearch(()=>{
    return val;
  })


  return (

    <BrowserRouter>
    
      
      
      <Switch>
        <Route exact path="/home">
          <N getName={getName} search={search}/>
          <Home name={name} isHome={isHome}/>
        </Route>
        <Route exact path="/home/character/:id">
          <Character isHome={isHome}/>
        </Route>
        <Route exact path="/about">
        <N getName={getName} search={search}/>
          <About isHome={isHome}/>
        </Route>

        <Route exact path="/contact">
          <N getName={getName} search={search}/>
          <Contact isHome={isHome}/>
        </Route>

        <Route exact path="/">
          <LandingPage isHome={isHome}/>
        </Route>
        <Route path="/">
          <Error isHome={isHome}/>
        </Route>

      </Switch>
      <Footer/>
    </BrowserRouter>

    
  );
}

export default App;
