import IniciarSesion from './components/iniciarSesion';
import CrearUsuario from './components/crearTicket';
import ListadoTickets from './components/listadoTickets';
import ListadoUsuarios from './components/listadoUsuarios';
import ModificarUsuario from './components/modificarUsuario';
import ModificarTicket from './components/modificarTicket';
import CrearTicket from './components/crearTicket';
import RutaPrivada from './components/routes/rutaPrivada';

import UserState from './context/userState';
import TicketState from './context/tickets/ticketState';
import RolState from './context/roles/rolState';
import ServicioState from './context/servicios/servicioState';
import PrioridadState from './context/prioridades/prioridadState';
import EstadoState from './context/estados/estadoState';
import ClienteState from './context/clientes/clienteState';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (

    <UserState>
      <TicketState>
        <RolState>
          <ServicioState>
            <PrioridadState>
              <EstadoState>
                <ClienteState>
                                    
                  <Router>  

                    <div className="app">
                      <Switch>

                        <Route exact path="/iniciarsesion" component={IniciarSesion}/>
                        <RutaPrivada exact path="/usuarios" component={ListadoUsuarios}/>
                        <RutaPrivada exact path="/usuarios/crearusuario" component={CrearUsuario}/>
                        <RutaPrivada exact path="/usuarios/editar/:id" component={ModificarUsuario}/>
                        <RutaPrivada exact path="/tickets" component={ListadoTickets}/>
                        <RutaPrivada exact path="/tickets/crearticket" component={CrearTicket}/>
                        <RutaPrivada exact path="/tickets/editar/:id" component={ModificarTicket}/>
                      </Switch>
                    </div>

                  </Router>

                </ClienteState>

              </EstadoState>

            </PrioridadState>

          </ServicioState>

        </RolState>

      </TicketState>

    </UserState>


  );
}

export default App;
