import styled from "styled-components";

export const SumarryContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const HeaderContainer = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--gray-400);
    font-weight: bold;
    font-size: 0.875rem;
`;

export const HeaderTaskContainer = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
`;

export const HeaderTasksFinished = styled(HeaderTaskContainer)`
    color: var(--purple-500);
`;

export const HeaderTasksCreated = styled(HeaderTaskContainer)`
    color: var(--blue-500);
`;

export const HeaderCounter = styled.div`
    color: var(--white);
    background: var(--gray-400);
    padding: 2px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`;