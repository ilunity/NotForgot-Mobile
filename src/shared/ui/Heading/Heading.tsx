import React from 'react';
import {HeadingProps} from './Heading.types';
import {Card} from "@shared/ui/Card";
import {headingStylesCreator} from "@shared/ui/Heading/Heading.styles";

export const Heading: React.FC<HeadingProps> = ({title, actions}) => {
    return (
        <Card
            styles={headingStylesCreator()}
            title={title}
            actions={actions}
        />
    );
};
