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
              background
              pageReference {
                path
              }
            }
            ... on ExternalLink {
              label
              url
            }
            ... on Modal {
              label
              form
            }
          }
          secondaryAction {
            __typename
            ...on PageLink {
              label
              background
              pageReference {
                path
              }
            }
            ... on ExternalLink {
              label
              url
            }
            ... on Modal {
              label
              form
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
    Blogs = "BlogModule",
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
    layout: "split-text-left" | "split-text-right" | "centered" | "left" | "right" | "contact-us";
    primaryAction: Action | PageLink | ExternalLink | Modal | null;
    secondaryAction: Action | PageLink | ExternalLink | Modal | null;
}

export interface ProductsModule extends Module {
    __typename: ModuleType.Products;
    itemsPerPage: number;
}

export interface BlogsModule extends Module {
    __typename: ModuleType.Blogs;
    itemsPerPage: number;
}

export enum ActionType {
    ExternalLink = "ExternalLink",
    PageLink = "PageLink",
    Modal = "Modal",
}

export enum FormType {
    Contact = "contact",
    Donate = "donate",
    PaymentSlip = "payment-slip",
    Quiz = "quiz",
}

export interface Action {
    label: string;
    __typename: ActionType;
}

export interface ExternalLink extends Action {
    __typename: ActionType.ExternalLink;
    url: string;
}

export interface PageLink extends Action {
    __typename: ActionType.PageLink;
    background: "accent" | "light" | "outline" | "primary" | "secondary";
    pageReference?: {
        path: string;
    };
}

export interface Modal extends Action {
    __typename: ActionType.Modal;
    form: FormType;
}
