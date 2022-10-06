interface Theme {
    colors: {
        primary: {
            main: string;
        };
        accent: {
            main: string;
        };
        foreground: {
            main: string;
        };
    };
}

const theme: Theme = {
    colors: {
        primary: {
            main: "#5F4477",
        },
        accent: {
            main: "#B33422",
        },
        foreground: {
            main: "#FFFFFF",
        },
    },
};

export default theme;
