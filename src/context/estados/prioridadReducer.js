import { 
    OBTENER_PRIORIDAD,


} from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type){
        case OBTENER_PRIORIDAD:
            return{
                ...state,
                prioridades: action.payload
            };

        default:
            return state;

    }
}