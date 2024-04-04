import {TextStyle, ViewStyle} from 'react-native';

export interface CardStyles {
    card?: ViewStyle;
    textContainer?: ViewStyle;
    title?: TextStyle;
    subtitle?: TextStyle;
}

export const cardStylesCreator = (): CardStyles => ({
    card: {
        width: '100%',
        height: 64,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        borderRadius: 12,
    },
    textContainer: {
        flex: 1,
        height: '100%',
        paddingVertical: 12,
    },
    title: {
        lineHeight: 18,
        maxHeight: 18,
    },
    subtitle: {
        lineHeight: 18,
        maxHeight: 18,
        marginTop: 8
    },
})


export enum CARD_ACTION_TYPE {
    LEFT = 'left',
    RIGHT = 'right',
}

export interface CardActionStyleProps {
    actionType: `${CARD_ACTION_TYPE}`;
}

export const cardActionStyleCreator = ({actionType}: CardActionStyleProps): ViewStyle => ({
    maxHeight: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: actionType === CARD_ACTION_TYPE.RIGHT ? 20 : 0,
    paddingRight: actionType === CARD_ACTION_TYPE.LEFT ? 20 : 0,
})
