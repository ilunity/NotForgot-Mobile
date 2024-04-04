import React from 'react';
import {TypographyProps} from './Typography.types';
import {StyleSheet, Text} from "react-native";
import {typographyStyleCreator} from "./Typography.styles";

export const Typography: React.FC<TypographyProps> = ({children, style, ...stylesProps}) => {
    return (
        <Text style={StyleSheet.compose(typographyStyleCreator(stylesProps), style)}>
            {children}
        </Text>
    );
};
