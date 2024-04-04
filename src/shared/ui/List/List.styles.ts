import {ViewStyle} from "react-native";


export interface ListStyleProps {
    gap: '2' | '4' | '8' | '16';
}

export const listStyleCreator = ({gap}:ListStyleProps): ViewStyle => ({
    gap: +gap,
})
