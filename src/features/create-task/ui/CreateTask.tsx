import React from 'react';
import {CreateTaskProps} from './CreateTask.types';
import {FloatButton} from "@shared/ui/FloatButton";
import {Add} from "@shared/icons";
import {PAGES_NAMES} from "@shared/store";
import {useGoTo} from "@shared/hooks";

export const CreateTask: React.FC<CreateTaskProps> = () => {
    const goToCreateTaskPage = useGoTo(PAGES_NAMES.CREATE_TASK);

    return (
        <FloatButton
            icon={<Add/>}
            type={"primary"}
            size={'lg'}
            onPress={goToCreateTaskPage}
        />
    );
};
