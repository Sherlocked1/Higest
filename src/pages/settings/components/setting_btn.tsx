import { Pressable, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from "../../../constants/colors";
import React from "react";

const SettingsButton = (props: SettingsButtonProps) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <View style={{flexDirection:'row'}}>
                <Ionicons name={props.icon} color={'white'} size={30} />
                <Text style={styles.text}>{props.title}</Text>
            </View>
            <Ionicons name='arrow-forward-sharp' color={'white'} size={30} />
        </TouchableOpacity>
    )
}

type SettingsButtonProps = {
    title: string,
    onPress: () => void,
    icon?: React.ComponentProps<typeof Ionicons>['name'],
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
    },
    text: {
        color: Colors.white,
        fontSize: 24,
        fontWeight: 'bold',
        marginHorizontal:10,
    }
})

export default SettingsButton;