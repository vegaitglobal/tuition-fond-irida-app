import axios from "axios";
import { User } from "core/models/user";

export const sendContactUsEmailAsync = async (data: User): Promise<number> => {
    const baseUrl = process.env.REACT_APP_API_URL;
    const response = await axios.post<User>(`${baseUrl}/api/Emails/contact-us`, data);
    return response.status;
};

export const sendOrderEmailAsync = async (data: User): Promise<number> => {
    const baseUrl = process.env.REACT_APP_API_URL;
    const response = await axios.post<User>(`${baseUrl}/api/Emails/order`, data);
    return response.status;
};
