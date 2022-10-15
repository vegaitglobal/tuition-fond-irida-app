import { useEffect, useState } from "react";
import { Product } from "../../core/models/product";
import { fetchProducts } from "../../core/services";
import { Card } from "../../components/Card/Card";
import { StyledDonatePage } from "./DonatePage.style";

export const DonatePage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetchProducts().then((p: Product[]) => setProducts(p));
    }, []);

    const handleClickCard = () => {
    };

    return (
        <StyledDonatePage>
            {
                products.map((product: Product) =>
                    <Card imageUrl={product.image.file.url}
                          imageAltTitle={product.image.title}
                          onClick={handleClickCard} />)
            }
        </StyledDonatePage>
    );
};
