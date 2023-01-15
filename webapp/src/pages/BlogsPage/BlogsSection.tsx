import { useEffect, useState } from "react";
import { PageOf } from "../../core/models/common/pageOf";
import { Pagination } from "../../components/Pagination/Pagination";
import { Blog } from "../../core/models/blog";
import { fetchBlogs } from "../../core/services";
import { StyledBlogsSection } from "./BlogsSection.style";
import { BlogCard } from "../../components/BlogCard/BlogCard";
import { Loader } from "../../components";

export const BlogsSection = () => {
    const [pageOfBlogs, setPageOfBlogs] = useState<PageOf<Blog>>(new PageOf<Blog>(0, [], 0));
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchBlogs(currentPage).then((pageOfBlogs: PageOf<Blog>) => {
            setLoading(false);
            setPageOfBlogs(pageOfBlogs);
        });
    }, [currentPage]);

    const handleClickPaginationButton = (newPageNumber: number) => {
        setCurrentPage(newPageNumber);
    };

    return loading ? (
        <Loader center />
    ) : (
        <>
            <StyledBlogsSection>
                <div className="blog-cards-wrapper">
                    {pageOfBlogs.items.map((blog: Blog) => (
                        <BlogCard blog={blog} key={blog.id} />
                    ))}
                </div>
            </StyledBlogsSection>
            <Pagination
                pageSize={pageOfBlogs.pageSize}
                totalCountOfItems={pageOfBlogs.total}
                handlePageNumberClick={handleClickPaginationButton}
                activePageNumber={currentPage}
            />
        </>
    );
};
