import { Alert, Image, Linking, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../constants/colors";
import { Article } from "../../../models/article";

const ArticleView = (item: Article, index: number,navigateTo:(article:Article)=>void) => {

    const openUrl = (url: string) => {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log('can\'t open url', url)
            }
        })
    }

    const clickedArticle = () => {
        if (item.content !== null) {
            navigateTo(item);
        } else {
            Alert.alert(
                "No content available",
                "This article's content is missing do you wanna visit the article's webpage ?",
                [
                    {
                        text: "Cancel",
                        style: "cancel"
                    },
                    {
                        text: "OK",
                        onPress: () => openUrl(item.link)
                    }
                ]
            );
        }
    }

    return (
        <Pressable onPress={clickedArticle} android_ripple={{ color: Colors.light_grey, borderless: false }} key={index} style={styles.container}>
            <Image style={styles.image}
                source={{ uri: item.image_url }}
            />
            <View style={{ flex: 1, marginHorizontal: 10 }}>
                <Text numberOfLines={2} style={[styles.titleText]}>{item.title}</Text>
                <Text numberOfLines={3} style={styles.descriptionText}>{item.description}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
        height: 100,
        padding: 10,
    },
    image: {
        aspectRatio: 1 / 1,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    titleText: {
        color: Colors.white,
    },
    descriptionText: {
        color: Colors.light_grey
    }
});

export default ArticleView;