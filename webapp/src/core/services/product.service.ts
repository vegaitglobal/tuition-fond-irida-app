import axios from "axios";
import { Product } from "../models/product";
import { PageOf } from "../models/common/pageOf";

export const fetchProducts = async (pageNumber: number): Promise<PageOf<Product>> => {
    const baseUrl = process.env.REACT_APP_API_URL;
    const response = await axios.get<PageOf<Product>>(
        `${baseUrl}/api/Product?pageNumber=${pageNumber}`
    );
    return new PageOf<Product>(response.data.total, response.data.items, response.data.pageSize);
};
