import { useState, ChangeEvent, useEffect } from 'react'
import { TaskClient } from '../TaskClient/Task' 
import { v4 as uuidv4 } from 'uuid'
import img from '../../assets/Clipboard.svg'
import axios from 'axios'

import styles from './List.module.css'
import imgPlus from '../../assets/plus.svg'

interface Task {
    id: string,
    content: string,
    isCheck: boolean
    created_at: string
}

interface DeliveriesTaskBD{
    id: string,
    item_name: string,
    id_client: string,
    id_deliveryman: string | null,
    created_at: string,
    end_at: string | null,
}

interface TaskBD{
    id: string,
    username: string,
    deliveries: DeliveriesTaskBD[]
}

export function List() {
    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState<Task[]>([])
    const [isEmpty, setIsEmpty] = useState(true)
    const [taskCheck, setTaskCheck] = useState(0)

    const tokenClient = localStorage.getItem('@tokenClient')

    axios.defaults.headers.common = {'Authorization': `bearer ${tokenClient}`}

    useEffect(() => {
        axios.get('http://localhost:3000/client/deliveries')
        .then(function (response) {
            const newTasks = response.data[0].deliveries.map((task: DeliveriesTaskBD) => {
                return {
                    id: task.id,
                    content: task.item_name,
                    isCheck: task.end_at ? true : false,
                    created_at: task.created_at
                }
            })

            console.log(newTasks)
    
            setTasks(newTasks)
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])

    function handleCreateTasks(event: ChangeEvent<HTMLFormElement>) {
        event!.preventDefault()

        setIsEmpty(true)
        setTasks([...tasks, {
            id: uuidv4(),
            content: newTask,
            isCheck: false,
            created_at: new Date().toLocaleDateString()
        }])
        setNewTask('')
    }

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

    function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value)
        if (event.target.value !== '') {
            setIsEmpty(false)
        } else if (event.target.value === '') setIsEmpty(true)
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
            <form onSubmit={handleCreateTasks} className={styles.createTask}>
                <input onChange={handleNewCommentChange} value={newTask} type="text" placeholder='Adicione uma nova tarefa' />
                <button disabled={isEmpty} type='submit'>Criar <img src={imgPlus} alt="icon plus" /></button>
            </form>

            <div className={styles.contentList}>
                <div className={styles.boxList}>
                    <header className={styles.headerList}>
                        <div className={styles.tarefasCriadas}>Tarefas Criadas <div className={styles.numberCount}><span>{tasks.length}</span></div></div>
                        <div className={styles.tarefasConcluidas}>Concluidas <div className={styles.numberCount}><span>{taskCheck}</span></div></div>
                    </header>
                </div>

                <div className={styles.commentList}>
                    {(tasks.length >= 1) ? (
                        tasks.map(task => (
                            <TaskClient
                                id={task.id}
                                key={task.id}
                                content={task.content}
                                isCheck={task.isCheck}
                                deleteTask={deleteTask}
                                checkTask={setCheck}
                                created_at={task.created_at}
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