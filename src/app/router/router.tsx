import {ReactNode} from "react";
import {observer} from "mobx-react-lite";
import {PAGES_NAMES, usePage} from "@shared/store";
import {TasksPage} from "@pages/tasks";
import {CreateTaskPage} from "@pages/create-task";
import {EditTaskPage} from "@pages/edit-task";
import {TaskPage} from "@pages/task";

export const Router: React.FC = observer(() => {
    const page = usePage();

    const currentPage: Record<`${PAGES_NAMES}`, ReactNode> = {
        tasks: <TasksPage/>,
        createTask: <CreateTaskPage/>,
        editTask: <EditTaskPage {...page.getProps<PAGES_NAMES.EDIT_TASK>()}/>,
        task: <TaskPage {...page.getProps<PAGES_NAMES.TASK>()}/>
    };

    return currentPage[page.current];
})
