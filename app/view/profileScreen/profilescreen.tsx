import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

const ProfileScreen = (props: any)=> {
    return(
        <View style={styles.container}>
            <TouchableOpacity >
                <View>
                    <Text>Drawer</Text>
                </View>
            </TouchableOpacity>
            <Text>ProfileScreen</Text>
            <TouchableOpacity>
                <Text>Go to HomeScreen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileScreen;