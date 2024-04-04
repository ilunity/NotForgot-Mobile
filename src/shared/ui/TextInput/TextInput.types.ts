import {TextInputStyles} from "@shared/ui/TextInput/TextInput.styles";
import {InputErrorType} from "@shared/utils";


export interface TextInputProps {
    value: string;
    onChange?: (value: string) => void;
    styles?: TextInputStyles;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    error?: InputErrorType;
    onBlur?: () => void;
}
