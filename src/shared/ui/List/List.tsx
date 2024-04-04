import React from 'react';
import {ListProps} from './List.types';
import {StyleSheet, View} from "react-native";
import {listStyleCreator} from "@shared/ui/List/List.styles";

export const List: React.FC<ListProps> = ({children, styles, ...styleProps}) => {
    return (
        <View style={StyleSheet.compose(listStyleCreator(styleProps), styles)}>
            {children}
        </View>
    );
};
