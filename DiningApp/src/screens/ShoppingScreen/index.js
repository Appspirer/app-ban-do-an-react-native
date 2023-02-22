import React, { useState } from "react";
import { View, Text, ImageBackground, TextInput, FlatList, ScrollView, TouchableOpacity, Image } from 'react-native'
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";

const menuData = [
    {
        id: 0,
        title: "VIP",
        ic: "vip",
    },
    {
        id: 1,
        title: "Seasonal Fresh",
        ic: "seasonal",
    },
    {
        id: 2,
        title: "Baking",
        ic: "baking",
    },
    {
        id: 3,
        title: "Kitchen Appliances",
        ic: "kitchen",
    },
    {
        id: 4,
        title: "Grain",
        ic: "grain",
    },
    {
        id: 5,
        title: "Health",
        ic: "health",
    },
    {
        id: 6,
        title: "Tea Drinking",
        ic: "tea",
    },
    {
        id: 7,
        title: "All",
        ic: "all",
    },
]

const killData = [
    {
        id: 0,
        img: Images.kill_item1,
        title: "Natnudo Beef",
        price: "$ 15.9/catty"
    },
    {
        id: 1,
        img: Images.kill_item2,
        title: "Krewetkl Shrimps",
        price: "$ 9.9/package"
    },
    {
        id: 2,
        img: Images.kill_item3,
        title: "Movenpick",
        price: "$ 15.9/catty"
    }
]

const weeklyData = [
    {
        id: 0,
        img: Images.weekly_item1,
        title: "Gala",
        price: "$ 16.9/catty"
    },
    {
        id: 1,
        img: Images.weekly_item2,
        title: "Cherry",
        price: "$30.9/catty"
    },
    {
        id: 2,
        img: Images.weekly_item3,
        title: "Tomato",
        price: "$ 16.9/catty"
    }
]

export default function ShoppingScreen({ navigation }) {

    const [searchText, setSearchText] = useState('')

    return (
        <ScrollView style={styles.container}>
            <ImageBackground style={styles.bg} source={Images.bg_cart}>
                <View style={styles.top}>
                    <Text style={styles.mall}>Mall</Text>
                    <View style={styles.search_container}>
                        {Icons.Icons({ name: "search", height: 16, width: 16 })}
                        <TextInput
                            style={styles.text_input}
                            placeholder="Search for menu，ingredients"
                            value={searchText}
                            onChangeText={setSearchText}
                        />
                    </View>
                </View>
                <View style={styles.menu}>
                    <ScrollView contentContainerStyle={styles.menu_container}>
                        {menuData.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} style={styles.item}>
                                    {Icons.Icons({ name: item.ic, height: 36, width: 36 })}
                                    <Text style={styles.text}>{item.title}</Text>
                                </TouchableOpacity>
                            )
                        })}
                    </ScrollView>
                </View>
            </ImageBackground>
            <View>
                <View style={styles.row_title}>
                    <Text style={styles.title}>Kill Every Second</Text>
                    <TouchableOpacity>
                        <Text style={styles.view}>View all</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.list_row}>
                    {killData.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={[styles.row_item, { paddingRight: index === killData.length - 1 ? 48 : 0 }]}
                                onPress={() => navigation.navigate('ProductDetails')}
                            >
                                <ImageBackground source={Images.bg_mn1} style={styles.bg_mn}>
                                    <Text style={styles.parcels}>Parcels</Text>
                                    <Image source={item.img} style={styles.img} />
                                    <Text style={styles.row_item_title}>{item.title}</Text>
                                    <View style={styles.price_container}>
                                        <Text style={styles.price}>{item.price}</Text>
                                        <TouchableOpacity>
                                            {Icons.Icons({ name: "heart_button", height: 11, width: 11.81 })}
                                        </TouchableOpacity>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
            <View style={{ marginBottom: 50 }}>
                <View style={styles.row_title}>
                    <Text style={styles.title}>Weekly Bursts</Text>
                    <TouchableOpacity>
                        <Text style={styles.view}>View all</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.list_row}>
                    {weeklyData.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={[styles.weekly_row_item, { marginRight: index === killData.length - 1 ? 48 : 0 }]}>
                                <Text style={styles.weekly_title}>{item.title}</Text>
                                <Text style={styles.weekly_price}>{item.price}</Text>
                                <Image style={styles.weekly_img} source={item.img} />
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
        </ScrollView>

    )
}