import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import appReducer from './appReducer';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sitebarReducer from './sitebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let rootReducer = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    siteBar: sitebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

type RootReducerType = typeof rootReducer; // (globalState: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(compose(
    applyMiddleware(thunkMiddleware))));

// @ts-ignore
window.store = store;

export default store;