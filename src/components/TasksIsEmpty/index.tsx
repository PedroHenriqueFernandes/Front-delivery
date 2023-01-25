import img from '../../assets/Clipboard.svg'

import { TasksIsEmptyContainer } from './styles'

export function TasksIsEmpty() {
    return (
        <TasksIsEmptyContainer>
            <img src={img} alt="" />
            <div>
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Aguarde seu gestor criar novas tarefas</p>
            </div>
        </TasksIsEmptyContainer>
    )
}