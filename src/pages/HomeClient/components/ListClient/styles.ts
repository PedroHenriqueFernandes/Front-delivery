import styled from "styled-components";

export const Container = styled.div`
   display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const FormContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -1.6875rem;
    gap: .5rem;

    input{
        background: var(--gray-500);
        width: 40rem;
        height: 3.375rem;
        border: 0;
        border-radius: 8px;
        padding-left: 1rem;
        color: var(--gray-300);
    }

    button{
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

    button:disabled{
        opacity: 0.7;
    }

    @media (max-width: 500px){
        input{
        width: 65vw;
        }
    }
`;

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;

    
    @media (max-width: 500px){
        margin-top: 2rem;
    }
`;

export const SummaryList = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const HeaderSummary = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--gray-400);
    font-weight: bold;
    font-size: 0.875rem;
`;

export const SummaryTasks = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
`;

export const CompletedTasks = styled(SummaryTasks)`
    color: var(--purple-500);
`;

export const TasksCreated = styled(SummaryTasks)`
    color: var(--blue-500);
`;

export const NumberTasks = styled.div`
    color: var(--white);
    background: var(--gray-400);
    padding: 2px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`;