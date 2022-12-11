import React from 'react'
import "./Pagination.css"

function Pagination({ postsPerPage, totalPosts, paginate }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)

    }



    return (
        <ul className='pagination'>
            {pageNumbers.map(number => {
                return (
                    <li key={number}>
                        <a href='#' onClick={() => paginate(number)}>{number}</a>
                    </li>
                )
            })}

        </ul>
    )
}

export default Pagination