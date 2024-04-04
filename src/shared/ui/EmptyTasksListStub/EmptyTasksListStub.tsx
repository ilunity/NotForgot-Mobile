import React from 'react';
import {Image, View} from "react-native";
import {Typography} from "@shared/ui/Typography";
import {Asset} from "expo-asset";
import {emptyTasksListStubStylesCreator} from "@shared/ui/EmptyTasksListStub/EmptyTasksListStub.styles";

export const EmptyTasksListStub: React.FC = () => {
    const emptyTasksListStubStyles = emptyTasksListStubStylesCreator();

    return (
        <View style={emptyTasksListStubStyles.container}>
            <Image
                style={emptyTasksListStubStyles.image}
                source={{uri: Asset.fromModule(require('@assets/icons/empty-list-stub.png')).uri}}
            />
            <Typography>
                Пока что у вас нет никаких дел.
            </Typography>
            <Typography>
                Хорошего отдыха!
            </Typography>
        </View>
    );
};
