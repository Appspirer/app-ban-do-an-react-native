import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, FlatList, Image } from 'react-native'
import Header from "../../components/Header";
import Images from "../../themes/Images";
import styles from "./styles";

const data = [
    {
        id: 0,
        name: "Jabel Ahmed ",
        avatar: Images.avatar1,
        vip: 1,
        level: 2,
        address: "Sylhet",
        time_cmt: "1 hour ago",
        content: "This time to buy fruit is not bad, good happy, note buyers pack good point, really a fruit bag two pearl bags, green apples are powdered, thought it is crisp that kind of it! But it's also delicious."
    },
    {
        id: 1,
        name: "Anup ",
        avatar: Images.avatar3,
        vip: 0,
        level: 1,
        address: "Bangladesh",
        time_cmt: "1 day ago",
        content: "Apple received, very large and brittle, water is also sufficient, really delicious, next time also come to your home to buy!"
    },
    {
        id: 2,
        name: "Mahady Hasan Rony ",
        avatar: Images.avatar4,
        vip: 0,
        level: 1,
        address: "Sylhet",
        time_cmt: "4 day ago",
        content: "Praise! Praise! Praise!"
    }
]

export default function ProductDetails({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={Images.bg_linear}>
                <ImageBackground source={Images.product_details_bg} style={styles.bg}>
                    <Header onBack={() => navigation.goBack()} />
                </ImageBackground>
            </ImageBackground>
            <View style={styles.info_container}>
                <Text style={styles.name}>New Zealand Gara</Text>
                <Text style={styles.description}>Sour sweet delicious, beauty and beauty</Text>
                <View style={styles.price_container}>
                    <Text style={styles.new_price}>$ 16.9/catty</Text>
                    <Text style={styles.old_price}>$ 29.9/catty</Text>
                </View>
                <View style={styles.status_container}>
                    <Text style={styles.status_text}>Sold 2394</Text>
                    <Text style={styles.status_text}>New Zealand</Text>
                </View>
            </View>
            <View style={styles.promotion_container}>
                <View style={styles.promotion}>
                    <Text style={styles.promotion_text}>Promotion</Text>
                    <View style={styles.minus}>
                        <Text style={styles.minus_text}>Full minus</Text>
                    </View>
                    <Text style={styles.promotion_value} numberOfLines={1}>Shop full 58 minus 5 </Text>
                </View>
                <View style={[styles.promotion, { marginTop: 20 }]}>
                    <Text style={[styles.promotion_text, { marginRight: 20 }]}>Deliver to</Text>
                    <Text style={styles.promotion_value} numberOfLines={1}>San Francisco, CA </Text>
                </View>
            </View>
            <View style={styles.cmt_container}>
                <View style={styles.cmt_row}>
                    <Text style={styles.cmt_text}>Evaluation Of Sun Sheets</Text>
                    <TouchableOpacity>
                        <Text style={styles.view}>View all</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    style={styles.list}
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.item}>
                                <View style={styles.info}>
                                    <Image source={item.avatar} style={styles.avatar} />
                                    <View style={{ marginLeft: 10 }}>
                                        <View style={styles.name_container}>
                                            <Text style={styles.name_info}>{item.name}</Text>
                                            <View>
                                                {item.vip === 1 &&
                                                    <View style={styles.vip}>
                                                        <Text style={styles.vip_text}>VIP</Text>
                                                    </View>}
                                            </View>
                                            <Text style={styles.level_vip}>LV.{item.level}</Text>
                                        </View>
                                        <View style={styles.time}>
                                            <Text style={styles.time_cmt}>{item.address}</Text>
                                            <Text style={[styles.time_cmt, { marginLeft: 10 }]}>{item.time_cmt}</Text>
                                        </View>
                                    </View>
                                </View>
                                <Text style={styles.content}>{item.content}</Text>
                            </View>
                        )
                    }}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Add to the shopping cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}