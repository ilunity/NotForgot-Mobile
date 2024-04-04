import {ReactNode} from "react";
import {ListStyleProps} from "@shared/ui/List/List.styles";
import {ViewStyle} from "react-native";

export interface ListProps extends ListStyleProps {
    children: ReactNode;
    styles?: ViewStyle;
}
