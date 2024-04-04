import {TextStyle, ViewStyle} from "react-native";

export interface TasksListStyles {
    container?: ViewStyle;
    heading?: TextStyle;
    list?: ViewStyle;
}

export const tasksListStylesCreator = (): TasksListStyles => ({
    container: {},
    heading: {
        marginBottom: 12,
    },
    list: {},
});
