import React from 'react';
import {View} from "react-native";
import {Deadline, Heading, Typography, TYPOGRAPHY_SIZE_NAMES} from "@shared/ui";
import {PriorityTag} from "@entities/task";
import {EditTask} from "@features/edit-task";
import {tasksDetailsStylesCreator} from "./TasksDetails.styles";
import {TasksDetailsProps} from "./TasksDetails.types";

export const TasksDetails: React.FC<TasksDetailsProps> = ({task}) => {
    const tasksDetailStyles = tasksDetailsStylesCreator();

    return (
        <View>
            <Heading
                title={task.title}
                actions={{
                    right: <EditTask task={task}/>
                }}
            />
            <Typography
                style={tasksDetailStyles.completeBadge}
                color={task.completed ? 'success' : 'info'}
                size={TYPOGRAPHY_SIZE_NAMES.SM}
            >
                {task.completed ? 'Выполнено' : 'Выполняется'}
            </Typography>
            <Typography style={tasksDetailStyles.description}>
                {task.description}
            </Typography>
            <View style={tasksDetailStyles.info}>
                <Deadline date={task.deadline}/>
                <PriorityTag priority={task.priority}/>
            </View>
        </View>
    );
};
