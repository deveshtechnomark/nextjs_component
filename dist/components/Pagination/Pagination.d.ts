import React from "react";
interface PaginationProps {
    totalPages: number;
    space: boolean | String;
    variant: any;
    onChangePage: (pageNumber: number) => void;
}
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
