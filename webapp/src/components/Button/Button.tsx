import {
    AccentButton,
    PrimaryButton,
    DefaultButton,
    OutlinedButton,
    LightButton,
} from "./Button.style";

interface Props {
    text: string;
    variant?: "primary" | "accent" | "outlined" | "light" | "default";
    onClick: () => void;
}
export const Button = (props: Props) => {
    const { text, variant = "primary", onClick } = props;

    switch (variant) {
        case "accent":
            return <AccentButton onClick={onClick}>{text}</AccentButton>;
        case "primary":
            return <PrimaryButton onClick={onClick}>{text}</PrimaryButton>;
        case "outlined":
            return <OutlinedButton onClick={onClick}>{text}</OutlinedButton>;
        case "light":
            return <LightButton onClick={onClick}>{text}</LightButton>;
        default:
            return <DefaultButton onClick={onClick}>{text}</DefaultButton>;
    }
};
