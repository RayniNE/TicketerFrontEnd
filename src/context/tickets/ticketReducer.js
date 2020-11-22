import { 

    OBTENER_TICKETS,
    CREAR_TICKETS,
    MODIFICAR_TICKETS,
    ELIMINAR_TICKETS
} from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type){
        case OBTENER_TICKETS:
            return{
                ...state,
                tickets: action.payload
            };
        case CREAR_TICKETS:
            return{
                ...state,
                tickets: [...state.tickets, action.payload]
            }

        case MODIFICAR_TICKETS:
            return{
                ...state,
                tickets: state.tickets.map((ticket) => ticket.id === action.payload.id ? ticket = action.payload : ticket)
            }

        case ELIMINAR_TICKETS:
            return{
                ...state,
                tickets: state.tickets.filter(ticket => ticket.id !== action.payload)
            }

        default:
            return state;

    }
}