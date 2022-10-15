import { StyledCard } from "./Card.style";
import { Button } from "../Button/Button";

interface Props {
    imageUrl: string;
    imageAltTitle: string;
    onClick: () => void;
}

export const Card = (props: Props) => {
    const { imageUrl, imageAltTitle, onClick } = props;

    return (
        <StyledCard style={{ backgroundImage: `url('${imageUrl}'` }}>
            <img src={imageUrl} alt={imageAltTitle} />
            <Button text="Poruči i doniraj" />
        </StyledCard>
    );
};
