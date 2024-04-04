import {ReactNode} from "react";
import {CardActionStyleProps, CardStyles} from "@shared/ui/Card/Card.styles";

interface CardActions {
    right?: ReactNode;
    left?: ReactNode;
}

export interface CardProps {
    title: string;
    content?: string;
    actions?: CardActions;
    styles?: CardStyles;
    onPress?: () => void;
}

export interface CardActionProps extends CardActionStyleProps {
    action: ReactNode;
}
