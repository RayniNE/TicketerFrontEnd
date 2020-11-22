import { 
    OBTENER_ROLES,

} from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type){
        case OBTENER_ROLES:
            return{
                ...state,
                roles: action.payload
            };
        default:
            return state;

    }
}