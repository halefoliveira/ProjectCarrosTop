import Navbar from 'components/Navbar';
import Catalogo from 'Pages/Catalogo';
import Home from 'Pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Rotas = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>
        <Route path="/" exact >
          <Home />
        </Route>
        <Route path="/Catalogo">
          <Catalogo />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Rotas;
