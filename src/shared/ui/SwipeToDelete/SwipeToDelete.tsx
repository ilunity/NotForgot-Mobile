import React from 'react';
import {SwipeToDeleteProps} from './SwipeToDelete.types';
import {Swipeable, SwipeableProps} from "react-native-gesture-handler";
import {Animated, StyleSheet} from "react-native";
import {swipeToDeleteStylesCreator} from "@shared/ui/SwipeToDelete/SwipeToDelete.styles";

export const SwipeToDelete: React.FC<SwipeToDeleteProps> = ({children, onSwipeableOpen, styles}) => {
    const swipeRight: SwipeableProps['renderRightActions'] = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [-200, 0],
            outputRange: [1, 0.5],
            extrapolate: 'clamp'
        })

        const swipeToDeleteStyles = swipeToDeleteStylesCreator({scale});

        return (
            <Animated.View style={StyleSheet.compose(swipeToDeleteStyles.container, styles?.container)}>
                <Animated.Text style={StyleSheet.compose(swipeToDeleteStyles.text, styles?.text)}>
                    Удалить
                </Animated.Text>
            </Animated.View>
        )
    }

    return (
        <Swipeable
            renderRightActions={swipeRight}
            rightThreshold={-200}
            onSwipeableOpen={onSwipeableOpen}
        >
            {children}
        </Swipeable>
    );
};
