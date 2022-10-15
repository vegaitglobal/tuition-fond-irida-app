import { BaseEntry } from "./common";

export const query = `
    query {
      pageCollection {
        items{
          sys {
            id
          }
          title
          path
        }
      }
    }
`;

export interface GetPageReferencesResponse {
    data: {
        pageCollection: {
            items: PageReferenceEntry[];
        };
    };
}

export interface PageReferenceEntry extends BaseEntry {
    title: string;
    path: string;
}
