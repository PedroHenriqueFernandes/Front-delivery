import styles from './Task.module.css'
import checkImg from '../../../../assets/check.svg'
import { useContext, useState } from 'react'
import moment from 'moment'
import axios from 'axios';
import { TasksContext } from '../../../../context/TasksContext';
import { dateFormatter } from '../../../../utils/formatter';

interface Tasks {
    id: string;
    content: string;
    isCheck: boolean
    created_at: string
    idDeliveryman: string
}

export function TaskDeliveryman({ id, content, created_at, isCheck, idDeliveryman }: Tasks) {
    const [check, setCheckState] = useState(isCheck)
    const { setCheck } = useContext(TasksContext)
    const [assignedTask, setAssignedTask] = useState('ATRIBUIR A MIM')

    function handleCheckTask() {
        setCheckState(!check)
        setCheck(id)
    }

    function showTask() {
        if (check) {
            return <img src={checkImg} alt="" />
        }
    }

    function handleAssignTask() {
        const tokenDeliveryman = localStorage.getItem('@tokenDeliveryman')
        axios.defaults.headers.common = { 'Authorization': `bearer ${tokenDeliveryman}` }

        axios.put(`http://localhost:3000/delivery/updateDeliveryman/${id}`, {
            id_deliveryman: idDeliveryman,
            id_delivery: id  
        })
        setAssignedTask('TAREFA ATRIBUÍDA')
    }

    const dateFormat = dateFormatter.format(new Date(created_at))
    const [date, hours] = dateFormat.split(' ')

    return (
        <div>
            <div className={styles.listTask}>
                <div className={styles.checkAndText}>
                    <div onClick={handleCheckTask} className={styles.circleCheckBox}>
                        {showTask()}
                    </div>
                    <p>{content}</p>
                </div>

                <div className={styles.buttonAndCreatedAtContainer}>
                    <p className={styles.createdAtContainer}>criada em {date} às {hours}</p>
                    { (assignedTask === 'ATRIBUIR A MIM') ? 
                    <button onClick={handleAssignTask} className={styles.buttonAssignTask}><p>{assignedTask}</p></button> 
                    : 
                    <button className={styles.buttonAssignedTask}><p>{assignedTask}</p></button>
                    }
                </div>
            </div>
        </div>
    )
}
