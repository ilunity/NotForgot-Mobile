import React, {useState} from 'react';
import {SelectProps} from './Select.types';
import {Pressable, StyleSheet, View} from "react-native";
import {Typography} from "@shared/ui/Typography";
import {ArrowDropBottom} from "@shared/icons";
import {selectStylesCreator} from "@shared/ui/Select/Select.styles";
import {SelectItem} from "@shared/ui/Select/SelectItem";
import {SelectItemValue} from "@shared/ui/Select/SelectItem/SelectItem.types";
import {InputError} from "@shared/ui/InputError";

export const Select: React.FC<SelectProps> = (
    {
        label,
        items,
        selectedItem,
        onSelect,
        styles,
        error = null,
    }
) => {
    const [openDropDown, setOpenDropDown] = useState<boolean>(false);
    const selectStyles = selectStylesCreator({openDropDown, itemsCount: items.length});

    const handleSelect = (item: SelectItemValue) => {
        onSelect(item);
        setOpenDropDown(false);
    }

    return (
        <View style={StyleSheet.compose(selectStyles.container, styles?.container)}>
            <View>
                <Pressable
                    style={StyleSheet.compose(selectStyles.select, styles?.select)}
                    onPress={() => setOpenDropDown(prevState => !prevState)}
                >
                    <Typography>
                        {selectedItem ? selectedItem.value : label}
                    </Typography>
                    <ArrowDropBottom/>
                </Pressable>
                {openDropDown &&
                    <View style={StyleSheet.compose(selectStyles.dropDownContainer, styles?.dropDownContainer)}>
                        {items.map(item => (
                            <SelectItem
                                selected={item.key === selectedItem?.key}
                                key={item.key}
                                item={item}
                                onPress={() => handleSelect(item)}
                            />
                        ))}
                    </View>
                }
            </View>
            <InputError error={error}/>
        </View>
    );
};
