import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import { Colors } from '../../constants/colors';
import { Article } from '../../models/article';
import ArticlesList from './articles_list';
import ArticleDetails from './article_details';

export default function Home() {
    const Stack = createNativeStackNavigator<HomeStackParams>();
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: Colors.primary,
            },
            headerTitleStyle:{
                color:Colors.accent
            }
        }}>
            <Stack.Screen options={{ headerShown: false, headerStyle: { backgroundColor: 'black' } }} component={ArticlesList} name='List' />
            <Stack.Screen options={{headerShown:Platform.OS != 'android'}} component={ArticleDetails} name='Details' />
        </Stack.Navigator>
    )
}

export type HomeStackParams = {
    List: undefined,
    Details: { article: Article }
};