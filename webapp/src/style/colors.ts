interface Color {
    main: string;
}

export interface Colors {
    primary: Color;
    accent: Color;
    foreground: Color;
}

export const colors: Colors = {
    primary: {
        main: "#5F4477",
    },
    accent: {
        main: "#B33422",
    },
    foreground: {
        main: "#FFFFFF",
    },
};
