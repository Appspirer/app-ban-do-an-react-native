import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'
import Icons from "../../themes/Icons";
import styles from "./styles";

export default function Header({onBack}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button_container} onPress={onBack}>
                {Icons.Icons({ name: "back", height: 16.63, width: 9 })}
            </TouchableOpacity>
            <View style={styles.header_right}>
                <TouchableOpacity style={styles.button_container}>
                    {Icons.Icons({ name: "heart_button", height: 18.85, width: 20 })}
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button_container, { marginLeft: 12 }]}>
                    {Icons.Icons({ name: "share", height: 20, width: 20 })}
                </TouchableOpacity>
            </View>
        </View>
    )
}