import axios from "axios";
import {
    GetPageReferencesResponse,
    PageEntry,
    query as getPageReferencesQuery,
} from "./queries/getPageReferences";

export const getPageReferences = async (): Promise<PageEntry[]> => {
    const url = process.env.REACT_APP_CONTENTFUL_BASE_GRAPHQL_URL;
    const deliveryKey = process.env.REACT_APP_CONTENTFUL_DELIVERY_ACCESS_KEY;
    if (!url || !deliveryKey) {
        return [];
    }

    const headers = {
        Authorization: `Bearer ${deliveryKey}`,
    };
    const data = { query: getPageReferencesQuery };

    const response = await axios.post<GetPageReferencesResponse>(url, data, { headers });
    return response.data.data.pageCollection.items;
};
