export const query = `
    query {
      pageCollection {
        items{
          title
          path
          modulesCollection {
            items {
              header
              paragraph
              backgroundColor
              layout
            }
          }
        }
      }
    }
`;

export interface GetPageReferencesResponse {
    data: {
        pageCollection: {
            items: PageEntry[];
        };
    };
}

export interface PageEntry {
    title: string;
    path: string;
    modulesCollection: { items: ModuleEntry[] };
}

export interface ModuleEntry {
    header: string;
    paragraph?: string;
    backgroundColor: "primary" | "secondary" | "accent";
    layout: "split-text-left" | "split-text-right" | "centered" | "left" | "right";
}
