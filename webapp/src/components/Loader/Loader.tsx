import { StyledLoader } from "./Loader.style";

interface Props {
    center?: boolean;
}
export const Loader = (props: Props) => {
    const { center = false } = props;

    return (
        <StyledLoader center={center}>
            <div />
        </StyledLoader>
    );
};
