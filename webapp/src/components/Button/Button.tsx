import {
    AccentButton,
    PrimaryButton,
    SecondaryButton,
    DefaultButton,
    OutlinedButton,
    LightButton,
} from "./Button.style";

interface Props {
    text: string;
    variant?: "primary" | "secondary" | "accent" | "outlined" | "light" | "default";
}
export const Button = (props: Props) => {
    const { text, variant = "secondary" } = props;

    switch (variant) {
        case "accent":
            return <AccentButton>{text}</AccentButton>;
        case "primary":
            return <PrimaryButton>{text}</PrimaryButton>;
        case "secondary":
            return <SecondaryButton>{text}</SecondaryButton>;
        case "outlined":
            return <OutlinedButton>{text}</OutlinedButton>;
        case "light":
            return <LightButton>{text}</LightButton>;
        default:
            return <DefaultButton>{text}</DefaultButton>;
    }
};
