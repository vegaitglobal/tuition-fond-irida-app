import styled from "styled-components";

export const StyledProductDetailsDialog = styled.div`
     & .modal-wrap {
        display: flex;
     }

     & .product-details-img {
        width: 455px;
        overflow: hidden;
        border-radius: 25px;
        margin-right: 50px;
        height: 100%;
    }

    & .product-image {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    & .product-details-content {
        width: 100%;
        display: flex;
        flex-direction: column;  
        justify-content:space-between;

        & Button {
            align-self: flex-end
        }
    }

    & .product-details-title {
        text-align: center;
        margin-bottom: 30px;
        font-size: 24px;
        font-weight: 700;
        color: white;
        line-height: 29px;
    }

    & .product-detail-description {
        color: white;
        margin-bottom: 74px;
    }
`;
