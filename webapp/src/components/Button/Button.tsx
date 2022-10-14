import { AccentButton, PrimaryButton, DefaultButton, OutlinedButton } from "./Button.style";

interface Props {
    text: string;
    variant?: "primary" | "accent" | "outlined" | "default";
}
export const Button = (props: Props) => {
    const { text, variant = "primary" } = props;

    switch (variant) {
        case "accent":
            return <AccentButton>{text}</AccentButton>;
        case "primary":
            return <PrimaryButton>{text}</PrimaryButton>;
        case "outlined":
            return <OutlinedButton>{text}</OutlinedButton>;
        default:
            return <DefaultButton>{text}</DefaultButton>;
    }
};
