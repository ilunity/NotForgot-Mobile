import {CardStyles} from "@shared/ui/Card/Card.styles";

export const headingStylesCreator = (): CardStyles => ({
    card: {
        paddingHorizontal: 0,
        height: 'auto',
        alignItems: 'flex-start',
    },
    textContainer: {
        paddingVertical: 0,
    },
    title: {
        fontSize: 24,
        lineHeight: 34,
        maxHeight: 34,
        color: '#000',
        fontFamily: 'Nunito-Bold',
    }
});
