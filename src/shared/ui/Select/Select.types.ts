import {SelectItemValue} from "@shared/ui/Select/SelectItem/SelectItem.types";
import {SelectStyles} from "@shared/ui/Select/Select.styles";
import {InputErrorType} from "@shared/utils";

export interface SelectProps {
    label: string;
    selectedItem: SelectItemValue | null;
    items: SelectItemValue[];
    onSelect: (selected: SelectItemValue) => void;
    styles?: SelectStyles;
    error?: InputErrorType;
}
