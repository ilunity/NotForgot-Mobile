import React from 'react';
import {ToggleTaskProps} from './ToggleTask.types';
import {useTasksList} from "@entities/task/model";
import {CheckBox} from "@shared/ui/CheckBox";
import {observer} from "mobx-react-lite";

export const ToggleTask: React.FC<ToggleTaskProps> = observer(({task}) => {
    const tasksList = useTasksList();

    return (
        <CheckBox
            checked={task.completed}
            onPress={() => tasksList.toggle(task.id)}
        />
    );
});
