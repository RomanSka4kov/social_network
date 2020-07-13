import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/objectHelpers';
import { UserType } from '../types/types';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './redux-store';
import { Dispatch } from 'react';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const USERS_TOTAL_COUNT = 'users/USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number> // users ids array
}

type InitialStateType = typeof initialState;
type ActionsTypes = FollowSuccessActionCreatorType | UnfollowSuccessActionCreatorType
    | SetUsersActionCreatorType | SetCurrentPageActionCreatorType | SetTotalUsersCountActionCreatorType
    | ToggleIsFetchingActionCreatorType | ToggleFollowingProgressActionCreatorType;
type FollowSuccessActionCreatorType = {
    type: typeof FOLLOW
    userId: number
}
type UnfollowSuccessActionCreatorType = {
    type: typeof UNFOLLOW
    userId: number
}
type SetUsersActionCreatorType = {
    type: typeof SET_USERS
    users:  Array<UserType>
}
type SetCurrentPageActionCreatorType = {
    type: typeof SET_CURRENT_PAGE
    currentPage:  number
}
type SetTotalUsersCountActionCreatorType = {
    type: typeof USERS_TOTAL_COUNT
    totalCount:  number
}
type ToggleIsFetchingActionCreatorType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching:  boolean
}
type ToggleFollowingProgressActionCreatorType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    followingInProgress: boolean
    userId:  number
}
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case USERS_TOTAL_COUNT: {
            return { ...state, totalUsersCount: action.totalCount }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)

            }
        }
        default: return state;
    }
}

export const followSuccess = (userId: number): FollowSuccessActionCreatorType => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId: number): UnfollowSuccessActionCreatorType => ({ type: UNFOLLOW, userId })
export const setUsers = (users: Array<UserType>): SetUsersActionCreatorType => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage: number): SetCurrentPageActionCreatorType => ({
    type: SET_CURRENT_PAGE, currentPage: currentPage
})
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountActionCreatorType => ({ type: USERS_TOTAL_COUNT, totalCount })
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionCreatorType => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (followingInProgress: boolean, userId: number): ToggleFollowingProgressActionCreatorType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId
})

export const requestUsers = (page: number, pageSize: number): ThunkType => {

    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        const data = await usersAPI.getUsers(page, pageSize);

        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>, userId: number, apiMethod: any,
    actionCreator: (userId: number) => FollowSuccessActionCreatorType | UnfollowSuccessActionCreatorType) => {
    
    dispatch(toggleFollowingProgress(true, userId));

    const data = await apiMethod(userId);

    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
    }
}

export const unfollow = (userId: number): ThunkType => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
    }
}

export default usersReducer;