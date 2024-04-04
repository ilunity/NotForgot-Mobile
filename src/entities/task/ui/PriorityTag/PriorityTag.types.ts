import {TASK_PRIORITY} from "@entities/task/model";
import {TagStyles} from "@shared/icons/Tag/Tag.styles";

export interface PriorityTagProps {
    priority: `${TASK_PRIORITY}`;
    styles?: TagStyles;
}
