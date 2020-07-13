import React from 'react';

import Paginator from '../common/Paginator/Paginator';
import User from './User';
import { UserType } from '../../types/types';

type PropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

const Users: React.FC<PropsType> = ({totalUsersCount, pageSize, onPageChanged,
    currentPage, users, followingInProgress, unfollow, follow}) => {
   return (
        <div className="Users">
            <Paginator
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
                currentPage={currentPage} />

            {users.map(el => <User
                user={el}
                followingInProgress={followingInProgress}
                unfollow={unfollow}
                follow={follow}
                key={el.id} /> )
            }
        </div>
    );
}

export default Users;