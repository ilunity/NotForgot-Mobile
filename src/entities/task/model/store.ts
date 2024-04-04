import {makeAutoObservable} from "mobx";
import {ITask} from "./types";

class TasksList {
    tasks: ITask[] = [];
    currentTaskId: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    add(task: ITask) {
        this.tasks.push(task);
    }

    remove(taskId: string) {
        const taskIndex = this.getTaskIndex(taskId);
        this.tasks.splice(taskIndex, 1);
    };

    edit(task: ITask) {
        const {id: taskId} = task;
        const taskIndex = this.getTaskIndex(taskId);
        this.tasks[taskIndex] = {...task};
    }

    toggle(taskId: string) {
        const taskIndex = this.getTaskIndex(taskId);
        this.tasks[taskIndex].completed = !this.tasks[taskIndex].completed;
    }

    getTaskIndex(taskId: string) {
        const taskIndex = this.tasks.findIndex(({id}) => taskId === id);
        return taskIndex;
    }

    setCurrentTask(taskId: string) {
        this.currentTaskId = taskId;
    }

    removeCurrentTask() {
        this.currentTaskId = null;
    }
}

export const tasksListStore = new TasksList();
