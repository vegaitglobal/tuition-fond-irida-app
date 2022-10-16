import { Blog } from "../../core/models/blog";
import { StyledBlogCard } from "./BlogCard.style";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";

interface Props {
    blog: Blog;
}

export const BlogCard = (props: Props) => {
    const { blog } = props;

    const className = blog.image.file.url
        ? "blog-card-image-wrapper"
        : "blog-card-image-wrapper background";
    const navigate = useNavigate();

    const handleClickCard = () => {
        navigate(`${blog.id}`, { replace: false });
    };

    return (
        <StyledBlogCard>
            <div className={className} style={{}}>
                {blog.image.file.url && <img src={blog.image.file.url} alt={blog.image.title} />}
            </div>
            <div className="blog-card-title">{blog.title}</div>
            <div className="blog-card-description">{blog.shortDescription}</div>
            <Button onClick={handleClickCard} text="Pročitaj opširnije" variant="light" />
        </StyledBlogCard>
    );
};
