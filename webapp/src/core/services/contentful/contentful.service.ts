import axios from "axios";
import { query as getPageReferencesQuery } from "./queries/getPageReferences";
import { Page } from "../../models/page";

interface GetPageReferencesResponse {
    data: {
        pageCollection: {
            items: { title: string; path: string }[];
        };
    };
}

export const getPageReferences = async (): Promise<Page[]> => {
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
    return response.data.data.pageCollection.items.map((p) => ({
        path: p.path,
        title: p.title,
    }));
};
