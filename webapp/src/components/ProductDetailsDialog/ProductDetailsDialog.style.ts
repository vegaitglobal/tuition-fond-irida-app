import styled from "styled-components";

export const StyledProductDetailsDialog = styled.div`
    & .modal-wrap {
        display: flex;
        justify-content: space-between;
        gap: 50px;
    }

    & .product-details-img {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 455px;
        height: 520px;
        overflow: hidden;
        border-radius: 25px;
    }

    & .product-image {
        width: 455px;
        height: 520px;
        object-fit: cover;
        object-position: center;
    }

    & .product-details-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & Button {
            align-self: flex-end;
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

    & .donate-form-wrap {
        width: 100%;
    }
`;
