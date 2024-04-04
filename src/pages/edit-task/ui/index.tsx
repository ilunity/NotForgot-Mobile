import {useTasksList} from "@entities/task";
import {EditTaskPageProps} from "./types";
import {CreateTaskForm, CreateTaskFormInputs} from "@widgets/create-task-form";
import {GoBackButton, PageLayout} from "@shared/ui";
import {useGoTo} from "@shared/hooks";
import {PAGES_NAMES} from "@shared/store";

export const EditTaskPage: React.FC<EditTaskPageProps> = ({task}) => {
    const tasksList = useTasksList();

    const handleSubmit = (inputs: CreateTaskFormInputs) => {
        const newTask = {
            ...task,
            ...inputs,
        }

        tasksList.edit(newTask);
    }

    return (
        <PageLayout
            title={'Изменить заметку'}
            actions={{
                left: <GoBackButton onPress={useGoTo(PAGES_NAMES.TASK, {task})}/>
            }}
        >
            <CreateTaskForm
                initInputs={task}
                onSubmit={handleSubmit}
            />
        </PageLayout>
    )
}
