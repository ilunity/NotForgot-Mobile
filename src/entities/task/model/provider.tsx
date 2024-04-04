import {ReactNode} from "react";
import {TasksListContext} from "@entities/task/model/context";
import {tasksListStore} from "@entities/task/model/store";

type Props = {
    children?: ReactNode;
};


export const TasksListProvider: React.FC<Props> = ({children}) => (
    <TasksListContext.Provider value={tasksListStore}>
        {children}
    </TasksListContext.Provider>
);
