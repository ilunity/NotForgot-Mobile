import {TextStyle} from "react-native";
import {FONTS_NAMES} from "../../consts";
import {TYPOGRAPHY_COLOR, TYPOGRAPHY_COLOR_NAMES, TYPOGRAPHY_SIZE, TYPOGRAPHY_SIZE_NAMES} from "./Typography.types";

export interface TypographyStyleProps {
    strong?: boolean;
    size?: `${TYPOGRAPHY_SIZE_NAMES}`;
    color?: `${TYPOGRAPHY_COLOR_NAMES}`;
}

export const typographyStyleCreator = (
    {
        strong = false,
        size = TYPOGRAPHY_SIZE_NAMES.MD,
        color = TYPOGRAPHY_COLOR_NAMES.BLACK
    }: TypographyStyleProps
): TextStyle => ({
    fontFamily: strong ? FONTS_NAMES.NUNITO_BOLD : FONTS_NAMES.NUNITO_REGULAR,
    fontSize: TYPOGRAPHY_SIZE[size],
    color: TYPOGRAPHY_COLOR[color],
});
