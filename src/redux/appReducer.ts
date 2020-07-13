import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS';

type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false,
}

const appReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default: return state
    }
}

type InitializedSuccesdActionType = {
    type: typeof INITIALIZED_SUCCESS // 'app/INITIALIZED_SUCCESS'
}

export const initializedSuccesd = (): InitializedSuccesdActionType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    
    promise.then(() => {
        dispatch(initializedSuccesd());
    });
}
export default appReducer;

