import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'profile/ADD_POST';
const DELETE_POST = 'profile/DELETE_POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

const initialState = {
    posts: [
        {id: 1, message: 'It\'s my first post', likesCount: '11'},
        {id: 2, message: 'My too', likesCount: '12'},
        {id: 3, message: 'My too', likesCount: '12'},
        {id: 4, message: 'My too', likesCount: '12'}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            const addNewPost = {
                id: 5,
                message: action.newPost,
                likesCount: '6555'
            };
            return {
                ...state,
                posts: [...state.posts, addNewPost]
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter((el) => el.id !== action.postId) 
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} 
            }
        }
        default:
            return state;
    }
}

export const addPost = (newPost) => ({type: ADD_POST, newPost });
export const deletePost = (postId) => ({type: DELETE_POST, postId });
export const setUserProfile = (profile) => ( {type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ( {type: SET_STATUS, status});
export const savePhotoSuccess = (photos) => ( {type: SAVE_PHOTO_SUCCESS, photos});

export const userProfile = (userId) => async (dispatch) => {
    const data = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(data));
}


export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    
    if (response.data.resultCode === 0) {
        dispatch(userProfile(userId));
    } else {
        dispatch(stopSubmit("editProfile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;