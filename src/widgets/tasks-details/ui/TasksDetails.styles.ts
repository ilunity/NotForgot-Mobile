import {TextStyle, ViewStyle} from "react-native";

interface TasksDetailsStyles {
    container?: ViewStyle;
    completeBadge?: TextStyle;
    info?: ViewStyle;
    description?: TextStyle;
}

export const tasksDetailsStylesCreator = (): TasksDetailsStyles => ({
    container: {},
    completeBadge: {
        marginLeft: 'auto',
        marginTop:4,
    },
    description: {
        marginTop: 16,
    },
    info: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})
