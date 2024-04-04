import {ImageStyle, ViewStyle} from "react-native";

export interface EmptyTasksListStubStyles {
    container?: ViewStyle;
    image?: ImageStyle;
}

export const emptyTasksListStubStylesCreator = (): EmptyTasksListStubStyles => ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 'auto',
        aspectRatio: 349 / 196,
        marginBottom: 16,
    }
})
