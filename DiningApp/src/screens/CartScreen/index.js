import React from "react";
import { View, Text, TouchableOpacity, FlatList, ImageBackground, Image } from 'react-native'
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const data = [
    {
        id: 0,
        img: Images.favorite_item2,
        name: "Marbay",
        price: "$9.9/bag",
        quality: 2
    },
    {
        id: 1,
        img: Images.cart_item1,
        name: "Bzzz Honey",
        price: "$60.5/tank",
        quality: 1
    },
    {
        id: 2,
        img: Images.cart_item2,
        name: "Vegan Chips",
        price: "$12.5/bag",
        quality: 3
    },
    {
        id: 3,
        img: Images.cart_item2,
        name: "Vegan Chips",
        price: "$12.5/bag",
        quality: 3
    },
    {
        id: 4,
        img: Images.cart_item2,
        name: "Vegan Chips",
        price: "$12.5/bag",
        quality: 3
    },
]

export default function CartScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ width: 30 }} />
                <Text style={styles.cart}>Cart</Text>
                <TouchableOpacity>
                    <Text style={styles.edit}>Edit</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.event}>
                <View style={styles.left_event}>
                    <View style={styles.left_event_text_container}>
                        <Text style={styles.left_event_text}>Full minus</Text>
                    </View>
                    <Text style={styles.countdown_text} numberOfLines={1}>Shop full 58 minus 5</Text>
                </View>
                <TouchableOpacity style={styles.right_event}>
                    <Text style={styles.view_event}>View events</Text>
                    {Icons.Icons({ name: "next_arrow", height: 12, width: 12 })}
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.list_container}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.item}>
                            <ImageBackground source={Images.bg_mn3} style={styles.bg}>
                                <Image source={item.img} style={styles.img} />
                            </ImageBackground>
                            <View style={styles.info_container}>
                                <View style={{}}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.price}>{item.price}</Text>
                                </View>
                                <View style={styles.quality_container}>
                                    <TouchableOpacity style={styles.button_container}>
                                        {Icons.Icons({ name: "plus", height: 10, width: 10 })}
                                    </TouchableOpacity>
                                    <Text style={styles.quality}>{item.quality}</Text>
                                    <TouchableOpacity style={styles.button_container}>
                                        {Icons.Icons({ name: "minus", height: 10, width: 10 })}
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )
                }}
            />
            <View style={styles.total_container}>
                <Text style={styles.text}>Cart Total</Text>
                <Text style={styles.total_price}>$92.8</Text>
            </View>
            <TouchableOpacity style={styles.checkout}>
                <Text style={styles.checkout_text}>Checkout</Text>
            </TouchableOpacity>
        </View>
    )
}