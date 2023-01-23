import styles from './Task.module.css'
import checkImg from '../../../../assets/check.svg'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { dateFormatter } from '../../../../utils/formatter';

interface Tasks {
    id: string;
    content: string;
    isCheck: boolean
    created_at: string
    deleteTask: (task: string) => void
    checkTask: (task: string) => void
    idDeliveryman: string
}

export function TaskAssignedDeliveryMan({ id, content, created_at, checkTask, isCheck, idDeliveryman }: Tasks) {
    const [check, setCheck] = useState(isCheck)

    useEffect(() => {
        setCheck(isCheck)
    }, [])

    function handleCheckTask() {
        setCheck(!check)
        checkTask(id)

        axios.put(`http://localhost:3000/delivery/updateEndDate/${id}`, {
            id_deliveryman: idDeliveryman,
            id_delivery: id
        })
    }

    function showTask() {
        if (check) {
            return <img src={checkImg} alt="" />
        }
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
                </div>
            </div>
        </div>
    )
}
