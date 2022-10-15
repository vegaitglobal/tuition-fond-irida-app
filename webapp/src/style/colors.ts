interface Color {
    main: string;
    light?: string;
    dark?: string;
}

export interface Colors {
    primary: Color;
    accent: Color;
    white: Color;
    black: Color;
}

export const colors: Colors = {
    primary: {
        main: "#5F4477",
        light: "#8462a2",
    },
    accent: {
        main: "#B8331D",
        light: "#d04129",
    },
    white: {
        main: "#FFFFFF",
        dark: "#dcd0ea",
    },
    black: {
        main: "#01050A",
    },
};
