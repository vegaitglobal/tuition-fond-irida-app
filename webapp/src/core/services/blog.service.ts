import axios from "axios";
import { Blog } from "../models/blog";
import { PageOf } from "../models/common/pageOf";

export const fetchBlogs = async (pageNumber: number): Promise<PageOf<Blog>> => {
    const baseUrl = process.env.REACT_APP_API_URL;
    const { data } = await axios.get<PageOf<Blog>>(`${baseUrl}/api/Blog?pageNumber=${pageNumber}`);

    return new PageOf<Blog>(data.total, data.items, data.pageSize);
};

export const fetchBlogById = async (id: string): Promise<Blog> => {
    const baseUrl = process.env.REACT_APP_API_URL;
    const { data } = await axios.get<Blog>(`${baseUrl}/api/Blog/${id}`);
    return new Blog(
        data.id,
        data.title,
        data.shortDescription,
        data.image,
        data.content,
        data.blogAuthor,
        data.categories
    );
};
