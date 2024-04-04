import {ColorValue} from "react-native";
import {TagStyles} from "@shared/icons/Tag/Tag.styles";

export interface TagProps {
    color: ColorValue;
    children: string;
    styles?: TagStyles;
}
