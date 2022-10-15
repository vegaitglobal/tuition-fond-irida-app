import axios from "axios";
import { Product } from "../models/product";

export const fetchProducts = async (): Promise<Product[]> => {
    const baseUrl = process.env.REACT_APP_API_URL;
    const response = await axios.get<Product[]>(`${baseUrl}/api/Product`);
    return response.data;
};
