import {ColorValue, TextStyle, ViewStyle} from "react-native";

export interface TagStyles {
    container?: ViewStyle;
    label?: TextStyle;
}

interface TagStylesProps {
    color: ColorValue;
}

export const tagStylesCreator = ({color}: TagStylesProps): TagStyles => ({
    container:{
        flexDirection: 'row',
    },
    label: {
        height: 24,
        backgroundColor: color,
        paddingLeft: 2,
        paddingRight: 8,
        borderRadius:1,
    }
})
