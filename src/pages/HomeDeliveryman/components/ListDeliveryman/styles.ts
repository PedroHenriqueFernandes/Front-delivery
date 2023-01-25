import styled from "styled-components";

export const ContainerListTasks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;

    @media (max-width: 768px){
        margin-top: 1rem;
    }
`;