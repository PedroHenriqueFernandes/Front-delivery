import { useContext } from 'react'
import { TaskDeliveryman } from '../TaskDeliveryman/Task'
import img from '../../../../assets/Clipboard.svg'

import styles from './List.module.css'
import { NavTasksDeliveryman } from '../NavTasksDeliveryman'
import { TasksContext } from '../../../../context/TasksContext'

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

export function List() {
    const { tasks, tasksCheck } = useContext(TasksContext)



    return (
        <div>
            {/* <form onSubmit={handleCreateTasks} className={styles.createTask}>
                <input onChange={handleNewCommentChange} value={newTask} type="text" placeholder='Adicione uma nova tarefa' />
                <button disabled={isEmpty} type='submit'>Criar <img src={imgPlus} alt="icon plus" /></button>
            </form> */}

            <div className={styles.contentList}>
                <NavTasksDeliveryman />
                <div className={styles.boxList}>
                    <header className={styles.headerList}>
                        <div className={styles.tarefasCriadas}>Tarefas Criadas <div className={styles.numberCount}><span>{tasks.length}</span></div></div>
                        <div className={styles.tarefasConcluidas}>Concluidas <div className={styles.numberCount}><span>{tasksCheck}</span></div></div>
                    </header>
                </div>

                <div className={styles.commentList}>
                    {(tasks.length >= 1) ? (
                        tasks.map(task => (
                            <TaskDeliveryman
                                id={task.id}
                                key={task.id}
                                created_at={task.created_at}
                                content={task.item_name}
                                isCheck={false}
                            />
                        )
                        )) : (
                        <div className={styles.noTask}>
                            <img src={img} alt="" />
                            <div>
                                <p className={styles.bold}>Você ainda não tem tarefas cadastradas</p>
                                <p className={styles.normal}>Aguarde seu gestor criar novas tarefas</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}