import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Restaurants from '../SCREENS/Restaurants'

const Stack= createStackNavigator()

export default function RestaurantsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Restaurants"            
                component={Restaurants}
                options={{title: "Restaurantes"}}
            />
           
        </Stack.Navigator>
    )
}
