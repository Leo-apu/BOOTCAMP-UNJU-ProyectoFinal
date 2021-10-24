import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/home.jsx';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import N from './components/navbar/navbar';
import { useState } from 'react';
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

  const homeSearch = () => setSearch(()=>{
    return true;
  })


  return (

    <BrowserRouter>
    
      <N getName={getName} search={search}/>
      
      <Switch>
        <Route exact path="/home">
          <Home name={name} />
        </Route>
        <Route exact path="/home/character/:id">
          <Character />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/contacto">
          <Contact />
        </Route>

        <Route exact path="/">
          <LandingPage homeSearch={homeSearch}/>
        </Route>
        <Route path="/">
          <Error />
        </Route>

      </Switch>
      <Footer/>
    </BrowserRouter>

    
  );
}

export default App;
