import React from 'react';
import styled from 'styled-components';

interface PaginationProps {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    paginate: (pageNumber: number) => void;
}

export default function Pagination({totalItems, itemsPerPage, currentPage, paginate}: PaginationProps) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <A isCurrent={number == currentPage} onClick={() => paginate(number)} href='!#' className='page-link'>
                            {number}
                        </A>
                    </li>
                ))}
            </ul>
        </Nav>
    );
}

const Nav = styled.nav`
    margin-top: 30px;
    ul {
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0;
    }
    li {
        margin: 0 5px;
    }
`;

const A = styled.a.attrs((props: {isCurrent: boolean}) => ({
    isCurrent: props.isCurrent}))`
    text-decoration: none;
    color: ${props => props.isCurrent ? 'white' : '#000'};
    padding: 5px 10px;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: ${props => props.isCurrent ? 'blue' : 'transparent'};
   
    &:hover {
        background-color: #000;
        color: #fff;
    }
`;