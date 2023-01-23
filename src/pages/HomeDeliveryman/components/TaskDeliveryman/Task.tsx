import styles from './Task.module.css'
import checkImg from '../../../../assets/check.svg'
import { useContext, useState } from 'react'
import moment from 'moment'
import axios from 'axios';
import { TasksContext } from '../../../../context/TasksContext';

interface Tasks {
    id: string;
    content: string;
    isCheck: boolean
    created_at: string
}

export function TaskDeliveryman({ id, content, created_at, isCheck }: Tasks) {
    const [check, setCheckState] = useState(isCheck)
    const { setCheck } = useContext(TasksContext)
    const [idDeliveryman, setIdDeliveryman] = useState('')
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
                    <p className={styles.createdAtContainer}>criada em {dateFormat} às {hourFormat}:{minutes}</p>
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
