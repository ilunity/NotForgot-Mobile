import {PageLayout} from "@shared/ui/PageLayout";
import {CreateTaskForm} from "@widgets/create-task-form/ui";
import uuid from "react-native-uuid";
import {CreateTaskFormInputs} from "@widgets/create-task-form/ui/CreateTaskForm.types";
import {useTasksList} from "@entities/task/model";
import {GoBackButton} from "@shared/ui";
import {useGoTo} from "@shared/hooks";
import {PAGES_NAMES} from "@shared/store";
import React from "react";

export const CreateTaskPage: React.FC = () => {
    const tasksList = useTasksList();

    const handleSubmit = (inputs: CreateTaskFormInputs) => {
        const newTask = {
            ...inputs,
            id: uuid.v4() as string,
            completed: false,
        }

        tasksList.add(newTask);
    }

    return (
        <PageLayout
            title={'Добавить заметку'}
            actions={{
                left: <GoBackButton onPress={useGoTo(PAGES_NAMES.TASKS)}/>
            }}
        >
            <CreateTaskForm onSubmit={handleSubmit}/>
        </PageLayout>
    )
}
