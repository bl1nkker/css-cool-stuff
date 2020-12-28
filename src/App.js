import Hearts from "./components/content/Hearths";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from "./components/layout/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/hearts' component={Hearts}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
