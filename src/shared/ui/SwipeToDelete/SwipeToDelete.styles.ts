import {Animated, TextStyle, ViewStyle} from "react-native";


export interface SwipeToDeleteStyles {
    container?: ViewStyle;
    text?: TextStyle;
}

interface SwipeToDeleteStylesProps {
    scale: Animated.AnimatedInterpolation<string | number>;
}

export const swipeToDeleteStylesCreator = ({scale}: SwipeToDeleteStylesProps): SwipeToDeleteStyles => ({
    container: {
        backgroundColor: 'red',
        width: "100%",
        justifyContent: 'center',
    },
    text: {
        marginLeft: 'auto',
        marginRight: 10,
        fontSize: 16,
        fontWeight: 'bold',
        transform: [{scale}],
    },
})
