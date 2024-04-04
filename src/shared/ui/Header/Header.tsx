import React from 'react';
import {HeaderProps} from './Header.types';
import {Card} from "@shared/ui/Card";
import {headerStylesCreator} from "@shared/ui/Header/Header.styles";

export const Header: React.FC<HeaderProps> = ({title, actions, styles}) => {
    return (
        <Card
            styles={headerStylesCreator({alignment: !actions})}
            title={title}
            actions={actions}
        />
    );
};
