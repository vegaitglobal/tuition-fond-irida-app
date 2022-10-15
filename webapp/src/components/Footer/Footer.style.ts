import styled from "styled-components";

export const StyledFooter = styled.footer`
    padding: 90px 178px;
    background-color: ${(props) => props.theme.colors.primary.main};
    color: ${(props) => props.theme.colors.white.main};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 110px;

    & .footer-section-list {
        display: flex;
        gap: 10px;
    }
`;

export const StyledFooterSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-width: 100px;
    & h2 {
        font-size: 22px;
    }

    & .footer-links {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        & a {
            display: block;
            color: ${(props) => props.theme.colors.white.main};
            text-decoration: none;
            font-weight: 400;
            font-size: 16px;
            line-height: 33px;

            &:hover {
                color: ${(props) => props.theme.colors.white.dark};
            }
        }
    }
`;

export const StyledFooterAppDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    & .footer-app-description-upper {
        display: flex;
        gap: 50px;

        & img {
            margin: 25px 0 0 0;
            height: 74px;
            width: 74px;
        }
    }

    & .footer-download-section {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        padding: 0;

        & .download-mobile-app-button {
            background-color: transparent;
            padding: 0;
            border: none;
            cursor: pointer;
        }
    }
`;

export const StyledFooterContactSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    & .footer-contact-section-socials {
        display: flex;
        gap: 32px;
        justify-content: center;
    }

    & .footer-contact-section-info {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 20px;

        & a {
            color: ${(props) => props.theme.colors.white.main};
            text-decoration: none;
            opacity: 1;
            transition: 200ms ease;
            transition-property: opacity;
        }
        & a:hover {
            opacity: 0.6;
        }
    }
`;
