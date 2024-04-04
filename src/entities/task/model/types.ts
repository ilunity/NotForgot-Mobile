export enum TASK_PRIORITY {
    HIGH = 'high',
    MEDIUM = 'medium',
    LOW = 'low',
}

export const TASK_PRIORITY_NAME = {
    [TASK_PRIORITY.LOW]: 'Можно забить',
    [TASK_PRIORITY.MEDIUM]: 'Важно',
    [TASK_PRIORITY.HIGH]: 'Срочно',
}

export const TASK_PRIORITY_COLOR = {
    [TASK_PRIORITY.LOW]: '#52CC57',
    [TASK_PRIORITY.MEDIUM]: '#FFD130',
    [TASK_PRIORITY.HIGH]: '#FF685C',
}

export interface ITask {
    id: string;
    title: string;
    description: string;
    deadline: Date;
    priority: `${TASK_PRIORITY}`;
    completed: boolean;
}
