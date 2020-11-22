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

        case MODIFICAR_USUARIOS:
            return{
                ...state,
                usuarios: state.usuarios.map((usuario) => usuario.id === action.payload.id ? usuario = action.payload : usuario)
            }

        case ELIMINAR_USUARIOS:
            return{
                ...state,
                usuarios: state.usuarios.filter(usuario => usuario.id !== action.payload)
            }
        default:
            return state;

    }
}