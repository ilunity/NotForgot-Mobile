import React from 'react';
import {SelectItemProps} from './SelectItem.types';
import {Pressable} from "react-native";
import {Typography} from "@shared/ui/Typography";
import {selectItemStylesCreator} from "@shared/ui/Select/SelectItem/SelectItem.styles";

export const SelectItem: React.FC<SelectItemProps> = ({item, selected, onPress}) => {
    const selectItemStyles = selectItemStylesCreator({selected});

    return (
        <Pressable
            style={selectItemStyles.button}
            onPress={onPress}
        >
            <Typography>
                {item.value}
            </Typography>
        </Pressable>
    );
};
