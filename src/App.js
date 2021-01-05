
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from "./components/layout/NavBar";

import Cubes from "./components/content/Cubes";
import Cards from './components/content/Cards'
import Hearts from "./components/content/Hearths";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/hearts' component={Hearts}/>
        <Route path='/cubes' component={Cubes} />
        <Route path='/cards' component={Cards} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
