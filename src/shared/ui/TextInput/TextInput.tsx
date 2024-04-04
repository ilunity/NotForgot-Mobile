import React, {useState} from 'react';
import {TextInputProps} from './TextInput.types';
import {textInputStylesCreator} from "@shared/ui/TextInput/TextInput.styles";
import {StyleSheet, TextInput as RNTextInput, TextStyle, View} from 'react-native'
import {Typography} from "@shared/ui/Typography";
import {InputError} from "@shared/ui/InputError";

export const TextInput: React.FC<TextInputProps> = (
    {
        value, onChange,
        label,
        placeholder,
        styles,
        disabled = false,
        error = null,
        onBlur
    }
) => {
    const [focused, setFocused] = useState<boolean>(false);
    const textInputStyles = textInputStylesCreator({focused});

    return (
        <View style={StyleSheet.compose(textInputStyles.container, styles?.container)}>
            {label &&
                <Typography
                    style={StyleSheet.compose(textInputStyles.label, styles?.label) as TextStyle}
                    strong
                >
                    {label}
                </Typography>
            }
            <RNTextInput
                style={StyleSheet.compose(textInputStyles.input, styles?.input)}
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
                editable={!disabled}
                selectTextOnFocus={!disabled}
            />
            <InputError error={error}/>
        </View>
    );
};
