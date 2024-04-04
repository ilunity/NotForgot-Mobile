import React from 'react';
import {GoBackButtonProps} from './GoBackButton.types';
import {ArrowLeft} from "@shared/icons";
import {Button, BUTTON_SIZE_NAMES} from "../Button";

export const GoBackButton: React.FC<GoBackButtonProps> = ({onPress}) => {
    return (
        <Button
            onPress={onPress}
            icon={<ArrowLeft/>}
            type={'default'}
            size={BUTTON_SIZE_NAMES.SM}
        />
    );
};
