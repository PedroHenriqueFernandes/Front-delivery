import styled from "styled-components";

export const TaskContainer = styled.div`
    display: flex;
    background: var(--gray-500);
    flex-direction: row;
    color: var(--gray-100);
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    height: 4.5rem;
    padding: 0 1rem;
    border-radius: 8px;
    margin-bottom: 0.75rem;

    img{
        color: var(--gray-300);
        height: 1rem;
    }

    button{
        background: transparent;
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
    }
`;

export const TitleAndCheckContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const CircleCheck = styled.div`
    height: 1.5rem;
    width: 1.5rem;
    min-height: 1.5rem;
    min-width: 1.5rem;
    border: 2px solid var(--purple-700);
    background: var(--purple-700);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    :empty{
        border: 2px solid var(--blue-500);
        background: transparent;
    }

    :not(:empty) + p{
    text-decoration: line-through;
    }

    img{
        height: .6rem;
    }
`;

export const TimeAndDeleteButtonTaskContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    p{
        font-size: 0.75rem;
    }

    @media (max-width: 500px){
        p{
            width: 30px;
            font-size: 0.5rem;
        }

        img{
            width: 1rem;
            min-width: 1rem;
        }
    }
`;