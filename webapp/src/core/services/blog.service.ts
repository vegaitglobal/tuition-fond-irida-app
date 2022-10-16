import axios from "axios";
import { Blog } from "../models/blog";
import { PageOf } from "../models/common/pageOf";

export const fetchBlogs = async (pageNumber: number): Promise<PageOf<Blog>> => {
    const baseUrl = process.env.REACT_APP_API_URL;
    const tempResponse = await axios.get<Blog[]>(`${baseUrl}/api/Blog?pageNumber=${pageNumber}`);

    return new PageOf<Blog>(20, tempResponse.data, 8);
    //
    // const response = await axios.get<PageOf<Blog>>(`${baseUrl}/api/Blog?pageNumber=${pageNumber}`);
    // return new PageOf<Blog>(response.data.total, response.data.items, response.data.pageSize);
};
