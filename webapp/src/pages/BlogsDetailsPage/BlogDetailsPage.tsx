import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Blog } from "../../core/models/blog";
import { fetchBlogById } from "../../core/services";
import { StyledBlogDetailsPage } from "./BlogDetailsPage.style";

export const BlogDetailsPage = () => {
    const params = useParams();
    const id = params.id;

    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        fetchBlogById(id!).then((blog) => setBlog(blog));
    }, []);

    return (
        <StyledBlogDetailsPage>
            <div className="blog-item-title">{blog && blog.title}</div>
            <div
                className="blog-item-description"
                dangerouslySetInnerHTML={{ __html: blog?.content ?? "" }}
            ></div>
        </StyledBlogDetailsPage>
    );
};
