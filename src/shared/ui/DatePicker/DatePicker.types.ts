import {DatePickerStyles} from "@shared/ui/DatePicker/DatePicker.styles";
import {InputErrorType} from "@shared/utils";

export interface DatePickerProps {
    label: string;
    date: Date | null;
    onChange: (date: Date) => void;
    styles?: DatePickerStyles;
    error?: InputErrorType;
}
