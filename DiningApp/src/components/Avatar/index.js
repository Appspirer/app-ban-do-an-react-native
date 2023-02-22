import React from "react";
import { View, Image } from 'react-native'
import Images from "../../themes/Images";
import styles from "./styles";

export default function Avatar({ shownDot = true, style }) {
    return (
        <View style={[styles.avatar_container, style]}>
            <Image source={Images.avatar} style={styles.avatar} />
            {shownDot && <View style={styles.dot} />}
        </View>
    )
}