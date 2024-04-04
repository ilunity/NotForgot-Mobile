import React from "react";
import {observer} from "mobx-react-lite";
import {useTasksList} from "@entities/task";
import {EmptyTasksListStub, PageLayout} from "@shared/ui";
import {TasksList} from "@widgets/tasks-list";
import {CreateTask} from "@features/create-task";

export const TasksPage: React.FC = observer(
    () => {
        const tasksList = useTasksList();
        const isListEmpty = tasksList.tasks.length === 0;

        return (
            <>
                <PageLayout title={'Not Forgot'}>
                    {isListEmpty
                        ? <EmptyTasksListStub/>
                        : <TasksList tasks={tasksList.tasks}/>
                    }
                </PageLayout>
                <CreateTask/>
            </>
        )
    }
)
