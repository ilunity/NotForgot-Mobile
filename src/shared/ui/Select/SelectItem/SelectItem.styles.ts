import {ViewStyle} from "react-native";

export interface SelectItemStyles {
    button?: ViewStyle;
}
interface SelectItemStylesProps {
    selected?: boolean;
}

export const selectItemStylesCreator = ({selected}:SelectItemStylesProps):SelectItemStyles => ({
    button:{
        height: 32,
        justifyContent: 'center',
        backgroundColor: selected ? '#c4c4c4' : 'rgba(0,0,0,0)',
        paddingHorizontal: 15,
    }
})
