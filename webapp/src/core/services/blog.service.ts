import axios from "axios";
import { Blog } from "../models/blog";
import { PageOf } from "../models/common/pageOf";

export const fetchBlogs = async (pageNumber: number, category?: string): Promise<PageOf<Blog>> => {
    const baseUrl = process.env.REACT_APP_API_URL;

    const pageParam = `pageNumber=${pageNumber}`;
    const categoryParam = `${category ? "&blogCategory=" + category : ""}`;

    const { data } = await axios.get<PageOf<Blog>>(
        `${baseUrl}/api/Blogs?${pageParam}${categoryParam}`,
        {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        }
    );

    return new PageOf<Blog>(data.total, data.items, data.pageSize);
};

export const fetchBlogsCategories = async (): Promise<string[]> => {
    const baseUrl = process.env.REACT_APP_API_URL;
    const { data } = await axios.get<string[]>(`${baseUrl}/api/Blogs/Categories`, {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    });

    return data;
};

export const fetchBlogById = async (id: string): Promise<Blog> => {
    const baseUrl = process.env.REACT_APP_API_URL;
    const { data } = await axios.get<Blog>(`${baseUrl}/api/Blogs/${id}`);

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
