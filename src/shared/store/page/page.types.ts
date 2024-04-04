import {EditTaskPageProps} from "@pages/edit-task/ui/types";
import {TaskPageProps} from "@pages/task/ui/types";

export enum PAGES_NAMES {
    TASKS = 'tasks',
    CREATE_TASK = 'createTask',
    EDIT_TASK = 'editTask',
    TASK = 'task',
}

export type PAGES_PROPS<T extends `${PAGES_NAMES}`> =
    T extends `${PAGES_NAMES.EDIT_TASK}` ? EditTaskPageProps
        : T extends `${PAGES_NAMES.TASK}` ? TaskPageProps
            : undefined;
