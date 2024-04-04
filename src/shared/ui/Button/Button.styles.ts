import {StyleSheet, TextStyle, ViewStyle} from "react-native";
import {BUTTON_SIZE, BUTTON_SIZE_NAMES} from "@shared/ui";

export interface ButtonStyles {
    button?: ViewStyle;
    iconWrapper?: ViewStyle;
    textWrapper?: ViewStyle;
    text?: TextStyle;
}

export interface ButtonStylesProps {
    block?: boolean;
    type?: 'primary' | 'default';
    shape?: 'circle' | 'round';
    border?: boolean;
    size?: `${BUTTON_SIZE_NAMES}`;
    onlyIcon?: boolean;
}

export const buttonStylesCreator = (
    {
        size = BUTTON_SIZE_NAMES.MD,
        border = false,
        shape = 'circle',
        type = 'primary',
        onlyIcon = false,
    }: ButtonStylesProps
): ButtonStyles => StyleSheet.create({
    button: {
        width: onlyIcon ? BUTTON_SIZE[size] : '100%',
        backgroundColor: type === 'primary' ? '#292929' : 'rgba(0,0,0,0)',
        height: BUTTON_SIZE[size],
        borderRadius: shape === 'round' ? 16 : 100,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: border ? '#292929' : 'rgba(0,0,0,0)',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconWrapper: {
        flex: 1,
        paddingRight: onlyIcon ? 0 : 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {},
});
