import { useState, ChangeEvent, useContext } from 'react'
import { TaskClient } from '../TaskClient/Task'
import { v4 as uuidv4 } from 'uuid'
import img from '../../../../assets/Clipboard.svg'
import axios from 'axios'

import imgPlus from '../../../../assets/plus.svg'
import { CompletedTasks, Container, FormContainer, HeaderSummary, ListContainer, NumberTasks, SummaryList, TasksCreated, TasksIsEmpty } from './styles'
import { TasksContext } from '../../../../context/TasksContext'
import { TaskProps } from '../../../../reducer/reducer'

interface Task {
    id: string,
    content: string,
    isCheck: boolean
    created_at: string
}

export function List() {
    const { tasksClient, idClient, setTasks, setTasksCheck, tasksCheck } = useContext(TasksContext)
    const [newTask, setNewTask] = useState('')
    const [isEmpty, setIsEmpty] = useState(true)


    function handleCreateTasks(event: ChangeEvent<HTMLFormElement>) {
        event!.preventDefault()

        axios.post('http://localhost:3000/delivery', {
            id_client: idClient,
            item_name: newTask
        })

        setIsEmpty(true)
        setTasks([...tasksClient, {
            id: uuidv4(),
            item_name: newTask,
            isCheck: false,
            created_at: "2022-12-29T13:44:50.639Z"
        }])
        setNewTask('')
        console.log(newTask)
    }

    function setCheck(id: string) {
        const newTasksWithNewCheck = tasksClient.map(task => {
            if (task.id === id) {
                task.isCheck = !task.isCheck
            }

            return task
        })

        setTasks(newTasksWithNewCheck)
        countTasksCheck(newTasksWithNewCheck)
    }

    function countTasksCheck(task: TaskProps[]) {
        const counterTask = task.filter(task => {
            return task.isCheck === true
        })

        setTasksCheck(counterTask.length)
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value)
        if (event.target.value !== '') {
            setIsEmpty(false)
        } else if (event.target.value === '') setIsEmpty(true)
    }

    function deleteTask(taskToDelete: string) {
        const tasksWithoutDeletedOne = tasksClient.filter(task => {
            return task.id != taskToDelete
        })
        setTasks(tasksWithoutDeletedOne);
        countTasksCheck(tasksWithoutDeletedOne)
    }

    return (
        <Container>
            <FormContainer onSubmit={handleCreateTasks}>
                <input onChange={handleNewCommentChange} value={newTask} type="text" placeholder='Adicione uma nova tarefa' />
                <button disabled={isEmpty} type='submit'>Criar <img src={imgPlus} alt="icon plus" /></button>
            </FormContainer>

            <ListContainer>
                <SummaryList>
                    <HeaderSummary>
                        <TasksCreated>
                            Tarefas Criadas
                            <NumberTasks>
                                <span>
                                    {tasksClient.length}
                                </span>
                            </NumberTasks>
                        </TasksCreated>
                        <CompletedTasks>
                            Concluidas
                            <NumberTasks>
                                <span>
                                    {tasksCheck}
                                </span>
                            </NumberTasks>
                        </CompletedTasks>
                    </HeaderSummary>
                </SummaryList>

                <div>
                    {(tasksClient.length >= 1) ? (
                        tasksClient.map(task => (
                            <TaskClient
                                id={task.id}
                                key={task.id}
                                content={task.item_name}
                                isCheck={task.isCheck}
                                deleteTask={deleteTask}
                                checkTask={setCheck}
                                created_at={task.created_at}
                                deliveryman={task.deliveryman}
                                end_at={task.end_at}
                            />
                        )
                        )) : (
                        <TasksIsEmpty>
                            <img src={img} alt="" />
                            <div>
                                <p>Você ainda não tem tarefas cadastradas</p>
                                <p>Crie tarefas e organize seus itens a fazer</p>
                            </div>
                        </TasksIsEmpty>
                    )}
                </div>
            </ListContainer>
        </Container>
    )
}