import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';

import { follow, unfollow, requestUsers } from "../../redux/usersReducer";
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/usersSelectors';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { UserType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';

type MapStateToPropsPropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UserType>
    followingInProgress: Array<number>
}

type MapDispatchToPropsPropsType = {
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    requestUsers: (page: number, pageSize: number) => void
}

type OwnPropsPropsType = {
    pageTitle: string
}

type PropsType = MapStateToPropsPropsType & MapDispatchToPropsPropsType & OwnPropsPropsType;

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {requestUsers, currentPage, pageSize} = this.props;
        requestUsers(currentPage, pageSize);
        
    }

    onPageChanged = (pageNumber: number) => {
        const {requestUsers, pageSize} = this.props
        requestUsers(pageNumber, pageSize);
    }

    render() {
        const {isFetching, totalUsersCount, pageSize,
            currentPage, users, unfollow, follow, followingInProgress, pageTitle} = this.props;
        
        return <>
            <h1>{pageTitle}</h1>
            {isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={this.onPageChanged}
                users={users}
                unfollow={unfollow}
                follow={follow}
                followingInProgress={followingInProgress} />
        </>

    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsPropsType => {
    return { 
        users: getUsers(state), 
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect<MapStateToPropsPropsType, MapDispatchToPropsPropsType, OwnPropsPropsType, AppStateType>(
        mapStateToProps, {follow, unfollow, requestUsers})
)(UsersContainer)
