import {useEffect, useState} from "react";
import {Product} from "../../core/models/product";
import {fetchProducts} from "../../core/services";
import {Card} from "../../components/Card/Card";
import {StyledProductsSection} from "./ProductsSection.style";
import {PageOf} from "../../core/models/common/pageOf";
import {Pagination} from "../../components/Pagination/Pagination";
import {ProductDetailsDialog} from "components/ProductDetailsDialog/ProductDetailsDialog";


export const ProductsSection = () => {
    const [pageOfProducts, setPageOfProducts] = useState<PageOf<Product>>(
        new PageOf<Product>(0, [], 0)
    );
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(undefined);

    useEffect(() => {
        fetchProducts(currentPage).then((pageOfProducts: PageOf<Product>) => {
            setPageOfProducts(pageOfProducts);
        });
    }, [currentPage]);

    const handleOpenProductDetails = (product: Product) => {
        setSelectedProduct(product);
        setIsOpen(true);
    };

    const handleCloseProductDetails = () => {
        setIsOpen(false);
    };

    const handleClickPaginationButton = (newPageNumber: number) => {
        setCurrentPage(newPageNumber);
    };

    return (
        <div>
            {
                isOpen && <ProductDetailsDialog
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    onClose={handleCloseProductDetails}
                    product={selectedProduct}
                />
            }
            <StyledProductsSection>
                {pageOfProducts.items.map((product: Product, index: number) => (
                    <Card
                        key={index}
                        product={product}
                        onClick={handleOpenProductDetails}
                    />
                ))}
            </StyledProductsSection>
            <Pagination
                pageSize={pageOfProducts.pageSize}
                totalCountOfItems={pageOfProducts.total}
                handlePageNumberClick={handleClickPaginationButton}
                activePageNumber={currentPage}
            />
        </div>
    );
};
