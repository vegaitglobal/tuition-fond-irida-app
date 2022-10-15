import { StyledPagination } from "./Pagination.style";
import React from "react";

interface Props {
    activePageNumber: number;
    pageSize: number;
    totalCountOfItems: number;
    handlePageNumberClick: (pageNumber: number) => void;
}

export const Pagination = (props: Props) => {
    const { activePageNumber, pageSize, totalCountOfItems, handlePageNumberClick } = props;

    const onPageNumberClick = (pageNumber: number) => {
        handlePageNumberClick(pageNumber);
    };

    return (
        <StyledPagination>
            {Array.from({ length: totalCountOfItems / pageSize }, (_, i) => (
                <button
                    key={i}
                    className={activePageNumber === i + 1 ? "active" : ""}
                    onClick={() => onPageNumberClick(i + 1)}
                >
                    {i + 1}
                </button>
            ))}
        </StyledPagination>
    );
};
