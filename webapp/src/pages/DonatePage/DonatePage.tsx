import { useEffect, useState } from "react";
import { Product } from "../../core/models/product";
import { fetchProducts } from "../../core/services";
import { Card } from "../../components/Card/Card";
import { StyledDonatePage } from "./DonatePage.style";
import { PageOf } from "../../core/models/common/pageOf";
import { Pagination } from "../../components/Pagination/Pagination";

export const DonatePage = () => {
    const [pageOfProducts, setPageOfProducts] = useState<PageOf<Product>>(
        new PageOf<Product>(0, [], 0)
    );
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        fetchProducts(currentPage).then((pageOfProducts: PageOf<Product>) => {
            setPageOfProducts(pageOfProducts);
        });
    }, [currentPage]);

    const handleClickCard = () => {};

    const handleClickPaginationButton = (newPageNumber: number) => {
        setCurrentPage(newPageNumber);
    };

    return (
        <div>
            <StyledDonatePage>
                {pageOfProducts.items.map((product: Product, index: number) => (
                    <Card
                        key={index}
                        imageUrl={product.image.file.url}
                        imageAltTitle={product.image.title}
                        onClick={handleClickCard}
                    />
                ))}
            </StyledDonatePage>
            <Pagination
                pageSize={pageOfProducts.pageSize}
                totalCountOfItems={pageOfProducts.total}
                handlePageNumberClick={handleClickPaginationButton}
                activePageNumber={currentPage}
            />
        </div>
    );
};
