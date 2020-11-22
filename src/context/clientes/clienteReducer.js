import { 
    OBTENER_CLIENTES,
    CREAR_CLIENTES,
    MODIFICAR_CLIENTES,
    ELIMINAR_CLIENTES
} from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type){
        case OBTENER_CLIENTES:
            return{
                ...state,
                clientes: action.payload
            };

        case CREAR_CLIENTES:
            return{
                ...state,
                clientes: [...state.clientes, action.payload]
            }

        case MODIFICAR_CLIENTES:
            return{
                ...state,
                clientes: state.clientes.map((cliente) => cliente.id === action.payload.id ? cliente = action.payload : cliente)
            }

        case ELIMINAR_CLIENTES:
            return{
                ...state,
                clientes: state.clientes.filter(cliente => cliente.id !== action.payload)
            }

        default:
            return state;

    }
}