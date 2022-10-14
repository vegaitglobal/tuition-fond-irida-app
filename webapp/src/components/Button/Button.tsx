import { AccentButton, PrimaryButton, DefaultButton } from "./Button.style";

interface Props {
    text: string;
    variant?: "primary" | "accent" | "default";
}
export const Button = (props: Props) => {
    const { text, variant = "primary" } = props;

    switch (variant) {
        case "accent":
            return <AccentButton>{text}</AccentButton>;
        case "primary":
            return <PrimaryButton>{text}</PrimaryButton>;
        default:
            return <DefaultButton>{text}</DefaultButton>;
    }
};
