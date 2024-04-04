import React from 'react';
import {CreateTaskFormInputs, CreateTaskFormProps} from './CreateTaskForm.types';
import {View} from "react-native";
import {createTaskFormStylesCreator} from "@widgets/create-task-form/ui/CreateTaskForm.styles";
import {TASK_PRIORITY, TASK_PRIORITY_NAME} from "@entities/task/model";
import {FormInput} from "@shared/utils";
import {useGoTo} from "@shared/hooks";
import {PAGES_NAMES} from "@shared/store";
import {Button, DatePicker, Select, SelectItemValue, TextArea, TextInput} from "@shared/ui";

const useFormInputs = (init?: CreateTaskFormInputs) => {
    const title = new FormInput({
        init: init?.title || '',
    })
    const description = new FormInput({
        init: init?.description || '',
    })
    const deadline = new FormInput({
        init: init?.deadline || null,
    });

    const priorityInit = init?.priority
        ? {key: init.priority, value: TASK_PRIORITY_NAME[init.priority]}
        : null
    const priority = new FormInput({
        init: priorityInit,
    });

    return {title, description, deadline, priority};
}

const prioritiesItems: SelectItemValue[] = Object.entries(TASK_PRIORITY_NAME)
    .map(([key, value]) => ({key, value}));

export const CreateTaskForm: React.FC<CreateTaskFormProps> = ({initInputs, onSubmit}) => {
    const goToTasksPage = useGoTo(PAGES_NAMES.TASKS);

    const {
        title,
        description,
        deadline,
        priority,
    } = useFormInputs(initInputs);

    const createTaskFormStyles = createTaskFormStylesCreator();

    const handleSubmit = () => {
        let hasErrors: boolean = false;

        hasErrors = !title.validate() || hasErrors;
        hasErrors = !description.validate() || hasErrors;
        hasErrors = !deadline.validate() || hasErrors;
        hasErrors = !priority.validate() || hasErrors;

        if (hasErrors) {
            return;
        }

        const inputs = {
            title: title.value,
            description: description.value,
            deadline: deadline.value,
            priority: priority?.value?.key,
        } as CreateTaskFormInputs;

        onSubmit(inputs);
        goToTasksPage();
    }

    return (
        <View style={createTaskFormStyles.container}>
            <TextInput
                value={title.value}
                onChange={title.setValue}
                label={'Заголовок'}
                error={title.error}
                onBlur={title.resetError.bind(title)}
            />
            <TextArea
                styles={createTaskFormStyles.descriptionInput}
                value={description.value}
                onChange={description.setValue}
                label={'Описание'}
                error={description.error}
                onBlur={description.resetError.bind(description)}
            />
            <DatePicker
                styles={createTaskFormStyles.datePicker}
                label={'Срок выполнения задачи'}
                date={deadline.value}
                onChange={(date) => {
                    deadline.setValue(date);
                    deadline.resetError();
                }}
                error={deadline.error}
            />
            <Select
                styles={createTaskFormStyles.select}
                label={'Приоритет'}
                items={prioritiesItems}
                selectedItem={priority.value}
                onSelect={selected => {
                    priority.setValue(selected as { key: `${TASK_PRIORITY}`, value: string });
                    priority.resetError();
                }}
                error={priority.error}
            />
            <Button
                onPress={handleSubmit}
                styles={createTaskFormStyles.submitButton}
            >
                Сохранить
            </Button>
        </View>
    );
};
