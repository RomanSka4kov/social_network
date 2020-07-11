import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';

import { follow, unfollow, toggleFollowingProgress, requestUsers } from "../../redux/usersReducer";
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/usersSelectors';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        const {requestUsers, currentPage, pageSize} = this.props;
        requestUsers(currentPage, pageSize);
        
    }

    onPageChanged = (pageNumber) => {
        const {requestUsers, pageSize} = this.props
        requestUsers(pageNumber, pageSize);
    }

    render() {
        const {isFetching, totalUsersCount, pageSize,
            currentPage, users, unfollow, follow, followingInProgress} = this.props;
        return <>
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

let mapStateToProps = (state) => {
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
    connect(mapStateToProps, {follow, unfollow, toggleFollowingProgress, requestUsers})
)(UsersContainer)
