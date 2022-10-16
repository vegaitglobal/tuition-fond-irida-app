import axios from "axios";
import { User } from "core/models/user";

export const sendContactUsEmailAsync = async (data: User): Promise<number> => {
    const baseUrl = process.env.REACT_APP_API_URL;
    const response = await axios.post<User>(`${baseUrl}/api/Email/contact-us`, data);
    return response.status;
};

export const sendOrderEmailAsync = async (data: User): Promise<number> => {
    const baseUrl = process.env.REACT_APP_API_URL;
    const response = await axios.post<User>(`${baseUrl}/api/Email/order`, data);
    return response.status;
};
