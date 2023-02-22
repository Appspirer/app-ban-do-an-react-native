import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, FlatList, Image } from 'react-native'
import Avatar from "../../components/Avatar";
import Rating from "../../components/Rating";
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const data = [
    {
        id: 0,
        img: Images.cart_item2,
        name: "Vegan Chips",
        rate: 5,
        avatar: Images.avatar1,
        seller: "Jabel Ahmed",
        like: 4974,
        date: 28,
        month: "Jul",
        ingredient: "sweet/acid"
    },
    {
        id: 1,
        img: Images.favorite_item2,
        name: "Marbay",
        rate: 4.9,
        avatar: Images.avatar2,
        seller: "Sushama ",
        like: 2340,
        date: 26,
        month: "Jul",
        ingredient: "sweet/aroma"
    },
    {
        id: 2,
        img: Images.cart_item3,
        name: "Brazly",
        rate: 5,
        avatar: Images.avatar1,
        seller: "Jabel Ahmed",
        like: 4974,
        date: 10,
        month: "Jul",
        ingredient: "sweet/acid"
    }
]

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground source={Images.bg_info} style={styles.bg}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        {Icons.Icons({ name: "settings", height: 22.8, width: 24 })}
                    </TouchableOpacity>
                    <Text style={styles.logo}>Mine</Text>
                    <TouchableOpacity>
                        {Icons.Icons({ name: "chat", height: 22.57, width: 23.16 })}
                    </TouchableOpacity>
                </View>
                <Avatar shownDot={false} style={styles.avatar} />
                <Text style={styles.name}>Alex Suprun</Text>
                <View style={styles.info}>
                    <View>
                        <Text style={styles.number}>987</Text>
                        <Text style={styles.title}>Browse</Text>
                    </View>
                    <View>
                        <Text style={styles.number}>786</Text>
                        <Text style={styles.title}>Fans</Text>
                    </View>
                    <View>
                        <Text style={styles.number}>68</Text>
                        <Text style={styles.title}>Concern</Text>
                    </View>
                    <View>
                        <Text style={styles.number}>32</Text>
                        <Text style={styles.title}>Works</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.menu}>
                <TouchableOpacity style={styles.menu_item_container}>
                    {Icons.Icons({ name: "order", height: 32, width: 32 })}
                    <Text style={styles.menu_text}>Order</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu_item_container}>
                    {Icons.Icons({ name: "release", height: 23, width: 32 })}
                    <Text style={styles.menu_text}>Release</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu_item_container}>
                    {Icons.Icons({ name: "coupon", height: 26.13, width: 28 })}
                    <Text style={styles.menu_text}>Coupons</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu_item_container}>
                    {Icons.Icons({ name: "order", height: 28, width: 26 })}
                    <Text style={styles.menu_text}>Wallets</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.list_title_container}>
                <Text style={styles.list_title}>My Footprints</Text>
                <TouchableOpacity>
                    <Text style={styles.view}>View all</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.list_container}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({ item, index }) => {
                    return (
                        <View key={index} style={styles.item}>
                            <View>
                                <ImageBackground source={Images.calendar} style={styles.calendar}>
                                    <Text style={styles.month}>{item.month}</Text>
                                    <Text style={styles.date}>{item.date}</Text>
                                </ImageBackground>
                                <View style={[styles.line_vertical, { width: index === data.length - 1 ? 0 : 1 }]} />
                            </View>
                            <ImageBackground source={Images.bg_mn4} style={styles.bg_item}>
                                <Image source={item.img} style={styles.img} />
                            </ImageBackground>
                            <View style={styles.item_info}>
                                <Text style={styles.info_name}>{item.name}</Text>
                                <Text style={styles.ingredient}>{item.ingredient}</Text>
                                <Rating rate={item.rate}/>
                                <View style={styles.owner}>
                                    <View style={styles.row_owner}>
                                        <Image source={item.avatar} style={styles.avatar_info} />
                                        <Text style={styles.owner_name}>{item.seller}</Text>
                                    </View>
                                    <View style={styles.row_owner}>
                                        {Icons.Icons({ name: 'heart_focus', height: 12, width: 12.81 })}
                                        <Text style={styles.like}>{item.like}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}