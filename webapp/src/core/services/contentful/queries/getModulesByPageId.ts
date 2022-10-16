export const generateQuery = (pageId: string) => {
    return `
        fragment ModuleFragment on Module {
          header
          paragraph
          backgroundColor
          layout
          backgroundImage {
            url
          }
          primaryAction {
            __typename
            ...on PageLink {
              label
              pageReference {
                path
              }
            }
            ... on ExternalLink {
              label
              url
            }
          }
          secondaryAction {
            __typename
            ...on PageLink {
              label
              pageReference {
                path
              }
            }
            ... on ExternalLink {
              label
              url
            }
          }
        }
        
        fragment BlogFragment on BlogModule {
          title
          itemsPerPage
        } 
        
        fragment ProductsFragment on ProductsModule {
          title
          itemsPerPage
        }
        
        
        # Main Query
        {
          page(id: "${pageId}") {
            modulesCollection {
              items {
                __typename
                ... ModuleFragment
                ... BlogFragment
                ... ProductsFragment
              }
            }
          }
        }
    `;
};

export interface GetModulesByPageIdResponse {
    data: {
        page: {
            modulesCollection: {
                items: ContentModule[];
            };
        };
    };
}

export enum ModuleType {
    Content = "Module",
    Blogs = "BlogsModule",
    Products = "ProductsModule",
}

export interface Module {
    __typename: ModuleType;
}

export interface ContentModule extends Module {
    __typename: ModuleType.Content;
    header: string;
    paragraph?: string;
    backgroundColor: "primary" | "secondary" | "accent";
    backgroundImage?: { url: string };
    layout: "split-text-left" | "split-text-right" | "centered" | "left" | "right";
    primaryAction: Action | null;
    secondaryAction: Action | null;
}

export interface ProductsModule extends Module {
    __typename: ModuleType.Products;
    itemsPerPage: number;
}

export interface BlogsModule extends Module {
    __typename: ModuleType.Blogs;
    itemsPerPage: number;
}

interface Action {
    label: string;
    pageReference?: {
        path: string;
    };
}
