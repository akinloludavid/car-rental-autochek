'use client'
import React from 'react'
import { Flex } from '@chakra-ui/react'
import Paginate from 'rc-pagination'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import styled from '@emotion/styled'

const PaginateWrapper = styled.div`
    .pagination-container {
        display: flex;
        align-items: center;
        list-style-type: none;
        border-radius: 2px;
        color: #fff;
        padding: 0;
        width: fit-content;
    }

    .pagination-container:nth-of-type(2) {
        border-left: 1px solid lightgray;
    }
    .pagination-link {
        cursor: pointer;
        text-align: center;
        margin: 0 5px;
        padding: 5px 10px;
    }
    .rc-pagination-item {
        cursor: pointer;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 5px;
        border-top: 0px;
        border-bottom: 0px;
        color: #808080;
        width: 30px;
        height: 30px;
    }
    .prev-pagination-item {
        height: 100%;
        text-align: center;
        margin: 0;
        color: #fd5c3c;
        padding: 5px 10px;
    }
    .next-pagination-item {
        height: 100%;
        text-align: center;
        margin: 0;
        color: #fd5c3c;
        padding: 5px 10px;
    }
    .pagination-item:hover {
        background-color: #fbaf85;
        color: #f3f3f3;
        border-radius: 3px;
        width: 30px;
        height: 30px;
    }
    .prev-pagination-item:disabled {
        cursor: not-allowed;
    }
    .pagination-ellipsis {
        border-left: 1px solid gray;
    }
    .rc-pagination-item-active {
        background-color: #fd5c3c;
        width: 30px;
        height: 30px;
        font-size: 14px;
        font-weight: 400;
        border-radius: 3px;
        color: #fff !important;
    }
    .disabled {
        cursor: not-allowed;
        color: lightgray;
    }
`
interface IPaginationProps {
    pageCount?: number
    handlePageClick: (e: any) => void
    pageSize: number
    total: number
    onNext?: any
    onPrev?: any
    currentPage?: any
}
const Pagination = ({
    handlePageClick,
    currentPage,
    pageSize,
    total,
}: IPaginationProps) => {
    return (
        <Flex
            py={5}
            w='full'
            alignItems='center'
            justifyContent='center'
            borderRadius={'10px'}
            color={'lightMode.mainTextColor'}
        >
            <PaginateWrapper>
                <Paginate
                    className='pagination-container'
                    pageSize={pageSize}
                    onChange={handlePageClick}
                    current={currentPage}
                    total={total}
                    nextIcon={
                        <MdChevronRight color='black' cursor={'pointer'} />
                    }
                    prevIcon={
                        <MdChevronLeft color='black' cursor={'pointer'} />
                    }
                />
            </PaginateWrapper>
        </Flex>
    )
}

export default Pagination
