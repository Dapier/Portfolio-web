
import {BrowserRouter, Route, Switch} from 'react-router-dom'
//Components

//Screens
import Home from './components/Home'

import './App.css';
import './styles/scrollbar.css'
import './styles/effectBg.css'

//Router
const Routing = () => {
  return(
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  )
}



function App() {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
