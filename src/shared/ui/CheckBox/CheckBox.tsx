import React from 'react';
import {CheckBoxProps} from './CheckBox.types';
import {Pressable, View} from "react-native";
import {checkBoxStylesCreator} from "@shared/ui/CheckBox/CheckBox.styles";
import {Typography} from "@shared/ui/Typography";
import {CheckBox as CheckBoxIcon, CheckBoxOutlineBlank} from "@shared/icons";

export const CheckBox: React.FC<CheckBoxProps> = ({checked, onPress, text}) => {
    const checkBoxStyles = checkBoxStylesCreator();

    return (
        <View style={checkBoxStyles.container}>
            <Pressable onPress={onPress}>
                {checked ? <CheckBoxIcon/> : <CheckBoxOutlineBlank/>}
            </Pressable>
            {text &&
                <Typography size={'md'}>{text}</Typography>
            }
        </View>
    );
};
