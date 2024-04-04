import React, {useState} from 'react';
import {TextAreaProps} from './TextArea.types';
import {StyleSheet, TextInput as RNTextInput, TextStyle, View} from "react-native";
import {textAreaStylesCreator} from "@shared/ui/TextArea/TextArea.styles";
import {Typography} from "@shared/ui/Typography";
import {InputError} from "@shared/ui/InputError";

export const TextArea: React.FC<TextAreaProps> = (
    {
        value,
        onChange,
        label,
        placeholder,
        styles,
        error = null,
        onBlur
    }
) => {
    const [focused, setFocused] = useState<boolean>(false);
    const textAreaStyles = textAreaStylesCreator({focused});

    return (
        <View style={StyleSheet.compose(textAreaStyles.container, styles?.container)}>
            {label &&
                <Typography
                    style={StyleSheet.compose(textAreaStyles.label, styles?.label) as TextStyle}
                >
                    {label}
                </Typography>
            }
            <RNTextInput
                multiline={true}
                numberOfLines={2}
                style={StyleSheet.compose(textAreaStyles.input, styles?.input)}
                placeholder={placeholder}
                underlineColorAndroid="transparent"
                onChangeText={onChange}
                value={value}
                onFocus={() => setFocused(true)}
                onBlur={() => {
                    setFocused(false);
                    onBlur?.();
                }}
                selectionColor={'#1554f6'}
            />
            <View style={textAreaStyles.infoPanel}>
                <InputError error={error}/>
                <Typography
                    style={StyleSheet.compose(textAreaStyles.symbolsCounter, styles?.symbolsCounter) as TextStyle}>
                    {`${value.length}`}
                </Typography>
            </View>
        </View>
    );
};
