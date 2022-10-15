import styled from "styled-components";

export const StyledCard = styled.div`
    width: 300px;
    height: 300px;
    margin: 20px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    overflow: hidden;
    animation: 100ms ease appear forwards;

    @keyframes appear {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    & img {
        position: absolute;
        top: 0;
        left: 0;
        width: 300px;
        height: 300px;
        object-fit: cover;
    }

    & button {
        margin-bottom: 20px;
        z-index: 100;
    }
`;
