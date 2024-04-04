import React from 'react';
import {TaskProps} from './Task.types';
import {Card} from "@shared/ui/Card";
import {taskStyle} from "@entities/task/ui/Task/Task.styles";

export const Task: React.FC<TaskProps> = ({task, actions, onPress}) => {
    const {title, description, priority, completed} = task;

    return (
        <Card
            styles={{card: taskStyle({priority})}}
            title={title}
            content={description}
            actions={actions}
            onPress={onPress}
        />
    );
};
