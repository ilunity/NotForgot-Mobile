import React, {useState} from 'react';
import {DatePickerProps} from './DatePicker.types';
import {TextInput} from "@shared/ui/TextInput";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Calendar} from "@shared/icons/Calendar";
import {datePickerStylesCreator} from "@shared/ui/DatePicker/DatePicker.styles";
import dateFormat from "dateformat";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import {InputError} from "@shared/ui/InputError";

export const DatePicker: React.FC<DatePickerProps> = (
    {
        date,
        onChange,
        label,
        styles,
        error = null,
    }
) => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const datePickerStyles = datePickerStylesCreator();

    const formatDate = (date: Date | null) => {
        if (!date) {
            return '';
        }

        return dateFormat(date, 'dd.mm.yyyy');
    }

    return (
        <View>
            <TouchableOpacity
                style={StyleSheet.compose(datePickerStyles.container, styles?.container)}
                onPress={() => {
                    setOpenModal(true);
                }}
            >
                <TextInput
                    styles={datePickerStyles.input}
                    value={formatDate(date)}
                    disabled
                    placeholder={label}
                />
                <Calendar/>
                {openModal &&
                    <RNDateTimePicker
                        onChange={(event, date) => {
                            onChange(date || new Date());
                            setOpenModal(false);
                        }}
                        value={date || new Date()}
                    />
                }
            </TouchableOpacity>
            <InputError error={error}/>
        </View>
    );
};
