import React from 'react';
import {CardActionProps, CardProps} from './Card.types';
import {StyleSheet, TextStyle, TouchableOpacity, View} from "react-native";
import {Typography} from "../Typography";
import {cardActionStyleCreator, cardStylesCreator} from "./Card.styles";

export const Card: React.FC<CardProps> = (
    {
        content,
        title,
        actions,
        styles,
        onPress
    }
) => {

    const cardStyles = cardStylesCreator();

    const contentView = (<>
        <Typography
            style={StyleSheet.compose(cardStyles.title, styles?.title) as TextStyle}
            size={'md'}
            color={'white'}
            strong
        >
            {title}
        </Typography>
        {content &&
            <Typography
                style={StyleSheet.compose(cardStyles.subtitle, styles?.subtitle) as TextStyle}
                size={'md'}
                color={'white'}>
                {content}
            </Typography>
        }
    </>);

    return (
        <View style={StyleSheet.compose(cardStyles.card, styles?.card)}>
            {actions?.left && <CardAction action={actions.left} actionType={'left'}/>}
            <View style={StyleSheet.compose(cardStyles.textContainer, styles?.textContainer)}>
                {onPress ?
                    <TouchableOpacity onPress={onPress}>
                        {contentView}
                    </TouchableOpacity>
                    : contentView
                }
            </View>
            {actions?.right && <CardAction action={actions.right} actionType={'right'}/>}
        </View>
    );
};

const CardAction: React.FC<CardActionProps> = ({action, ...styleProps}) => (
    <View style={cardActionStyleCreator(styleProps)}>
        {action}
    </View>
);
