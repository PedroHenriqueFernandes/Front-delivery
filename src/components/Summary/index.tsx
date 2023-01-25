import { HeaderContainer, HeaderCounter, HeaderTasksCreated, SumarryContainer, HeaderTasksFinished } from "./styles";

interface SummaryProps{
    tasksCreated: number;
    tasksFinished: number;
}

export function Summary({tasksCreated, tasksFinished}: SummaryProps){
    return(
        <SumarryContainer>
                <HeaderContainer>
                    <HeaderTasksCreated>Tarefas Criadas
                        <HeaderCounter>
                            <span>{tasksCreated}</span>
                        </HeaderCounter>
                    </HeaderTasksCreated>
                    <HeaderTasksFinished>Concluidas
                        <HeaderCounter>
                            <span>{tasksFinished}</span>
                        </HeaderCounter>
                    </HeaderTasksFinished>
                </HeaderContainer>
            </SumarryContainer>
    )
}