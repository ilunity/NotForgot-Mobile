import {ViewStyle} from "react-native";
import {TextAreaStyles} from "@shared/ui/TextArea/TextArea.styles";
import {ButtonStyles} from "@shared/ui/Button/Button.styles";
import {DatePickerStyles} from "@shared/ui/DatePicker/DatePicker.styles";
import {SelectStyles} from "@shared/ui/Select/Select.styles";

export interface CreateTaskFormStyles {
    container?: ViewStyle;
    descriptionInput?: TextAreaStyles;
    submitButton?: ButtonStyles;
    datePicker?: DatePickerStyles;
    select?: SelectStyles;
}

export const createTaskFormStylesCreator = (): CreateTaskFormStyles => ({
    container: {
        flex: 1,
        paddingBottom: 16,
    },
    descriptionInput: {
        container: {
            marginTop: 20,
        }
    },
    datePicker: {
        container: {
            marginTop: 10,
        }
    },
    select: {
        container:{
            marginTop: 28,
            marginBottom: 20,
        }
    },
    submitButton: {
        button: {
            marginTop: 'auto',
        }
    }
});
