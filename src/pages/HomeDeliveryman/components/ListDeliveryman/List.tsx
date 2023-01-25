import { useContext } from 'react'
import { TaskDeliveryman } from '../TaskDeliveryman/Task'

import { NavTasksDeliveryman } from '../NavTasksDeliveryman'
import { TasksContext } from '../../../../context/TasksContext'
import { ContainerListTasks } from './styles'
import { Summary } from '../../../../components/Summary'
import { TasksIsEmptyContainer } from '../../../../components/TasksIsEmpty/styles'

export function List() {
    const { tasks, tasksCheck, idDeliveryman } = useContext(TasksContext)

    return (
        <ContainerListTasks>
            <NavTasksDeliveryman />
            <Summary tasksCreated={tasks.length} tasksFinished={tasksCheck} />

            <div>
                {(tasks.length >= 1) ? (
                    tasks.map(task => (
                        <TaskDeliveryman
                            id={task.id}
                            key={task.id}
                            created_at={task.created_at}
                            content={task.item_name}
                            isCheck={false}
                            idDeliveryman={idDeliveryman}
                        />
                    )
                    )) : (
                     <TasksIsEmptyContainer />
                )}
            </div>
        </ContainerListTasks>
    )
}