import styles from './Task.module.css'
import trash from '../../assets/trash.svg'
import checkImg from '../../assets/check.svg'
import { useState } from 'react'

interface Tasks {
    id: string;
    content: string;
    isCheck: boolean
    created_at: string
    deleteTask: (task: string) => void
    checkTask: (task: string) => void
}

export function TaskClient({ id, content, deleteTask, checkTask, isCheck, created_at }: Tasks) {
    const [check, setCheck] = useState(isCheck)

    function handleCheckTask() {
        setCheck(!check)
        checkTask(id)
    }

    function showTask() {
        if (check) {
            return <img src={checkImg} alt="" />
        }
    }

    function handleDeleteTask() {
        deleteTask(id)
    }

    return (
        <div>
            <div className={styles.listTask}>
                <div className={styles.checkAndText}>
                    <div className={styles.circleCheckBox}>
                        {showTask()}
                    </div>
                    <p>{content}</p>
                </div>

                <div className={styles.timeAndDeleteButtonTask}>
                    <p>{created_at}</p>
                    <button onClick={handleDeleteTask} className={styles.trash}><img src={trash} alt="" /></button>
                </div>
            </div>
        </div>
    )
}
