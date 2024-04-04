import {TextInputProps as RNTextInputProps, TextStyle, ViewStyle} from "react-native";
import {TYPOGRAPHY_SIZE_NAMES} from "@shared/ui/Typography";
import {TYPOGRAPHY_SIZE} from "@shared/ui/Typography/Typography.types";
import {FONTS_NAMES} from "@shared/consts";

export interface TextInputStyles {
    container?: ViewStyle;
    label?: TextStyle;
    input?: RNTextInputProps['style'];
}

interface TextInputStylesProps {
    focused: boolean;
}

export const textInputStylesCreator = ({focused}: TextInputStylesProps): TextInputStyles => ({
    container: {},
    input: {
        height: 30,
        fontFamily: FONTS_NAMES.NUNITO_REGULAR,
        fontSize: TYPOGRAPHY_SIZE[TYPOGRAPHY_SIZE_NAMES.MD],
        borderBottomColor: focused ? '#1554f6' : '#6c6c6c',
        borderBottomWidth: 1,
        borderStyle: 'solid',
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
})
