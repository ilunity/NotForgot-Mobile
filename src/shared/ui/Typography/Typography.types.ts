import {TextStyle} from "react-native";
import {TypographyStyleProps} from "@shared/ui/Typography/Typography.styles";

export enum TYPOGRAPHY_SIZE_NAMES {
    XS = 'xs',
    SM = 'sm',
    MD = 'md',
    LG = 'lg',
    XL = 'xl'
}

export const TYPOGRAPHY_SIZE = {
    [TYPOGRAPHY_SIZE_NAMES.XS]: 12,
    [TYPOGRAPHY_SIZE_NAMES.SM]: 14,
    [TYPOGRAPHY_SIZE_NAMES.MD]: 16,
    [TYPOGRAPHY_SIZE_NAMES.LG]: 22,
    [TYPOGRAPHY_SIZE_NAMES.XL]: 24,
}

export enum TYPOGRAPHY_COLOR_NAMES {
    BLACK = 'black',
    WHITE = 'white',
    INFO = 'info',
    SUCCESS = 'success',
    ERROR = 'error',
}

export const TYPOGRAPHY_COLOR = {
    [TYPOGRAPHY_COLOR_NAMES.BLACK]: '#000',
    [TYPOGRAPHY_COLOR_NAMES.WHITE]: '#fff',
    [TYPOGRAPHY_COLOR_NAMES.INFO]: '#1554f6',
    [TYPOGRAPHY_COLOR_NAMES.SUCCESS]: '#69b76c',
    [TYPOGRAPHY_COLOR_NAMES.ERROR]: 'red',
}

export interface TypographyProps extends TypographyStyleProps {
    children: string;
    style?: TextStyle;
}
