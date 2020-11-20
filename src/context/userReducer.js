import { 
    OBTENER_USUARIOS,
    CREAR_USUARIOS,
    MODIFICAR_USUARIOS,
    ELIMINAR_USUARIOS,
    OBTENER_TICKETS,
    CREAR_TICKETS,
    MODIFICAR_TICKETS,
    ELIMINAR_TICKETS
} from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type){
        case OBTENER_USUARIOS:
            return{
                ...state,
                usuarios: action.payload
            };
        default:
            return state;

    }
}