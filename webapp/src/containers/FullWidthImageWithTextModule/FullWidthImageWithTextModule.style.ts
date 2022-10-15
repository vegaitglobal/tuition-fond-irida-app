import styled from "styled-components";

export const StyledFullWidthImageWithTextModule = styled.div`
    position: relative;
    padding: 90px 0 210px 178px;
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.26098) 35%,
        rgba(0, 0, 0, 0.065) 43%,
        rgba(255, 255, 255, 0) 50%
    );

    & img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        z-index: -1;
        filter: grayscale();
    }

    & h1 {
        color: ${(props) => props.theme.colors.white.main};
        font-weight: 600;
        font-size: 48px;
        max-width: 30%;
    }

    & p {
        color: ${(props) => props.theme.colors.white.main};
        font-weight: 400;
        font-size: 16px;
        max-width: 40%;
    }

    & .button-wrap {
        display: flex;
        gap: 10px;
    }
`;
