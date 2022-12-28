import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    padding: 10px;
    font-size: 16px;
    background-color: ${props => props.theme["gray-500"]};
    color: ${props => props.theme["gray-300"]};
`;

export const Button = styled.button`
    margin-top: 10px;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: none;
    padding: 10px;
    font-size: 16px;
    background-color: ${props => props.theme["blue-500"]};
    color: ${props => props.theme["gray-100"]};
    cursor: pointer;
`;