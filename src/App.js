import IniciarSesion from './components/iniciarSesion';
import CrearUsuario from './components/crearUsuario';
import ListadoTickets from './components/listadoTickets';
import ListadoUsuarios from './components/listadoUsuarios';
import RutaPrivada from './components/routes/rutaPrivada';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
      <Router>

        <div className="app">
          <Switch>

            <Route exact path="/" component={IniciarSesion}/>
            <RutaPrivada exact path="/home" component={ListadoTickets}/>
            <RutaPrivada exact path="/usuarios" component={ListadoUsuarios}/>
            <RutaPrivada exact path="/crearusuario" component={CrearUsuario}/>

          </Switch>
        </div>

      </Router>

  );
}

export default App;
