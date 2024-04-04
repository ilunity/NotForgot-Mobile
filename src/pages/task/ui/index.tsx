import React from "react";
import {GoBackButton, PageLayout} from "@shared/ui";
import {TasksDetails} from "@widgets/tasks-details";
import {TaskPageProps} from "./types";
import {useGoTo} from "@shared/hooks";
import {PAGES_NAMES} from "@shared/store";

export const TaskPage: React.FC<TaskPageProps> = ({task}) => {
    return (
        <PageLayout
            title={'Заметка'}
            actions={{
                left: <GoBackButton onPress={useGoTo(PAGES_NAMES.TASKS)}/>
            }}
        >
            <TasksDetails task={task}/>
        </PageLayout>
    )
}
