import axios from "axios";
import {
    GetPageReferencesResponse,
    PageReferenceEntry,
    query as getPageReferencesQuery,
} from "./queries/getPageReferences";
import {
    generateQuery as generateGetModulesByPageIdQuery,
    GetModulesByPageIdResponse,
} from "./queries/getModulesByPageId";
import {GetLayoutResponse, LayoutEntry, query as getLayoutQuery} from "./queries/getLayout";

const url = process.env.REACT_APP_CONTENTFUL_BASE_GRAPHQL_URL;
const deliveryKey = process.env.REACT_APP_CONTENTFUL_DELIVERY_ACCESS_KEY;
const headers = {
    Authorization: `Bearer ${deliveryKey}`,
};

export const getPageReferences = async (): Promise<PageReferenceEntry[]> => {
    if (!url || !deliveryKey) {
        return [];
    }
    const data = { query: getPageReferencesQuery };

    const response = await axios.post<GetPageReferencesResponse>(url, data, { headers });
    return response.data.data.pageCollection.items;
};

export const getLayout = async (): Promise<LayoutEntry> => {
    if (!url || !deliveryKey) return Promise.reject();

    const data = { query: getLayoutQuery };

    const response = await axios.post<GetLayoutResponse>(url, data, { headers });
    return response.data.data.layoutCollection.items[0];
}

export const getModulesByPageId = async (pageId: string) => {
    if (!url || !deliveryKey) {
        return [];
    }
    const data = { query: generateGetModulesByPageIdQuery(pageId) };

    const response = await axios.post<GetModulesByPageIdResponse>(url, data, { headers });
    return response.data.data.page.modulesCollection.items;
};
