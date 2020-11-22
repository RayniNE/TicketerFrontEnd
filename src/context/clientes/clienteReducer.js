import { 
    OBTENER_CLIENTES,
} from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type){
        case OBTENER_CLIENTES:
            return{
                ...state,
                clientes: action.payload
            };

        default:
            return state;

    }
}