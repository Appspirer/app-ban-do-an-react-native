import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native'
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const data = [
    {
        id: 0,
        name: "Natnudo Beef",
        price: "$ 20.9/bag",
        img: Images.favorite_item1
    },
    {
        id: 1,
        name: "Marbay",
        price: "$ 9.9/bag",
        img: Images.favorite_item2
    },
    {
        id: 2,
        name: "Mini Hojas",
        price: "$ 13.9/bag",
        img: Images.favorite_item3
    },
    {
        id: 3,
        name: "Krewetkl Shrimps",
        price: "$ 15.9/bag",
        img: Images.favorite_item4
    },
    {
        id: 4,
        name: "Ryazanski",
        price: "$ 10.9/bag",
        img: Images.favorite_item5
    },
    {
        id: 5,
        name: "Yate Komo",
        price: "$ 12.9/Barrel",
        img: Images.favorite_item6
    },

]

export default function FavoriteScreen() {

    const [index, setIndex] = useState(0)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => setIndex(0)}>
                    <Text style={index === 0 ? styles.commodity : styles.share}>Commodity</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIndex(1)}>
                    <Text style={index === 1 ? styles.commodity : styles.share}>Share</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.list_container}
                data={data}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={styles.item}>
                            <ImageBackground source={Images.bg_mn2} style={styles.bg}>
                                <Text style={styles.parcels}>Parcels</Text>
                                <Image style={styles.img} source={item.img} />
                                <Text style={styles.name}>{item.name}</Text>
                                <View style={styles.row_info}>
                                    <Text style={styles.price}>{item.price}</Text>
                                    <TouchableOpacity>
                                        {Icons.Icons({ name: "cart_button", height: 15, width: 16 })}
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}