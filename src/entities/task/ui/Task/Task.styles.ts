import {ViewStyle} from "react-native";
import {TASK_PRIORITY, TASK_PRIORITY_COLOR} from "@entities/task/model";

interface TaskStyleProps {
    priority: `${TASK_PRIORITY}`;
}

export const taskStyle = ({priority}: TaskStyleProps): ViewStyle => ({
    backgroundColor: TASK_PRIORITY_COLOR[priority],
});
