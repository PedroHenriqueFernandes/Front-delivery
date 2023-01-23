import styled from "styled-components";

export const Container = styled.div`
    form{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -1.6875rem;
        gap: .5rem;
    }

    form input{
        background: var(--gray-500);
        width: 40rem;
        height: 3.375rem;
        border: 0;
        border-radius: 8px;
        padding-left: 1rem;
        color: var(--gray-300);

        @media (max-width: 500px){
            width: 16rem;
        }
    }

    form button{
        background: var(--blue-500);
        border-radius: 8px;
        
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .5rem;
        
        
        height: 3.375rem;
        width: 5.625rem;
        
        color: var(--white);
        font-weight: bold;

        cursor: pointer
    }

    form button:disabled{
        opacity: 0.7;
        cursor: not-allowed;
        
    }
`;
