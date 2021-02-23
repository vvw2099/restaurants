import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'


import RestaurantsStack from './RestaurantsStack'
import AccountStack from './AccountStack'
import FavoritesStack from './FavoritesStack'
import SearchStack from './SearchStack'
import TopRestaurantsStack from './TopRestaurantsStack'

const Tab=createBottomTabNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                name="restaurants"
                component={RestaurantsStack}
                options={{title:"Restaurantes"}}
                />
                <Tab.Screen
                name="favorites"
                component={FavoritesStack}
                options={{title:"Favoritos"}}
                />
                <Tab.Screen
                name="account"
                component={AccountStack}
                options={{title:"Usuario"}}
                />
                <Tab.Screen
                name="search"
                component={SearchStack}
                options={{title:"buscar"}}
                />
                <Tab.Screen
                name="top-Restaurants"
                component={TopRestaurantsStack}
                options={{title:"Top-Restaurantes"}}
                />         
            </Tab.Navigator>
        </NavigationContainer>
    )
}
