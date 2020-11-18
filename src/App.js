import Layout from './components/layout/Layout';
import Sidebar from './components/layout/Layout';
import IniciarSesion from './components/iniciarSesion';
import CrearUsuario from './components/crearUsuario';
import ListadoTickets from './components/listadoTickets';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
      <Router>

        <div className="app">
          <Switch>

            <Route exact path="/" component={IniciarSesion}/>
            <Route exact path="/home" component={ListadoTickets}/>
            <Route exact path="/crearusuario" component={CrearUsuario}/>

          </Switch>
        </div>

      </Router>

      // <IniciarSesion/>
  );
}

export default App;
