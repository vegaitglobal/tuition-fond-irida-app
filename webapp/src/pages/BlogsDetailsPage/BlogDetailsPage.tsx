import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Blog } from "../../core/models/blog";
import { fetchBlogById } from "../../core/services";
import { StyledBlogDetailsPage } from "./BlogDetailsPage.style";
import { Loader } from "../../components";

export const BlogDetailsPage = () => {
    const params = useParams();
    const id = params.id!;

    const [blog, setBlog] = useState<Blog>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchBlogById(id).then((blog) => {
            setBlog(blog);
            setLoading(false);
        });
    }, [id]);

    if (loading) return <Loader center />;
    if (!blog) return null;

    return (
        <StyledBlogDetailsPage backgroundImage={blog.image.file.url}>
            <div className="banner">
                <div className="author">
                    <h2 className="blog-author-item-title">{blog.title}</h2>
                    <div className="blog-author-wrapper">
                        <div className="blog-author-profile-picture">
                            <img
                                src={
                                    blog.blogAuthor.picture.file.url +
                                    "?w=66&h=66&f=center&fit=thumb"
                                }
                                alt={blog.blogAuthor.name}
                            />
                        </div>
                        <div className="blog-author-name">{blog.blogAuthor.name}</div>
                    </div>
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
