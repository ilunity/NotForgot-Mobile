import {ViewStyle} from "react-native";

export interface PageLayoutStyles {
    pageLayout?: ViewStyle;
    scrollWrapper?: ViewStyle;
    contentContainer?: ViewStyle;
}

export const pageLayoutStylesCreator = (): PageLayoutStyles => ({
    pageLayout: {
        flex: 1,
        height: '100%',
    },
    scrollWrapper: {
        flex: 1,
    },
    contentContainer: {
        marginTop: 16,
        paddingHorizontal: 16,
        paddingBottom: 16,
    }
});
