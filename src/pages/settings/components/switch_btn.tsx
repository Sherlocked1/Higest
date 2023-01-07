import { Pressable, StyleSheet, TouchableOpacity, Text, View, Switch } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from "../../../constants/colors";
import React, { useState } from "react";

const SwitchButton = (props: SettingsButtonProps) => {

    const [isEnabled,setIsEnabled] = useState<boolean>(props.defaultValue ?? false);

    const changeValue = (value:boolean) => {
        setIsEnabled(value);
        props.onChange(value);
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Ionicons name={props.icon} color={'white'} size={30} />
                <Text style={styles.text}>{props.title}</Text>
            </View>
            <View>
                <Switch
                    trackColor={{ false: Colors.light_grey, true: Colors.light_grey }}
                    thumbColor={isEnabled ? Colors.accent : Colors.primary}
                    ios_backgroundColor={Colors.light_grey}
                    onValueChange={changeValue}
                    value={isEnabled}
                />
            </View>
        </View>
    )
}

type SettingsButtonProps = {
    title: string,
    defaultValue?:boolean,
    onChange: (status: boolean) => void,
    icon?: React.ComponentProps<typeof Ionicons>['name'],
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.grey,
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
    },
    titleContainer: {
        flexDirection: 'row'
    },
    text: {
        color: Colors.white,
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal: 10,
    }
    
})

export default SwitchButton;