import {HeaderProps} from "@shared/ui/Header/Header.types";
import {ReactNode} from "react";

export interface PageLayoutProps extends HeaderProps {
    children: ReactNode;
}
