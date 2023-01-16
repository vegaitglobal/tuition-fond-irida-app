import { ChangeEvent, MouseEventHandler, useEffect, useState } from "react";
import { PageOf } from "../../core/models/common/pageOf";
import { Pagination } from "../../components/Pagination/Pagination";
import { Blog } from "../../core/models/blog";
import { fetchBlogs, fetchBlogsCategories } from "../../core/services";
import { StyledBlogsSection } from "./BlogsSection.style";
import { BlogCard } from "../../components/BlogCard/BlogCard";
import { Loader } from "../../components";

export const BlogsSection = () => {
    const [pageOfBlogs, setPageOfBlogs] = useState<PageOf<Blog>>(new PageOf<Blog>(0, [], 0));
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchBlogs(currentPage).then((pageOfBlogs: PageOf<Blog>) => {
            fetchBlogsCategories().then((categories: string[]) => {
                setPageOfBlogs(pageOfBlogs);
                setCategories(categories);
                setLoading(false);
            });
        });
    }, [currentPage]);

    useEffect(() => {
        setLoading(true);
        fetchBlogs(1, selectedCategory).then((pageOfBlogs) => {
            setPageOfBlogs(pageOfBlogs);
            setCurrentPage(1);
            setLoading(false);
        });
    }, [selectedCategory]);

    const handleClickPaginationButton = (newPageNumber: number) => {
        setCurrentPage(newPageNumber);
    };

    const changeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    };

    const categoryOptions = categories.map((category) => (
        <option key={category} value={category}>
            {category}
        </option>
    ));

    return (
        <>
            <StyledBlogsSection>
                <div className="blogs-banner">
                    <h1>Lorem ipsum</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu odio
                        vel nunc fringilla euismod eget non eros.{" "}
                    </p>

                    <div className="category-wrapper">
                        <h3>Kategorija bloga</h3>
                        <select defaultValue={selectedCategory} onChange={changeCategory}>
                            <option value="" disabled>
                                Izaberite kategoriju
                            </option>
                            {categoryOptions}
                        </select>
                    </div>
                </div>
                <div className="blog-cards-wrapper">
                    {loading ? (
                        <Loader />
                    ) : (
                        pageOfBlogs.items.map((blog: Blog) => (
                            <BlogCard blog={blog} key={blog.id} />
                        ))
                    )}
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
