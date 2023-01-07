import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native"
import { MyField } from "../../components/myfield"
import { Colors } from "../../constants/colors";
import ArticleView from "./components/article";
import TabButtons from "./components/tab_buttons";

import useListController from '../../controllers/list_controller'
import { categories } from "../../configs";

export default function ArticlesList() {

    const { articles, isLoading, setCategoryTo, loadMore, navigateTo } = useListController();

    const renderSpinner = () => <ActivityIndicator
        color="white"
        style={{ marginLeft: 8 }}
    />

    return (
        <View style={styles.innerContainer}>
            <View>
                <MyField placeholder='Search' style={styles.field}
                    textStyle={styles.textStyle} textColor={Colors.light_grey}
                    icon={{ name: 'search', size: 25 }}
                    onChange={(text) => console.log(text)}
                />

                <TabButtons buttons={categories}
                    onchange={(category) => { setCategoryTo(category) }}
                    textStyle={styles.textButtons}
                    disabledColor={Colors.grey}
                    enabledColor={Colors.light_grey}
                    style={{
                        marginVertical: 10, marginHorizontal: 10,
                    }}
                />
            </View>

            <FlatList style={{ flex: 1 }}
                keyExtractor={(_, index) => index.toString()}
                data={articles}
                renderItem={(data) => ArticleView(data.item, data.index, navigateTo)}
                onEndReached={loadMore}
            />

            {isLoading && renderSpinner()}

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        flex: 1
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerContainer: {
        flex: 1,
        paddingVertical: 20,
    },
    field: {
        backgroundColor: Colors.grey,
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 20,
        height: 50,
    },
    textStyle: {

    },
    textButtons: {
        fontSize: 18,
        fontWeight: '600',
    }
});