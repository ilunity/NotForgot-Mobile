import {ViewStyle} from "react-native";

export interface SelectStyles {
    container?: ViewStyle;
    select?: ViewStyle;
    dropDownContainer?: ViewStyle;
}

interface SelectStylesProps {
    openDropDown: boolean;
    itemsCount: number;
}

export const selectStylesCreator = ({openDropDown, itemsCount}: SelectStylesProps): SelectStyles => ({
    container: {},
    select: {
        height: 56,
        borderRadius: 8,
        backgroundColor: openDropDown ? '#d2d2d2' : '#efefef',
        padding: 11,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
    },
    dropDownContainer: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        backgroundColor: '#efefef',
        height: 72 + 32 * itemsCount,
        width: '100%',
        borderRadius: 8,
        paddingTop: 8,
        zIndex: 10,
    }
})
