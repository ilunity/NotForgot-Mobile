import React from 'react';
import {PriorityTagProps} from './PriorityTag.types';
import {Tag} from "@shared/ui/Tag";
import {TASK_PRIORITY_COLOR, TASK_PRIORITY_NAME} from "@entities/task/model";

export const PriorityTag: React.FC<PriorityTagProps> = ({priority, styles}) => {
    return (
        <Tag
            color={TASK_PRIORITY_COLOR[priority]}
            styles={styles}
        >
            {TASK_PRIORITY_NAME[priority]}
        </Tag>
    );
};
