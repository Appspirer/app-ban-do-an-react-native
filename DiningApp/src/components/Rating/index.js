import React from "react";
import { View, Text } from 'react-native'
import Colors from "../../themes/Colors";
import Icons from "../../themes/Icons";
import styles from "./styles";

export default function Rating({ rate, size = 10.48, textColor = Colors.gray_text2 }) {

    let arr = [...Array(parseInt(rate)).keys()]
    let arr2 = [...Array(5 - parseInt(rate)).keys()]

    return (
        <View style={styles.rating_container}>
            {arr.map((item, index) => {
                return (
                    <View key={index}>
                        {Icons.Icons({ name: "star_gold", height: size, width: size })}
                    </View>
                )
            })}
            {arr2.map((item, index) => {
                return (
                    <View key={index}>
                        {Icons.Icons({ name: "star", height: size, width: size })}
                    </View>
                )
            })}
            <Text style={[styles.rating, { color: textColor }]}>{rate.toFixed(1)}</Text>
        </View>
    )
}