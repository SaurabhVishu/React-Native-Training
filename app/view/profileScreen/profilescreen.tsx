import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

const ProfileScreen = (props: any)=> {
    return(
        <View style={styles.container}>
            <Text>ProfileScreen</Text>
            <TouchableOpacity>
                <Text>Go to HomeScreen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileScreen;