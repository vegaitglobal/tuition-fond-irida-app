import axios from "axios";
import { query as getPageReferencesQuery } from "./queries/getPageReferences";

interface GetPageReferencesResponse {
    data: {
        pageCollection: {
            items: { title: string; path: string }[];
        };
    };
}
export const getPageReferences = async (): Promise<any[]> => {
    const url = process.env.REACT_APP_CONTENTFUL_BASE_GRAPHQL_URL;
    if (!url) {
        return [];
    }

    const headers = {
        Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_DELIVERY_ACCESS_KEY}`,
    };
    const data = { query: getPageReferencesQuery };

    const response = await axios.post<GetPageReferencesResponse>(url, data, { headers });
    return response.data.data.pageCollection.items.map((p) => p.path);
};
