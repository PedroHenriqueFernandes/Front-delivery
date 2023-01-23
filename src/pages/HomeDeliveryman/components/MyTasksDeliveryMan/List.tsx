import { useState, useContext } from 'react'
import img from '../../../../assets/Clipboard.svg'
import axios from 'axios'

import styles from './List.module.css'
import { NavTasksDeliveryman } from '../NavTasksDeliveryman'
import { TaskAssignedDeliveryMan } from '../TaskAssignedDeliveryMan/Task'
import { TasksContext } from '../../../../context/TasksContext'
import { Header } from '../../../../components/Header'

interface Task {
    id: string,
    content: string,
    isCheck: boolean
    created_at: string
}

interface TaskBD {
    id: string,
    item_name: string,
    created_at: string,
    end_at: string | null,
}

export function ListMyTasksDeliveryMan() {
    const { tasksAssigned, tasksCheck, idDeliveryman } = useContext(TasksContext)

    function deleteTask(id: string) {
        axios.delete(`http://localhost:3000/delivery/delete/${id}`)
    }

    function setCheck(id: string) {
        axios.put(`http://localhost:3000/delivery/check/${id}`)
    }

    return (
        <div>
            <Header />
            <div className={styles.contentList}>
                <NavTasksDeliveryman />
                <div className={styles.boxList}>
                    <header className={styles.headerList}>
                        <div className={styles.tarefasCriadas}>Tarefas aceitas <div className={styles.numberCount}><span>{tasksAssigned.length}</span></div></div>
                        <div className={styles.tarefasConcluidas}>Concluidas <div className={styles.numberCount}><span>{tasksCheck}</span></div></div>
                    </header>
                </div>

                <div className={styles.commentList}>
                    {(tasksAssigned.length >= 1) ? (
                        tasksAssigned.map(task => (
                            <TaskAssignedDeliveryMan
                                id={task.id}
                                key={task.id}
                                created_at={task.created_at}
                                content={task.item_name}
                                isCheck={task.isCheck}
                                deleteTask={deleteTask}
                                checkTask={setCheck}
                                idDeliveryman={idDeliveryman}
                            />
                        )
                        )) : (
                        <div className={styles.noTask}>
                            <img src={img} alt="" />
                            <div>
                                <p className={styles.bold}>Você ainda não tem tarefas cadastradas</p>
                                <p className={styles.normal}>Crie tarefas e organize seus itens a fazer</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}