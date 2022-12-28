import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme["gray-700"]};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme["gray-600"]};
    padding: 20px;
    border-radius: 10px;
    width: 30vw;
    gap: 20px;
`;

export const Title = styled.h1`
    color: ${props => props.theme["gray-100"]};
    font-size: 30px;
`;