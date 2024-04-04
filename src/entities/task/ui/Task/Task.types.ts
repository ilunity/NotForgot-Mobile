import {ITask} from "../../model";
import {CardProps} from "@shared/ui/Card/Card.types";

export interface TaskProps {
    task: ITask;
    actions?: CardProps['actions'];
    onPress?: () => void;
}
