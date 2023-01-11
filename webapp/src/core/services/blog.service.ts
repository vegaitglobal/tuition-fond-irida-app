import axios from "axios";
import { Blog } from "../models/blog";
import { PageOf } from "../models/common/pageOf";
import * as blogs from "./blogs.json";

export const fetchBlogs = async (pageNumber: number): Promise<PageOf<Blog>> => {
    // const baseUrl = process.env.REACT_APP_API_URL;
    // const response = await axios.get<PageOf<Blog>>(`${baseUrl}/api/Blog?pageNumber=${pageNumber}`);

    const data = blogs as unknown as {total: number, items: any[], pageSize: number};
    return new PageOf<Blog>(data.total, data.items, data.pageSize);
};

export const fetchBlogById = async (id: string): Promise<Blog> => {
    const baseUrl = process.env.REACT_APP_API_URL;
    const response = await axios.get<Blog>(`${baseUrl}/api/Blog/${id}`);
    return new Blog(
        response.data.id,
        response.data.title,
        response.data.shortDescription,
        response.data.image,
        response.data.content,
        response.data.blogAuthor,
        response.data.categories
    );
};
