export const generateQuery = (pageId: string) => {
    return `
    {
      page(id: "31vbgOAonNm41hhsSxaveH") {
        modulesCollection {
          items {
            header
            paragraph
            backgroundColor
            layout
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
        }
      }
    }
    `;
};

export interface GetModulesByPageIdResponse {
    data: {
        page: {
            modulesCollection: {
                items: ModuleEntry[];
            };
        };
    };
}

export interface ModuleEntry {
    header: string;
    paragraph?: string;
    backgroundColor: "primary" | "secondary" | "accent";
    layout: "split-text-left" | "split-text-right" | "centered" | "left" | "right";
    primaryAction: Action | null;
    secondaryAction: Action | null;
}

interface Action {
    label: string;
    pageReference: {
        path: string;
    };
}
