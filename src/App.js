import IniciarSesion from './components/iniciarSesion';
import CrearUsuario from './components/crearUsuario';
import ListadoTickets from './components/listadoTickets';
import ListadoUsuarios from './components/listadoUsuarios';
import ModificarUsuario from './components/modificarUsuario';
import RutaPrivada from './components/routes/rutaPrivada';

import UserState from './context/userState';
import TicketState from './context/tickets/ticketState';
import RolState from './context/roles/rolState';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (

    <UserState>
      <TicketState>
        <RolState>
        <Router>

          <div className="app">
            <Switch>

              <Route exact path="/" component={IniciarSesion}/>
              <RutaPrivada exact path="/home" component={ListadoTickets}/>
              <RutaPrivada exact path="/usuarios" component={ListadoUsuarios}/>
              <RutaPrivada exact path="/crearusuario" component={CrearUsuario}/>
              <RutaPrivada exact path="/usuarios/editar/:id" component={ModificarUsuario}/>

            </Switch>
          </div>

          </Router>
        </RolState>

      </TicketState>

    </UserState>


  );
}

export default App;
