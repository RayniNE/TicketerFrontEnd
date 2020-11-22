import { 
    OBTENER_ESTADO,


} from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type){
        case OBTENER_ESTADO:
            return{
                ...state,
                estados: action.payload
            };

        default:
            return state;

    }
}