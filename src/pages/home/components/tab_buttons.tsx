import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Animated, Pressable, ScrollView, StyleProp, StyleSheet, Text, TextStyle, View, ViewProps, ViewStyle } from "react-native";

const TabButtons = (props: TabButtonProps) => {
    const [selectedButton, setSelectedButton] = useState<number>(0);

    const growAnimation = useRef(new Animated.Value(18)).current

    const enabledStyle = { color: props.enabledColor, fontSize: growAnimation };
    const disabledStyle = { color: props.disabledColor, fontSize: 18 };

    useEffect(()=>{
        growAnimation.setValue(18)
        Animated.timing(
            growAnimation,
            {
                toValue: 24,
                duration: 100,
                useNativeDriver: false
            }
        ).start();
    },[selectedButton])

    const buttonPressed = (index: number) => {
        setSelectedButton(index);
        props.onchange(index);
    }
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal style={[props.style, styles.container]}>
            {
                props.buttons.map((el, index) => {
                    return ( 
                        <Pressable key={index} style={{ marginHorizontal: 5 }} onPress={() => buttonPressed(index)}>
                            <Animated.Text  style={[props.textStyle, selectedButton == index ? enabledStyle : disabledStyle]} >
                                {el}
                            </Animated.Text>
                        </Pressable>
                    )
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
})

type TabButtonProps = {
    buttons: string[],
    onchange: (selectedCategory: number) => void,
    textStyle?: StyleProp<TextStyle>,
    enabledColor?: string,
    disabledColor?: string,
    style?: StyleProp<ViewStyle>
}

export default TabButtons;