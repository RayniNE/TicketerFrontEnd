import { 

    OBTENER_TICKETS,
    OBTENER_TICKETS_ID,
    OBTENER_TICKETS_USUARIO,
    CREAR_TICKETS,
    MODIFICAR_TICKETS,
    ELIMINAR_TICKETS
} from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type){
        case OBTENER_TICKETS:
        // case OBTENER_TICKETS_ID:
        // case OBTENER_TICKETS_USUARIO:
            return{
                ...state,
                tickets: action.payload
            };

        default:
            return state;

    }
}