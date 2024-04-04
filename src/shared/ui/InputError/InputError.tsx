import React from 'react';
import {InputErrorProps} from './InputError.types';
import {Typography} from "@shared/ui/Typography";

export const InputError: React.FC<InputErrorProps> = ({error}) => {

    if (!error) {
        return <></>;
    }

    return (
        <Typography color={'error'}>
            {error}
        </Typography>
    );
};
