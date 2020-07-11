import React, { useState } from 'react';
import styles from './Paginator.module.css';
import classNames from 'classnames';

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={`${styles.paginator} Paginator`}>
            {portionNumber > 1 &&
                <button onClick={() => {setPortionNumber(portionNumber - 1)}}>prev</button>
            }
            {pages
                .filter((el) => el >= leftPortionPageNumber && el <= rightPortionPageNumber)
                .map(el => {
                return <span
                    key={el}
                    className={ classNames({ [styles.selectedPage]: currentPage === el }, styles.pageNumber) }
                    onClick={() => {
                        onPageChanged(el)
                    }}>{el}</span>
            })}
            {portionCount > portionNumber &&
                <button onClick={() => {setPortionNumber(portionNumber + 1)}}>next</button>
            }
        </div>
    );
}

export default Paginator;