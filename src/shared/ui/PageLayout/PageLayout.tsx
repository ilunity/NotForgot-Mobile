import React, {useState} from 'react';
import {PageLayoutProps} from './PageLayout.types';
import {LayoutChangeEvent, ScrollView, StyleSheet, View} from "react-native";
import {Header} from "@shared/ui/Header";
import {pageLayoutStylesCreator} from "@shared/ui/PageLayout/PageLayout.styles";

export const PageLayout: React.FC<PageLayoutProps> = ({children, ...headerProps}) => {
    const [slideHeight, setSlideHeight] = useState<number>(0);

    const pageLayoutStyles = pageLayoutStylesCreator();

    const updateHeight = (e: LayoutChangeEvent) => {
        setSlideHeight(prevState => prevState === 0 ? e.nativeEvent.layout.height : prevState);
    };

    return (
        <View style={pageLayoutStyles.pageLayout}>
            <Header {...headerProps}/>
            <ScrollView onLayout={updateHeight}>
                <View style={StyleSheet.compose(pageLayoutStyles.contentContainer, {minHeight: slideHeight - 16})}>
                    {children}
                </View>
            </ScrollView>
        </View>
    );
};
