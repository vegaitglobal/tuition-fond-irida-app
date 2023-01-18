import { StyledCard } from "./Card.style";
import { Button } from "../Button/Button";
import { Product } from "core/models/product";

interface Props {
    product: Product;
    onClick: (product: Product) => void;
}

export const Card = (props: Props) => {
    const { product, onClick } = props;

    return (
        <StyledCard style={{ backgroundImage: `url('${product.image.file.url}'` }}>
            <img src={product.image.file.url} alt={product.image.title} />
            <Button text="Poruči i doniraj" onClick={() => onClick(product)} />
        </StyledCard>
    );
};
