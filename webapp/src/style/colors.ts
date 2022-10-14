interface Color {
    main: string;
    light?: string;
    dark?: string;
}

export interface Colors {
    primary: Color;
    accent: Color;
    foreground: Color;
    white: Color;
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
    foreground: {
        main: "#FFFFFF",
    },
    white: {
        main: "#FFFFFF",
        dark: "#f3f0f6",
    },
};
