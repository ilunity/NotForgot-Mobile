import React from 'react';
import {TagProps} from './Tag.types';
import {Tag as TagIcon} from '@shared/icons';
import {Typography} from "@shared/ui/Typography";
import {tagStylesCreator} from "@shared/icons/Tag/Tag.styles";
import {StyleSheet, TextStyle, View} from "react-native";

export const Tag: React.FC<TagProps> = ({children, color, styles}) => {
    const tagStyles = tagStylesCreator({color})

    return (
        <View style={StyleSheet.compose(tagStyles.container, styles?.container)}>
            <TagIcon
                color={color}
                width={16}
            />
            <Typography
                color={'white'}
                style={StyleSheet.compose(tagStyles.label, styles?.label) as TextStyle}
            >
                {children}
            </Typography>
        </View>
    );
};
