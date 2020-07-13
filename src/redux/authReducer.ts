import { ResponseCodeEnum } from './../api/api';
import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null // if not null captcha will displayed on UI
}

export type InitialStateType = typeof initialState;
type SetAuthUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA //'auth/GET_CAPTCHA_URL_SUCCESS'
    payload: SetAuthUserDataActionPayloadType
}
type GetCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: { captchaUrl: string }
}

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.payload
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state, ...action.payload
            }
        default: return state
    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
    type: SET_USER_DATA, payload: {userId, email, login, isAuth}
});

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
});

export const getAuthUserData = () => async (dispatch: any) => {
    const response = await authAPI.me();

    if (response.resultCode === ResponseCodeEnum.Success) {
        let {id, login, email} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.resultCode === ResponseCodeEnum.Success) { // success
        dispatch(getAuthUserData());
    } else { // error
        if (response.resultCode === ResponseCodeEnum.CaptchaIsRequired) { // captcha
            dispatch(getCaptchaUrl());
        }
        let errorMessage = response.messages ? response.messages[0] : 'invalid login or email';
        dispatch(stopSubmit('login', {_error: errorMessage}));
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl();
    const capchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(capchaUrl));
}

export const logout = () => async (dispatch: any) => {
    const response = await authAPI.logout();
    
    if (response.data.resultCode === ResponseCodeEnum.Success) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}


export default authReducer;

