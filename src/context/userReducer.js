import { 
    VERIFICAR_LOGUEO,
    USUARIO_LOGUEADO,
    USUARIO_DESLOGUEADO,
    OBTENER_USUARIOS,
    CREAR_USUARIOS,
    MODIFICAR_USUARIOS,
    ELIMINAR_USUARIOS,

} from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type){

        case USUARIO_LOGUEADO:
            localStorage.setItem("user", JSON.stringify(action.payload))
            return{
                ...state,
                currentUser: action.payload,
                isAuth: true
            };

        case USUARIO_DESLOGUEADO:
            localStorage.removeItem("user");
            return{
                ...state,
                currentUser: null,
                isAuth: false
            };

        case VERIFICAR_LOGUEO:
            const item = localStorage.getItem("user");
            return{
                ...state,
                currentUser: item ? state.currentUser = JSON.parse(item) : [], 
                isAuth: item ? state.isAuth = true : state.isAuth = false
            }

        case OBTENER_USUARIOS:
            return{
                ...state,
                usuarios: action.payload
            };

        case CREAR_USUARIOS:
            return{
                ...state,
                usuarios: [...state.usuarios, action.payload]
            }

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