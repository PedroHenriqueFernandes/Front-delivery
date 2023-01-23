import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";
import { TaskProps } from "../reducer/reducer";

interface TaskProviderProps {
    children: ReactNode;
}

interface TasksContext {
    tasks: TaskProps[];
    tasksClient: TaskProps[];
    tasksAssigned: TaskProps[];
    tasksCheck: number;
    setCheck: (id: string) => void;
    setTasks: (tasks: TaskProps[]) => void;
    setTasksCheck: (tasksCheck: number) => void;
    idDeliveryman: string;
    idClient: string;
}

export const TasksContext = createContext({} as TasksContext);

export function TaskProvider({ children }: TaskProviderProps) {
    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [tasksClient, setTasksClient] = useState<TaskProps[]>([])
    const [tasksAssigned, setTasksAssigned] = useState<TaskProps[]>([]);
    const [idClient, setIdClient] = useState('');
    const [idDeliveryman, setIdDeliveryman] = useState('');
    const [tasksCheck, setTasksCheck] = useState(0);

    async function getTasks() {
        const tokenDeliveryman = localStorage.getItem('@tokenDeliveryman')

        if (tokenDeliveryman != null) {
            axios.defaults.headers.common = { 'Authorization': `bearer ${tokenDeliveryman}` }

            axios.get('http://localhost:3000/deliveryman/deliveries')
            .then(function (response){
                const newTasksAssigned = response.data[0].deliveries.map((task: TaskProps) => {
                    return {
                        id: task.id,
                        item_name: task.item_name,
                        isCheck: task.end_at ? true : false,
                        created_at: task.created_at
                    }
                }).sort(function(a: TaskProps, b: TaskProps) {
                    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
                })
                const idDeliveryman = response.data[0].id
                setIdDeliveryman(idDeliveryman)
                setTasksAssigned(newTasksAssigned)
            }).
            catch(function (error) {
                console.log(error);
            })

            axios.get('http://localhost:3000/delivery/available')
            .then(function (response){
                const newTasksAvaible = response.data.map((task: TaskProps) => {
                    return {
                        id: task.id,
                        item_name: task.item_name,
                        isCheck: task.end_at ? true : false,
                        created_at: task.created_at
                    }
                }).sort(function(a: TaskProps, b: TaskProps) {
                    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
                })
    
                setTasks(newTasksAvaible)
            })
            .catch(
                function (error) {
                    console.log(error)
                }
            )
        }

        const tokenClient = localStorage.getItem('@tokenClient')

        if (tokenClient != null) {
            axios.defaults.headers.common = { 'Authorization': `bearer ${tokenClient}` }
            axios.get('http://localhost:3000/client/deliveries')
            .then(function (response) {
                const newTasks: TaskProps[] = response.data[0].deliveries.map((task: TaskProps) => {
                    return {
                        id: task.id,
                        item_name: task.item_name,
                        isCheck: task.end_at ? true : false,
                        created_at: task.created_at,
                        deliveryman: task.deliveryman,
                        end_at: task.end_at
                    }
                }).sort(function(a: TaskProps, b: TaskProps) {
                    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
                })

                setIdClient(response.data[0].id)

                setTasksCheck(newTasks.filter(task => task.isCheck === true).length)

                setTasksClient(newTasks)
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    }

    useEffect(() => {
        getTasks()
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

    function countTasksCheck(task: TaskProps[]) {
        const counterTask = task.filter(task => {
            return task.isCheck === true
        })

        setTasksCheck(counterTask.length)
    }

    function deleteTask(taskToDelete: string) {
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.id != taskToDelete
        })
        setTasks(tasksWithoutDeletedOne);
        countTasksCheck(tasksWithoutDeletedOne)
    }

    return (
        <TasksContext.Provider value={{ tasks, tasksAssigned, tasksCheck, setCheck, idClient, setTasks, setTasksCheck, tasksClient, idDeliveryman }}>
            {children}
        </TasksContext.Provider>
    )
}
