import { profileAPI } from "../api/api";
import { stopSubmit } from "redux-form";
import { PostType, ProfileType, PhotosType } from "../types/types";

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
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
};

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case ADD_POST: {
            const addNewPost = {
                id: 5,
                message: action.newPostText,
                likesCount: '6555'
            };
            return {
                ...state,
                posts: [...state.posts, addNewPost],
                newPostText: ''
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
                profile: {...state.profile, photos: action.photos} as ProfileType // fix later
            }
        }
        default:
            return state;
    }
}

type AddPostActionCreatorType = {
    type: typeof ADD_POST
    newPostText: string
}
type DeletePostActionCreatorType = {
    type: typeof DELETE_POST
    postId: number
}
type SetUserProfileActionCreatorType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
type SetStatusActionCreatorType = {
    type: typeof SET_STATUS
    status: string
}
type SavePhotoSuccessActionCreatorType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}

export const addPost = (newPostText: string): AddPostActionCreatorType => ({type: ADD_POST, newPostText });
export const deletePost = (postId: number): DeletePostActionCreatorType => ({type: DELETE_POST, postId });
export const setUserProfile = (profile: ProfileType): SetUserProfileActionCreatorType => ( {type: SET_USER_PROFILE, profile});
export const setStatus = (status: string): SetStatusActionCreatorType => ( {type: SET_STATUS, status});
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionCreatorType => ( {type: SAVE_PHOTO_SUCCESS, photos});

export const userProfile = (userId: number) => async (dispatch: any) => {
    const data = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(data));
}


export const getStatus = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    try {
        const response = await profileAPI.updateStatus(status);
    
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
    catch (error) {
        alert("somthing gone wrong"); // fix later
    }

}

export const savePhoto = (file: any) => async (dispatch: any) => {
    const response = await profileAPI.savePhoto(file);
    
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
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