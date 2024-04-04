import {ITask} from "@entities/task/model";
import {useGoTo} from "@shared/hooks";
import {PAGES_NAMES} from "@shared/store";

export const useGoToTask = (task: ITask) => useGoTo(PAGES_NAMES.TASK, {task});
