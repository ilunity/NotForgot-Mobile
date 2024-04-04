import React from 'react';
import {DeadlineProps} from './Deadline.types';
import {StyleSheet, View} from "react-native";
import {Time} from "@shared/icons";
import {Typography} from "@shared/ui/Typography";
import dateFormat from "dateformat";
import {deadlineStylesCreator} from "@shared/ui/Deadline/Deadline.styles";

export const Deadline: React.FC<DeadlineProps> = ({date, styles}) => {
    const deadlineStyles = deadlineStylesCreator();

    return (
        <View style={StyleSheet.compose(deadlineStyles.container, styles?.container)}>
            <Time/>
            <Typography>
                {'До ' + dateFormat(date, 'dd.mm.yyyy')}
            </Typography>
        </View>
    );
};
