import Hearts from "./components/content/Hearths";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from "./components/layout/NavBar";
import Cubes from "./components/content/Cubes";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/hearts' component={Hearts}/>
        <Route path='/cubes' component={Cubes} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
