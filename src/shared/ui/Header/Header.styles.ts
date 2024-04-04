import {StyleSheet} from "react-native";
import {CardStyles} from "@shared/ui/Card/Card.styles";
import Constants from 'expo-constants';

interface HeaderStylesProps {
    alignment?: boolean;
}

export const headerStylesCreator = ({alignment = false}: HeaderStylesProps): CardStyles => StyleSheet.create({
    card: {
        marginTop: Constants.statusBarHeight,
        paddingHorizontal: 16,
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: alignment ? 'center' : 'flex-start',
    },
    title: {
        fontSize: 22,
        color: '#000',
        lineHeight: 28,
        maxHeight: 28,
        fontFamily: 'Nunito-Regular',
    }
});
