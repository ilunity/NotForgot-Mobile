import {ReactNode} from "react";
import {SwipeToDeleteStyles} from "@shared/ui/SwipeToDelete/SwipeToDelete.styles";

export interface SwipeToDeleteProps {
    children: ReactNode;
    styles?: SwipeToDeleteStyles;
    onSwipeableOpen: () => void;
}
