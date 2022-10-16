import { useEffect, useState } from "react";
import { PageOf } from "../../core/models/common/pageOf";
import { Pagination } from "../../components/Pagination/Pagination";
import { Blog } from "../../core/models/blog";
import { fetchBlogs } from "../../core/services";
import { StyledBlogsSection } from "./BlogsSection.style";

export const BlogsSection = () => {
    const [pageOfBlogs, setPageOfBlogs] = useState<PageOf<Blog>>(new PageOf<Blog>(0, [], 0));
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        fetchBlogs(currentPage).then((pageOfBlogs: PageOf<Blog>) => {
            setPageOfBlogs(pageOfBlogs);
        });
    }, [currentPage]);

    const handleClickCard = () => {};

    const handleClickPaginationButton = (newPageNumber: number) => {
        setCurrentPage(newPageNumber);
    };

    return (
        <div>
            <StyledBlogsSection>
                {pageOfBlogs.items.map((blog: Blog, index: number) => (
                    <div>{index}</div>
                ))}
            </StyledBlogsSection>
            <Pagination
                pageSize={pageOfBlogs.pageSize}
                totalCountOfItems={pageOfBlogs.total}
                handlePageNumberClick={handleClickPaginationButton}
                activePageNumber={currentPage}
            />
        </div>
    );
};
