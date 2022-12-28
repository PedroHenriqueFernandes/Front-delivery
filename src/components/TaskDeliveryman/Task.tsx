import styles from './Task.module.css'
// import trash from '../../assets/trash.svg'
import checkImg from '../../assets/check.svg'
import { useState } from 'react'

interface Tasks {
    id: string;
    content: string;
    isCheck: boolean
    created_at: string
    deleteTask: (task:string)=>void
    checkTask: (task:string)=> void
}

export function TaskDeliveryman({ id, content, created_at, checkTask, isCheck }: Tasks) {
    const [check, setCheck] = useState(isCheck)

    function handleCheckTask() {
        setCheck(!check)
        checkTask(id)
    }

    function showTask(){
        if(check){
            return <img src={checkImg} alt="" />
        }
    }

    // function handleDeleteTask(){
    //     deleteTask(id)
    // }

    return (
        <div>
            <div className={styles.listTask}>
                <div className={styles.checkAndText}>
                    <div onClick={handleCheckTask} className={styles.circleCheckBox}>
                        {showTask()}
                    </div>
                    <p>{content}</p>
                </div>

                <p>{created_at}</p>
                {/* <button onClick={handleDeleteTask} className={styles.trash}><img src={trash} alt="" /></button> */}
            </div>
        </div>
    )
}
