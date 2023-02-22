import React, { useState } from "react";
import { View, Text, Image, TextInput, Dimensions, TouchableOpacity, FlatList, ImageBackground, ScrollView } from 'react-native'
import Icons from "../../themes/Icons";
import Images from "../../themes/Images";
import styles from "./styles";
import Carousel from 'react-native-reanimated-carousel';
import Colors from "../../themes/Colors";
import Avatar from "../../components/Avatar";

const width = Dimensions.get('window').width;

export default function FoodScreen({navigation}) {
    const data = [...new Array(4).keys()]
    const tabbarMenu = [
        {
            id: 0,
            title: "Nutritious Breakfast"
        },
        {
            id: 1,
            title: "Working Meal"
        },
        {
            id: 2,
            title: "Afternoon Teaal"
        }
    ]
    const itemMenu = [
        {
            id: 0,
            title: "Ojingeo Muchim",
            img: Images.item1,
            rate: 5
        },
        {
            id: 1,
            title: "Cola Chicken ",
            img: Images.item2,
            rate: 5
        },
        {
            id: 2,
            title: "Roasted Carrot",
            img: Images.item3,
            rate: 4.8
        }
    ]

    const [searchText, setSearchText] = useState('')
    const [carouselIndex, setCarouselIndex] = useState(0)
    const [tabbarIndex, setTabbarIndex] = useState(0)

    return (
        <ScrollView style={styles.container}>
            <View style={styles.top_container}>
                <View style={{}}>
                    <Text style={styles.name}>Hello , Alex Suprun</Text>
                    <Text style={styles.address}>San Francisco, CA</Text>
                </View>
                <Avatar/>
            </View>
            <View style={styles.search_container}>
                {Icons.Icons({ name: "search", height: 16, width: 16 })}
                <TextInput
                    style={styles.text_input}
                    placeholder="Search for menu，ingredients"
                    value={searchText}
                    onChangeText={setSearchText}
                />
            </View>
            <View style={styles.carousel_container}>
                <Carousel
                    loop
                    width={width - 64}
                    height={width - 64}
                    autoPlay={true}
                    data={data}
                    scrollAnimationDuration={1000}
                    onSnapToItem={(index) => setCarouselIndex(index)}
                    renderItem={({ index }) => (
                        <View style={styles.carousel_item}>
                            <Image source={Images.food_banner} style={styles.banner} />
                            <View style={styles.banner_content_container}>
                                <Text style={styles.banner_title}>Fig And Ricotta Oatmeal</Text>
                                <Text style={styles.banner_content}>Add Italian whey cheese,figs,almonds and honey. sweet and delicious,with high nutritional value.</Text>
                            </View>
                        </View>
                    )}
                />
                <View style={styles.dot_container}>
                    {data.map((item, index) => {
                        return (
                            <View key={index} style={[styles.dot_carousel,
                            {
                                backgroundColor: carouselIndex === index ? Colors.yellow : Colors.gray
                            }]} />
                        )
                    })}
                </View>
            </View>
            <View style={styles.title_list}>
                <Text style={styles.title}>Three Meals Per Day</Text>
                <TouchableOpacity style={styles.view_all}>
                    <Text style={styles.text_view}>View All</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.tabbar_container}>
                {tabbarMenu.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={() => setTabbarIndex(item.id)}>
                            <Text style={[styles.tabbar, { color: tabbarIndex === index ? Colors.yellow : Colors.gray_text }]}>{item.title}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <ScrollView style={styles.list_container} horizontal={true} showsHorizontalScrollIndicator={false}>
                {itemMenu.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} style={[styles.item, { paddingRight: index === itemMenu.length - 1 ? 48 : 0 }]}
                        onPress={()=>navigation.navigate('FoodDetails')}>
                            <ImageBackground source={Images.bg_mn} style={styles.bg}>
                                <Image source={item.img} style={styles.img} />
                                <Text style={styles.item_title}>{item.title}</Text>
                                <View style={styles.item_row}>
                                    <View style={styles.row_left}>
                                        {Icons.Icons({ name: "star_gold", height: 10.48, width: 10.48 })}
                                        <Text style={styles.rating_text}>{item.rate.toFixed(1)}</Text>
                                    </View>
                                    <TouchableOpacity>
                                        {Icons.Icons({ name: "heart_button", height: 9, width: 9.81 })}
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </ScrollView>
    )
}