import React from 'react';

import Paginator from '../common/Paginator/Paginator';
import User from './User';


const Users = ({totalUsersCount, pageSize, onPageChanged, currentPage, users, followingInProgress, unfollow, follow}) => {
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