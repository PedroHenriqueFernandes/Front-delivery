import { TasksActionTypes } from "./actions";
import { produce } from "immer";

export interface TaskProps {
    id: string;
    isCheck: boolean;
    item_name: string;
    id_client?: string;
    id_deliveryman?: string;
    deliveryman?: {
        id: string;
        username: string;
    } | undefined;
    username?: string;
    created_at: string;
    end_at?: string;
}

interface TasksState {
    tasks: TaskProps[];
}

export function tasksReducer(state: TasksState, action: any) {
    switch (action.type) {
        case TasksActionTypes.ADD_TASK:
        return produce(state, draft => {
                draft.tasks.push(action.payload);
            });
        case TasksActionTypes.DELETE_TASK:
            return produce(state, draft => {
                const index = draft.tasks.findIndex(task => task.id === action.payload);
                if (index >= 0) {
                    draft.tasks.splice(index, 1);
                }
            });
        case TasksActionTypes.UPDATE_TASK:
            return produce(state, draft => {
                const index = draft.tasks.findIndex(task => task.id === action.payload.id);
                if (index >= 0) {
                    draft.tasks[index] = action.payload;
                }
            });
        case TasksActionTypes.GET_TASKS_CLIENT:
            return produce(state, draft => {
                draft.tasks = action.payload;
            });
        default:
            return state;
    }
}