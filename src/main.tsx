import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

import { Colors } from "./constants/colors";
import type { RouteProp } from '@react-navigation/core'
import Home from './pages/home/home';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Settings from './pages/settings/settings';

const Main = () => {

    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: Colors.primary
        },
    };

    const Tab = createBottomTabNavigator<RootStackParamList>();

    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer theme={MyTheme}>
                <StatusBar barStyle={'light-content'} />
                <Tab.Navigator screenOptions={options}>
                    <Tab.Screen options={{ headerShown: false }} component={Home} name='Home' />
                    <Tab.Screen options={{ headerShown: false }} component={Settings} name='Settings' />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default Main;

type RootStackParamList = {
    Home: undefined,
    Settings: undefined
  };


const options: ((props: {
    route: RouteProp<RootStackParamList, keyof RootStackParamList>;
    navigation: any;
}) => BottomTabNavigationOptions) = ({ route }) => {
    return {
      tabBarIcon: ({ focused, color, size }) => {
        let iconName:React.ComponentProps<typeof Ionicons>['name'];

        switch (route.name) {
          case 'Home':
            iconName = focused ? 'home' : 'home-outline'
            break;
          case 'Settings':
            iconName = focused ? 'cog-outline':'cog'
            break;
          default:
            iconName = 'home'
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarStyle: {
        backgroundColor: Colors.primary,
        borderTopWidth:0,
        // height:60,
      },
      tabBarActiveTintColor: Colors.accent,
      tabBarInactiveTintColor: Colors.light_grey
    }
  }


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
        flex: 1
    },
});