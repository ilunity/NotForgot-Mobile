import {ViewStyle} from "react-native";

export interface DeadlineStyles {
    container?: ViewStyle;
}

export const deadlineStylesCreator = (): DeadlineStyles => ({
    container: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    }
})
