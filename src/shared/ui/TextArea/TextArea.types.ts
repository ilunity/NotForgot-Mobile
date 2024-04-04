import {TextAreaStyles} from "@shared/ui/TextArea/TextArea.styles";
import {InputErrorType} from "@shared/utils";

export interface TextAreaProps {
    value: string;
    onChange: (value: string) => void;
    label?: string;
    styles?: TextAreaStyles;
    placeholder?: string;
    error?: InputErrorType;
    onBlur?: () => void;
}
