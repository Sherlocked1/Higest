import { Image, StyleSheet, useWindowDimensions, Text, View, TouchableOpacity, Linking } from "react-native";
import { HomeStackParams } from './home';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Colors } from "../../constants/colors";
import {
    BottomSheetModalProvider,
    BottomSheetScrollView
} from '@gorhom/bottom-sheet';
import BottomSheet from '@gorhom/bottom-sheet';
import { useRef, useCallback, useMemo, useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type Props = NativeStackScreenProps<HomeStackParams, 'Details'>;

const ArticleDetails = ({ route, navigation }: Props) => {

    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);

    // variables
    const snapPoints = useMemo(() => ['75%', '100%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    useEffect(() => {
        bottomSheetRef.current?.expand();
    }, [])
    const dimensions = useWindowDimensions();
    const article = route.params.article;

    const openLink =() => {
        let url = article.link;
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log('can\'t open url', url)
            }
        })
    }

    return (
        <BottomSheetModalProvider>
            <View style={styles.container}>
                <Image source={{ uri: article.image_url, height: dimensions.height * 0.6, width: dimensions.width }} />

                <GestureHandlerRootView style={styles.bottomSheetStyle}>
                    <BottomSheet
                        ref={bottomSheetRef}
                        index={0}
                        style={{ borderRadius: 20 }}
                        snapPoints={snapPoints}
                        handleStyle={styles.handlerStyle}
                        onChange={handleSheetChanges}
                    >
                        <BottomSheetScrollView style={styles.contentContainer}>
                            <Text style={styles.title}>{article.title}</Text>
                            <Text style={styles.date}>{article.pubDate}</Text>
                            {
                                article.creator != null &&
                                <Text style={styles.date}>created by : {article.creator.join()}</Text>
                            }
                            <Text style={styles.content}>{article.content}</Text>

                            <TouchableOpacity style={styles.btn} onPress={() => {openLink()}}>
                                <Text style={styles.btnText}>Open in browser</Text>
                            </TouchableOpacity>
                        </BottomSheetScrollView>
                    </BottomSheet>
                </GestureHandlerRootView>

            </View>
        </BottomSheetModalProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: Colors.primary,
        paddingHorizontal: 10,
    },
    title: {
        color: Colors.white,
        fontSize: 20,
        paddingVertical: 10,
    },
    date: {
        fontSize: 14,
        color: Colors.light_grey,
        marginVertical: 5,
    },
    content: {
        fontSize: 14,
        color: Colors.white,
        fontWeight: '300',
        marginVertical: 5,
    },
    handlerStyle: {
        backgroundColor: Colors.primary, borderTopLeftRadius: 10, borderTopRightRadius: 10,
    },
    btnText: {
        color: Colors.accent,
        fontSize: 14,
        fontWeight: '400'
    },
    btn: {
        alignSelf: 'flex-end',
        padding: 10,

    },
    bottomSheetStyle:{ height: '70%', position: 'absolute', bottom: 0, left: 0, right: 0 }
})

export default ArticleDetails;