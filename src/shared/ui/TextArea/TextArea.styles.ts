import {TextInputProps as RNTextInputProps, TextStyle, ViewStyle} from "react-native";
import {TYPOGRAPHY_SIZE, TYPOGRAPHY_SIZE_NAMES} from "@shared/ui/Typography/Typography.types";
import {FONTS_NAMES} from "@shared/consts";

export interface TextAreaStyles {
    container?: ViewStyle;
    input?: RNTextInputProps['style'];
    label?: TextStyle;
    infoPanel?: ViewStyle;
    symbolsCounter?: TextStyle;
}

interface TextAreaStylesProps {
    focused: boolean;
}

export const textAreaStylesCreator = ({focused}: TextAreaStylesProps): TextAreaStyles => ({
    container: {},
    input: {
        fontFamily: FONTS_NAMES.NUNITO_REGULAR,
        fontSize: TYPOGRAPHY_SIZE[TYPOGRAPHY_SIZE_NAMES.MD],
        borderStyle: 'solid',
        borderColor: focused ? '#1554f6' : '#292929',
        borderWidth: 1,
        borderRadius: 8,
        padding: 11,
        textAlignVertical: 'top'
    },
    label: {
        top: -8,
        left: 11,
        paddingHorizontal: 3,
        fontSize: 12,
        position: 'absolute',
        backgroundColor: '#fff',
        zIndex: 1,
    },
    infoPanel: {
        marginTop: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    symbolsCounter: {
        marginLeft: 'auto',
        fontSize: 12,
    }
});
