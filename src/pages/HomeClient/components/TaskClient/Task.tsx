import trash from '../../../../assets/trash.svg'
import checkImg from '../../../../assets/check.svg'
import { dateFormatter } from '../../../../utils/formatter'
import { CircleCheck, TaskContainer, TimeAndDeleteButtonTaskContainer, TitleAndCheckContainer } from './styles'
import axios from 'axios';

interface Tasks {
    id: string;
    content: string;
    isCheck: boolean
    created_at: string
    deleteTask: (task: string) => void
    checkTask: (task: string) => void
    deliveryman: {
        username: string,
        id: string
    } | undefined,
    end_at: string | undefined
}

export function TaskClient({ id, content, deleteTask, isCheck, created_at, deliveryman, end_at }: Tasks) {
    function showTask() {
        if (isCheck) {
            return <img src={checkImg} alt="" />
        }
    }

    function handleDeleteTask() {
        deleteTask(id)
        axios.delete(`http://localhost:3000/delivery/${id}`).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }

    const dateFormatCreatedAt = dateFormatter.format(new Date(created_at))
    const [dateCreatedAt, hoursCratedAt] = dateFormatCreatedAt.split(' ')

    function showEndAt() {
        if (end_at != undefined) {
            const dateFormatEndAt = dateFormatter.format(new Date(end_at))
            const [dateEndAt, hoursEndAt] = dateFormatEndAt.split(' ')

            return (
                <p>Finalizada por {deliveryman?.username} em {dateEndAt} às {hoursEndAt}</p>
            )
        }
    }

    return (
        <TaskContainer>
            <TitleAndCheckContainer>
                <CircleCheck>
                    {showTask()}
                </CircleCheck>
                <p>{content}</p>
            </TitleAndCheckContainer>

            <TimeAndDeleteButtonTaskContainer>
                <p>{`criada em ${dateCreatedAt} às ${hoursCratedAt}`}</p>
                {showEndAt()}
                <button onClick={handleDeleteTask}>
                    <img src={trash} alt="" />
                </button>
            </TimeAndDeleteButtonTaskContainer>
        </TaskContainer>
    )
}
