import React from "react";
import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native'
import Header from "../../components/Header";
import Rating from "../../components/Rating";
import Colors from "../../themes/Colors";
import Images from "../../themes/Images";
import styles from "./styles";

const data = [
    {
        id: 0,
        name: "Squid",
        price: "$ 45/catty",
        img: Images.squid,
        bg: 'rgba(196,154,129,0.3)'
    },
    {
        id: 0,
        name: "Cucumber",
        price: "$ 4/catty",
        img: Images.cucumber,
        bg: 'rgba(87,128,65,0.3)'
    },
    {
        id: 0,
        name: "Shallot",
        price: "$ 10/catty",
        img: Images.shallot,
        bg: 'rgba(175,70,144,0.3)'
    },
    {
        id: 0,
        name: "pepper",
        price: "$ 6/catty",
        img: Images.pepper,
        bg: 'rgba(129,164,96,0.3)'
    }
]

export default function FoodDetails({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={Images.food_details_bg} style={styles.bg}>
                <Header onBack={() => navigation.goBack()} />
            </ImageBackground>
            <ScrollView style={styles.content_container}>
                <View style={{ paddingHorizontal: 32 }}>
                    <Text style={styles.name}>Ojingeo Muchim</Text>
                    <Rating rate={5} size={12} textColor={Colors.gray_text4} />
                    <Text style={styles.title}>Introduction</Text>
                    <Text style={[styles.content, { marginTop: 10 }]}>Ojingeo muchim is a spicy, sweet and tangy dish that’s made with boiled squid and fresh vegetables. The perfect blend of spicy, sweet, and sour tastes in this dish will surely increase your appetite.</Text>

                    <View style={styles.row}>
                        <Text style={[styles.title, { marginTop: 0 }]}>Introduction</Text>
                        <TouchableOpacity>
                            <Text style={styles.view}>View all</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.content, { marginTop: 10 }]}>1 medium squid about 14 ounces</Text>
                    <Text style={styles.content}>1 kirby cucumber or 1/2 Korean cucumber thinly sliced</Text>
                    <Text style={styles.content}>1/4 medium red onion thinly sliced</Text>
                    <Text style={styles.content}>a few stalks minari water dropwort, cut into 2-inch pieces</Text>
                    <Text style={styles.content}>1 tablespoon sugar</Text>
                    <Text style={styles.content}>1 teaspoon corn syrup</Text>
                    <Text style={styles.content}>2 tablespoons vinegar</Text>
                    <Text style={styles.content}>1 teaspoon minced garlic</Text>
                    <Text style={styles.content}>pinch salt and pepper</Text>

                    <Text style={[styles.title]}>List Of Raw Materials</Text>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.list}>
                    {data.map((item, index) => {
                        return (
                            <View key={index} style={{ marginRight: index === data.length - 1 ? 64 : 16 }}>
                                <View style={styles.item}>
                                    <Image source={item.img} style={styles.img} />
                                    <View style={[styles.price_container, { backgroundColor: item.bg }]}>
                                        <Text style={styles.price}>{item.price}</Text>
                                    </View>
                                </View>
                                <Text style={styles.name_item}>{item.name}</Text>

                            </View>
                        )
                    })}
                </ScrollView>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.button_text}>One-click purchase</Text>
                </TouchableOpacity>
                <View style={{ height: 100 }} />
            </ScrollView>
        </View>
    )
}