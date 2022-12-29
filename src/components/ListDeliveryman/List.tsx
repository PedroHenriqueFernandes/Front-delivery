import { useState, ChangeEvent, useEffect } from 'react'
import { TaskDeliveryman } from '../TaskDeliveryman/Task'
import { v4 as uuidv4 } from 'uuid'
import img from '../../assets/Clipboard.svg'
import axios from 'axios'

import styles from './List.module.css'
import imgPlus from '../../assets/plus.svg'
import { NavTasksDeliveryman } from '../NavTasksDeliveryman'

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
    const [tasks, setTasks] = useState<Task[]>([])
    const [taskCheck, setTaskCheck] = useState(0)

    const token = localStorage.getItem('@tokenDeliveryman')

    axios.defaults.headers.common = { 'Authorization': `bearer ${token}` }

    useEffect(() => {
        axios.get('http://localhost:3000/delivery/available')
            .then(function (response) {
                const newTasks: Task[] = response.data.map((task: TaskBD) => {
                    return {
                        id: task.id,
                        content: task.item_name,
                        isCheck: false,
                        created_at: task.created_at
                    }
                })

                setTaskCheck(newTasks.filter(task => task.isCheck === true).length)

                setTasks(newTasks)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    function setCheck(id: string) {
        const newTasksWithNewCheck = tasks.map(task => {
            if (task.id === id) {
                task.isCheck = !task.isCheck
            }

            return task
        })

        setTasks(newTasksWithNewCheck)
        countTasksCheck(newTasksWithNewCheck)
    }

    function countTasksCheck(task: Task[]) {
        const counterTask = task.filter(task => {
            return task.isCheck === true
        })

        setTaskCheck(counterTask.length)
    }

    function deleteTask(taskToDelete: string) {
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.id != taskToDelete
        })
        setTasks(tasksWithoutDeletedOne);
        countTasksCheck(tasksWithoutDeletedOne)
    }

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
                        <div className={styles.tarefasConcluidas}>Concluidas <div className={styles.numberCount}><span>{taskCheck}</span></div></div>
                    </header>
                </div>

                <div className={styles.commentList}>
                    {(tasks.length >= 1) ? (
                        tasks.map(task => (
                            <TaskDeliveryman
                                id={task.id}
                                key={task.id}
                                created_at={task.created_at}
                                content={task.content}
                                isCheck={false}
                                deleteTask={deleteTask}
                                checkTask={setCheck}
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