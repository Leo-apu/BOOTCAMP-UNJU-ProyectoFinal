import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/home.jsx';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import N from './components/navbar/navbar';
import { useState } from 'react';
import Character from './components/card/card.jsx';
function App() {

  const[name,setName] = useState("");

  const getName = (val) => setName(()=>{
    return val;
  })


  return (

    <BrowserRouter>
    
      <N getName={getName}/>
      
      <Switch>
        <Route exact path="/home">
          <Home name={name}/>
        </Route>
        <Route exact path="/home/character/:id">
          <Character />
        </Route>

      </Switch>
    </BrowserRouter>

    
  );
}

export default App;
