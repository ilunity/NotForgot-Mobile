import {ReactNode} from "react";
import {ButtonStyles, ButtonStylesProps} from "@shared/ui/Button/Button.styles";

export enum BUTTON_SIZE_NAMES {
    SM = 'sm',
    MD = 'md',
    LG = 'lg',
}

export const BUTTON_SIZE = {
    [BUTTON_SIZE_NAMES.SM]: 24,
    [BUTTON_SIZE_NAMES.MD]: 40,
    [BUTTON_SIZE_NAMES.LG]: 56,
}

export interface ButtonProps extends Omit<ButtonStylesProps, 'onlyIcon'> {
    icon?: ReactNode;
    children?: string;
    onPress: () => void;
    styles?: ButtonStyles;
}
