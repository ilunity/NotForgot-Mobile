import {TASK_PRIORITY} from "@entities/task/model";

export interface CreateTaskFormInputs {
    title: string;
    description: string;
    deadline: Date;
    priority: `${TASK_PRIORITY}`;
}

export enum CREATE_TASK_FORM_TYPE {
    EDIT = 'edit',
    CREATE = 'create',
}

export interface CreateTaskFormProps {
    initInputs?: CreateTaskFormInputs;
    onSubmit: (inputs: CreateTaskFormInputs) => void;
}
