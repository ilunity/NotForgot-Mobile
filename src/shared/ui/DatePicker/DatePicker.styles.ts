import {ViewStyle} from "react-native";
import {TextInputStyles} from "@shared/ui/TextInput/TextInput.styles";

export interface DatePickerStyles {
    container?: ViewStyle;
    input?: TextInputStyles;
}

export const datePickerStylesCreator = (): DatePickerStyles => ({
    container: {
        flexDirection: 'row',
    },
    input:{
        container:{
            flex: 1,
            marginRight: 20,
        }
    }
})
