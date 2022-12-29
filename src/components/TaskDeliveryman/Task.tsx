import styles from './Task.module.css'
// import trash from '../../assets/trash.svg'
import checkImg from '../../assets/check.svg'
import { useState } from 'react'
import moment from 'moment'
import axios from 'axios';

interface Tasks {
    id: string;
    content: string;
    isCheck: boolean
    created_at: string
    deleteTask: (task: string) => void
    checkTask: (task: string) => void
}

export function TaskDeliveryman({ id, content, created_at, checkTask, isCheck }: Tasks) {
    const [check, setCheck] = useState(isCheck)
    const [idDeliveryman, setIdDeliveryman] = useState('')
    const [assignedTask, setAssignedTask] = useState('ATRIBUIR A MIM')

    function handleCheckTask() {
        setCheck(!check)
        checkTask(id)
    }

    function showTask() {
        if (check) {
            return <img src={checkImg} alt="" />
        }
    }

    function handleAssignTask() {
        axios.get("http://localhost:3000/deliveryman/deliveries").then(response => {
            setIdDeliveryman(response.data[0].id)
        })
        axios.put(`http://localhost:3000/delivery/updateDeliveryman/${id}`, {
            id_deliveryman: idDeliveryman,
            id_delivery: id  
        })
        setAssignedTask('TAREFA ATRIBUÍDA')
    }

    function addZeroes(num: String) {
        const numString = num.toString()
        if (numString.length <= 1) {
            return "0" + numString
        }
        return numString
    }

    const [date, hours] = created_at.split('T')
    const dateFormat = moment(date).format('DD/MM/YYYY')
    const hoursFormat = hours.split('.')[0]
    const [hour, minutes] = hoursFormat.split(':')
    const hoursLocaleFormat = String(Number(hour) - 3)
    const hourFormat = addZeroes(hoursLocaleFormat)

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
                    <p>criada em {dateFormat} às {hourFormat}:{minutes}</p>
                    <button onClick={handleAssignTask} className={styles.assignTask}>{assignedTask}</button>
                </div>
            </div>
        </div>
    )
}
