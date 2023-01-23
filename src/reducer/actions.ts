import { TaskProps } from "./reducer";

export enum TasksActionTypes {
    ADD_TASK = "ADD_TASK",
    DELETE_TASK = "DELETE_TASK",
    UPDATE_TASK = "UPDATE_TASK",
    GET_TASKS_DELIVERYMAN = "GET_TASK",
    GET_TASKS_CLIENT = "GET_TASKS_SUCCESS",
}

export function addTaskAction(task: TaskProps) {
    return {
        type: TasksActionTypes.ADD_TASK,
        payload: task,
    };
}

export function deleteTaskAction(id: string) {
    return {
        type: TasksActionTypes.DELETE_TASK,
        payload: id,
    };
}

export function updateTaskAction(task: TaskProps) {
    return {
        type: TasksActionTypes.UPDATE_TASK,
        payload: task,
    };
}

export function getTasksDeliverymanAction() {
    return {
        type: TasksActionTypes.GET_TASKS_DELIVERYMAN
    };
}

export function getTasksClientAction() {
    return {
        type: TasksActionTypes.GET_TASKS_CLIENT
    };
}