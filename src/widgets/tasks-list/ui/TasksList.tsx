import React from 'react';
import {observer} from "mobx-react-lite";
import {tasksListStylesCreator} from "./TasksList.styles";
import {TasksListProps} from "./TasksList.types";
import {View} from "react-native";
import {List, Typography} from "@shared/ui";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {TaskCard} from "@widgets/task-card";

export const TasksList: React.FC<TasksListProps> = observer(({tasks}) => {
    const tasksListStyles = tasksListStylesCreator();

    return (
        <View style={tasksListStyles.container}>
            <Typography
                style={tasksListStyles.heading}
                strong
                size={'xl'}
            >
                Задачи
            </Typography>
            <GestureHandlerRootView>
                <List
                    styles={tasksListStyles.list}
                    gap={'8'}
                >
                    {tasks.map(task => <TaskCard key={task.id} task={task}/>)}
                </List>
            </GestureHandlerRootView>
        </View>
    );
});
