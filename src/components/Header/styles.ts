import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    background: var(--gray-700);
    align-items: center;
    justify-content: center;

    img{
        padding: 5rem 0;
    }

    @media (max-width: 500px){
        img{
            padding: 2rem 0;
        }
    }
`;

