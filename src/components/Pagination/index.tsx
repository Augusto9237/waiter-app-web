/* eslint-disable react/no-unknown-property */
import { CaretLeft, CaretRight } from 'phosphor-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Container, PaginationContainer,ButtonNext, ButtonPrevious, ContentButtons } from './styles';

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

export function Pagination() {
    const { pagination } = useContext(AuthContext);
    console.log(pagination);
    const currentPage = pagination.offset ? (pagination.offset / pagination.limit) + 1 : 1;
    const pages = Math.ceil(pagination.total / pagination.limit);
    const first = Math.max(currentPage - MAX_LEFT, 1);

    return (
        <Container>
            <PaginationContainer >
                <ButtonNext><CaretLeft size={20} /></ButtonNext>
                {Array.from({ length: Math.min(MAX_ITEMS, pages) })
                    .map((_, index) => index + first)
                    .map((page) => (
                        <ContentButtons key={page} active={page === currentPage}>
                            <button >{page}</button>
                        </ContentButtons>
                    ))
                }
                <ButtonPrevious><CaretRight size={20} /></ButtonPrevious>
            </PaginationContainer>
        </Container>
    );
}