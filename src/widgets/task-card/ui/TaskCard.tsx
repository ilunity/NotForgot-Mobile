import React from 'react';
import {TaskCardProps} from './TaskCard.types';
import {useGoToTask} from "@features/open-task";
import {ToggleTask} from "@features/toggle-task";
import {SwipeToCardDelete} from "@features/swipe-to-card-delete";
import {Task} from "@entities/task";

export const TaskCard: React.FC<TaskCardProps> = ({task}) => {
    const goToTask = useGoToTask(task);

    return (
        <SwipeToCardDelete taskId={task.id}>
            <Task
                task={task}
                actions={{
                    right: <ToggleTask task={task}/>
                }}
                onPress={goToTask}
            />
        </SwipeToCardDelete>
    );
};
