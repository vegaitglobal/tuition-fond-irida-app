import styled from "styled-components";

export const StyledFullWidthImageWithTextModule = styled.div`
    position: relative;
    padding: 90px 0 210px 178px;
    background: linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.7) 0%,
        rgba(0, 0, 0, 0.3) 35%,
        rgba(0, 0, 0, 0.1) 43%,
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
        margin-bottom: 60px;
        line-height: 110%;
    }

    & p {
        color: ${(props) => props.theme.colors.white.main};
        font-weight: 400;
        font-size: 16px;
        max-width: 40%;
        margin-bottom: 90px;
        line-height: 17.6px;
    }

    & .button-wrap {
        display: flex;
        gap: 20px;
    }

    @media ${(props) => props.theme.breakpoints.tablet} {
        height: calc(100vh - 85px);
        width: 100%;
        padding: 60px 40px 50px 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 60px;
        background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.3) 35%,
            rgba(0, 0, 0, 0.1) 86%,
            rgba(255, 255, 255, 0) 100%
        );

        & h1 {
            width: 80%;
            max-width: 80%;
            margin: 0;
            font-size: 40px;
        }

        & p {
            width: 80%;
            max-width: 80%;
            margin: 0;
            text-align: center;
        }

        & .button-wrap {
            flex-direction: column;
        }
    }
`;
