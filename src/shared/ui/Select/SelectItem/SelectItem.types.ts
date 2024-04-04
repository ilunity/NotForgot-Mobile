export interface SelectItemValue {
    key: string;
    value: string;
}

export interface SelectItemProps {
    item: SelectItemValue;
    selected: boolean;
    onPress: () => void;
}
