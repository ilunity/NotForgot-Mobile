import React, {useCallback} from 'react';
import {FontProviderProps} from './FontProvider.types';
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import {View} from "react-native";
import {styles} from "./FontProvider.styles";
import {FONTS_NAMES} from "@shared/consts";

export const FontProvider: React.FC<FontProviderProps> = ({children}) => {
    const [fontsLoaded, fontError] = useFonts({
        [FONTS_NAMES.NUNITO_REGULAR]: require('@assets/fonts/nunito/Nunito-Regular.ttf'),
        [FONTS_NAMES.NUNITO_BOLD]: require('@assets/fonts/nunito/Nunito-Bold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <View onLayout={onLayoutRootView} style={styles.layout}>
            {children}
        </View>
    );
};
