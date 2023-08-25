import {LinkVariant} from "./common";

export const query = `
    query {
      layoutCollection(limit: 1) {
        items {
          headerLinksCollection {
            items {
              background
              isButton
              label
              pageReference {
                path
              }
            }
          }
          contactInformationCollection {
            items {
              socialMediaIcon
              data
              label
              type
            }
          }
          appDescription {
            downloadAppText
            appStoreLink
            googlePlayStoreLink
            isShown
            subtitle
            title
          }
        }
      }
    }
`;

export interface GetLayoutResponse {
    data: {
        layoutCollection: {
            items: LayoutEntry[];
        };
    };
}

export interface LayoutEntry {
    headerLinksCollection: {
        items: PageLinkEntry[]
    },
    contactInformationCollection: {
        items: ContactInfoEntry[]
    },
    appDescription: AppDescriptionEntry
}

export interface AppDescriptionEntry {
    downloadAppText: string,
    appStoreLink: string,
    googlePlayStoreLink: string,
    isShown: boolean,
    subtitle: string,
    title: string
}

export interface ContactInfoEntry {
    socialMediaIcon: SocialMediaIconType | null,
    type: ContactInfoType,
    data: string,
    label: string
}

export type ContactInfoType = "Url" | "Email" | "Phone number";
export type SocialMediaIconType = "Facebook" | "Instagram" | "LinkedIn";

export interface PageLinkEntry {
    background: LinkVariant,
    isButton: boolean,
    label: string,
    pageReference: {
        path: string
    }
}
