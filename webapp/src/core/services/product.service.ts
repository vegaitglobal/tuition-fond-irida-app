import axios from "axios";
import { Product } from "../models/product";

export const fetchProducts = async (): Promise<Product[]> => {
    const response = await axios.get<Product[]>("https://localhost:7042/api/Product");
    return response.data;
};
