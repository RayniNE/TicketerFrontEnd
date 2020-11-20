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
        default:
            return state;

    }
}