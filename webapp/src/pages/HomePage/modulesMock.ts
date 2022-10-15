export type ModuleType = "fullWidthImageText" | "textWithCta" | "dummy";

export interface Module {
    type: ModuleType;
    title: string;
    description: string;
    image?: string;
    buttons?: {
        text: string;
        url: string;
    }[];
}

export const modulesMock: Module[] = [
    {
        type: "fullWidthImageText",
        title: "Lorem ipsum dolor sit amet",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu odio vel nunc fringilla euismod eget non eros. Morbi convallis auctor lectus eu facilisis. Aenean vitae lectus mollis, finibus arcu vel, aliquam est. Etiam gravida lectus quis vestibulum aliquam. Sed nec quam eget eros eleifend vehicula. ",
        image: "https://www.girlscouts.org/content/dam/girlscouts-gsusa/images/content-hub/raising-girls/girl-riding-a-bike.jpg",
        buttons: [
            {
                text: "O nama",
                url: "/o-nama",
            },
            {
                text: "Istrazi",
                url: "/blog",
            },
        ],
    },
    {
        type: "textWithCta",
        title: "Lorem ipsum dolor sit amet",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu odio vel nunc fringilla euismod eget non eros. Morbi convallis auctor lectus eu facilisis. Aenean vitae lectus mollis, finibus arcu vel, aliquam est. Etiam gravida lectus quis vestibulum aliquam. Sed nec quam eget eros eleifend vehicula. ",
        image: "https://www.girlscouts.org/content/dam/girlscouts-gsusa/images/content-hub/raising-girls/girl-riding-a-bike.jpg",
        buttons: [
            {
                text: "O nama",
                url: "/o-nama",
            },
            {
                text: "Istrazi",
                url: "/blog",
            },
        ],
    },
];
