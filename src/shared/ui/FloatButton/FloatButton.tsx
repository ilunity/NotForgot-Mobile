import React from 'react';
import {FloatButtonProps} from './FloatButton.types';
import {View} from "react-native";
import {Button} from "@shared/ui/Button";
import {floatButtonStyleCreator} from "@shared/ui/FloatButton/FloatButton.styles";

export const FloatButton: React.FC<FloatButtonProps> = ({...buttonProps}) => {
    return (
        <View style={floatButtonStyleCreator()}>
            <Button {...buttonProps} shape={'round'}/>
        </View>
    );
};
