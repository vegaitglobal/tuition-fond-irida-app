import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Blog } from "../../core/models/blog";
import { fetchBlogById } from "../../core/services";
import { StyledBlogDetailsPage } from "./BlogDetailsPage.style";

export const BlogDetailsPage = () => {
    const params = useParams();
    const id = params.id!;

    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        fetchBlogById(id).then((blog) => setBlog(blog));
    }, []);

    if (!blog) return null;

    console.log(blog);

    return (
        <StyledBlogDetailsPage
            backgroundImage={blog.image.file.url}
            profilePictureImage={blog.blogAuthor.picture.file.url}
        >
            <div className="banner">
                <div className="author">
                    <h2 className="blog-author-item-title">{blog.title}</h2>
                    <div></div>
                </div>
            </div>
            <div className="content">
                <div className="blog-item-title">{blog.title}</div>
                <div
                    className="blog-item-description"
                    dangerouslySetInnerHTML={{ __html: blog.content ?? "" }}
                ></div>
            </div>
        </StyledBlogDetailsPage>
    );
};
