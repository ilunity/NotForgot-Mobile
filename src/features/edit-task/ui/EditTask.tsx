import React from 'react';
import {EditTaskProps} from './EditTask.types';
import {Button} from "@shared/ui/Button";
import {useGoTo} from "@shared/hooks";
import {PAGES_NAMES} from "@shared/store";
import {Edit} from "@shared/icons/Edit";

export const EditTask: React.FC<EditTaskProps> = ({task}) => {
    const goToEditTaskPage = useGoTo(PAGES_NAMES.EDIT_TASK, {task});

    return (
        <Button
            onPress={goToEditTaskPage}
            icon={<Edit/>}
            type={'default'}
        />
    );
};
