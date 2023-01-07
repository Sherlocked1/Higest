import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SettingsButton from "./components/setting_btn";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from "../../constants/colors";
import SwitchButton from "./components/switch_btn";

const languages = [
    {label:'English',value:'en'},
    {label:'France',value:'fr'},
    {label:'Arabic',value:'ar'},
]

const Settings = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.innerContainer} contentContainerStyle={{ alignItems: 'center' }}>
                <Ionicons name="person" size={100} color='white' style={{ padding: 20 }} />
                <View style={styles.section}>
                    <SettingsButton title="Profile" icon="person-outline" onPress={() => { }} />
                    <SettingsButton title="Privacy" icon='shield-outline' onPress={() => { }} />
                </View>
                <View style={styles.section}>
                    <SwitchButton title="Dark mode" icon="moon-outline" onChange={() => { }} />
                    <SwitchButton title="Notifications" icon='notifications-outline' onChange={() => { }} />
                </View>
                <View style={styles.section}>
                    <SettingsButton title="About" icon="information-circle-outline" onPress={() => { }} />
                    <SettingsButton title="Sign out" icon="log-out-outline" onPress={() => { }} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        // alignItems: 'center',
        width: '100%',
        flex: 1,
    },
    section: {
        backgroundColor: Colors.grey,
        margin: 5,
        width: '90%',
        borderRadius: 10,
        // padding:5,
    }
})

export default Settings;