import { useState, useContext } from 'react'
import axios from 'axios'

import styles from './List.module.css'
import { NavTasksDeliveryman } from '../NavTasksDeliveryman'
import { TaskAssignedDeliveryMan } from '../TaskAssignedDeliveryMan/Task'
import { TasksContext } from '../../../../context/TasksContext'
import { Header } from '../../../../components/Header'
import { TasksIsEmpty } from '../../../../components/TasksIsEmpty'
import { Summary } from '../../../../components/Summary'
import { ContainerListTasks } from './styles'

export function ListMyTasksDeliveryMan() {
    const { tasksAssigned, tasksCheck, idDeliveryman } = useContext(TasksContext)

    function deleteTask(id: string) {
        axios.delete(`http://localhost:3000/delivery/delete/${id}`)
    }

    return (
        <div>
            <Header />
            <ContainerListTasks>
                <NavTasksDeliveryman />
                <Summary tasksCreated={tasksAssigned.length} tasksFinished={tasksCheck} />

                <div>
                    {(tasksAssigned.length >= 1) ? (
                        tasksAssigned.map(task => (
                            <TaskAssignedDeliveryMan
                                id={task.id}
                                key={task.id}
                                created_at={task.created_at}
                                content={task.item_name}
                                isCheck={task.isCheck}
                                deleteTask={deleteTask}
                                idDeliveryman={idDeliveryman}
                                end_at={task.end_at}
                            />
                        )
                        )) : (
                        <TasksIsEmpty />
                    )}
                </div>
            </ContainerListTasks>
        </div>
    )
}