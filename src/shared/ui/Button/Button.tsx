import React from 'react';
import {BUTTON_SIZE_NAMES, ButtonProps} from './Button.types';
import {StyleSheet, TextStyle, TouchableOpacity, View} from "react-native";
import {Typography, TYPOGRAPHY_SIZE_NAMES} from "@shared/ui/Typography";
import {buttonStylesCreator, ButtonStylesProps} from "@shared/ui/Button/Button.styles";

const buttonTypographySize: Record<`${BUTTON_SIZE_NAMES}`, `${TYPOGRAPHY_SIZE_NAMES}`> = {
    [BUTTON_SIZE_NAMES.SM]: TYPOGRAPHY_SIZE_NAMES.XS,
    [BUTTON_SIZE_NAMES.MD]: TYPOGRAPHY_SIZE_NAMES.SM,
    [BUTTON_SIZE_NAMES.LG]: TYPOGRAPHY_SIZE_NAMES.MD,
}

export const Button: React.FC<ButtonProps> = (
    {
        children,
        icon,
        onPress,
        size = BUTTON_SIZE_NAMES.MD,
        border = false,
        shape = 'circle',
        type = 'primary',
        styles
    }
) => {
    const buttonStylesProps: ButtonStylesProps = {size, border, shape, type, onlyIcon: !children};
    const buttonStyles = buttonStylesCreator(buttonStylesProps);

    return (
        <TouchableOpacity style={StyleSheet.compose(buttonStyles.button, styles?.button)} onPress={onPress}>
            {icon &&
                <View style={StyleSheet.compose(buttonStyles.iconWrapper, styles?.iconWrapper)}>
                    {icon}
                </View>
            }
            {children &&
                <View style={StyleSheet.compose(buttonStyles.textWrapper, styles?.textWrapper)}>
                    <Typography
                        style={StyleSheet.compose(buttonStyles.text, styles?.text) as TextStyle}
                        size={buttonTypographySize[size]}
                        color={type === 'primary' ? 'white' : 'black'}
                    >
                        {children}
                    </Typography>
                </View>
            }
        </TouchableOpacity>
    );
};
