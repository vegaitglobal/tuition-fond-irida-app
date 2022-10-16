import { StyledSplitTextModule } from "./SplitTextModule.style";

interface Props {
    textPosition: "left" | "right";
}
export const SplitTextModule = (props: Props) => {
    const { textPosition } = props;
    return <StyledSplitTextModule>split text {textPosition}</StyledSplitTextModule>;
};
