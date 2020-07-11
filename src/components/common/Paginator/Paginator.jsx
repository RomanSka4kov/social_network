import React from 'react';
import styles from './Paginator.module.css';

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className="Paginator">
            {pages.map(el => {
                return <span
                    key={el}
                    className={currentPage === el ? styles.selected_page : ''}
                    onClick={() => {
                        onPageChanged(el)
                    }}>{el}</span>
            })}
        </div>
    );
}

export default Paginator;