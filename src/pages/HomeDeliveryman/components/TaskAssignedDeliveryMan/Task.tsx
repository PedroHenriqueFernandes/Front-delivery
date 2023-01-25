import styles from './Task.module.css'
import checkImg from '../../../../assets/check.svg'
import { useState, useEffect, useContext } from 'react'
import { dateFormatter } from '../../../../utils/formatter';
import { TasksContext } from '../../../../context/TasksContext';

interface Tasks {
    id: string;
    content: string;
    isCheck: boolean
    created_at: string;
    end_at: string | undefined
    deleteTask: (task: string) => void
    idDeliveryman: string
}

export function TaskAssignedDeliveryMan({ id, content, created_at, isCheck, end_at }: Tasks) {
    const [check, setCheckLocal] = useState(isCheck)
    const { setCheck } = useContext(TasksContext)

    useEffect(() => {
        setCheckLocal(isCheck)
    }, [])

    function handleCheckTask() {
        setCheckLocal(!check)
        setCheck(id)
    }

    function showCheckTask() {
        if (check) {
            return <img src={checkImg} alt="" />
        }
    }


    function showEndAt() {
        if (end_at != undefined) {
            const dateFormatEndAt = dateFormatter.format(new Date(end_at))
            const [dateEndAt, hoursEndAt] = dateFormatEndAt.split(' ')

            return (
                <p>Finalizada em {dateEndAt} às {hoursEndAt}</p>
            )
        }
    }

    const dateFormat = dateFormatter.format(new Date(created_at))
    const [date, hours] = dateFormat.split(' ')

    return (
        <div>
            <div className={styles.listTask}>
                <div className={styles.checkAndText}>
                    <div onClick={handleCheckTask} className={styles.circleCheckBox}>
                        {showCheckTask()}
                    </div>
                    <p>{content}</p>
                </div>

                <div className={styles.buttonAndCreatedAtContainer}>
                    {showEndAt()}
                    <p className={styles.createdAtContainer}>criada em {date} às {hours}</p>
                </div>
            </div>
        </div>
    )
}
