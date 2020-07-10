import { profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
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
            let addnewPost = {
                id: 5,
                message: action.newPost,
                likesCount: '6555'
            };
            return {
                ...state,
                posts: [...state.posts, addnewPost]
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
        default:
            return state;
    }
}

export const addPost = (newPost) => ({type: ADD_POST, newPost });
export const deletePost = (postId) => ({type: DELETE_POST, postId });
export const setUserProfile = (profile) => ( {type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ( {type: SET_STATUS, status});

export const userProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}

export default profileReducer;