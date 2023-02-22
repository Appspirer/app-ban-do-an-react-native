import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FoodScreen, CartScreen, FavoriteScreen, ProfileScreen, ShoppingScreen } from '../screens';
import Icons from '../themes/Icons';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                height: 60,
                paddingTop: 40,
                borderTopRightRadius: 40,
                borderTopLeftRadius: 40,
                paddingBottom: 50,
            }
        }}>
            <Tab.Screen
                name="FoodScreen"
                component={FoodScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ height: 23, width: 20.29 }}>
                            {Icons.Icons({ name: focused ? 'foods_focus' : 'foods', height: 23, width: 20.29 })}
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="FavoriteScreen"
                component={FavoriteScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ height: 22, width: 20.18 }}>
                            {Icons.Icons({ name: focused ? 'heart_focus' : 'heart', height: 22, width: 20.18 })}
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="CartScreen"
                component={CartScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ height: 22, width: 24 }}>
                            {Icons.Icons({ name: focused ? 'shop_focus' : 'shop', height: 22, width: 24 })}
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="ShoppingScreen"
                component={ShoppingScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ height: 21, width: 23 }}>
                            {Icons.Icons({ name: focused ? 'cart_focus' : 'cart', height: 21, width: 23 })}
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ height: 22, width: 19.88 }}>
                            {Icons.Icons({ name: focused ? 'profile_focus' : 'profile', height: 22, width: 19.88 })}
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    );
}