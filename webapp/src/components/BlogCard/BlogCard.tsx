import { Blog } from "../../core/models/blog";
import { StyledBlogCard } from "./BlogCard.style";
import { Button } from "../Button/Button";

interface Props {
    blog: Blog;
}

export const BlogCard = (props: Props) => {
    const { blog } = props;
    return (
        <StyledBlogCard>
            <div className="blog-card-image-wrapper" style={{}}>
                <img src={blog.image.file.url} alt={blog.image.title} />
            </div>
            <div className="blog-card-title">{blog.title}</div>
            <div className="blog-card-description">{blog.shortDescription}</div>
            <Button text="Pročitaj opširnije" variant="light" />
        </StyledBlogCard>
    );
};
