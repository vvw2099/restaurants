import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TopRestaurants from '../SCREENS/TopRestaurants'

const Stack= createStackNavigator()

export default function TopRestaurantsStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Top 5"
                component={TopRestaurants}
                options={{title:"Mejores 5"}}
            />
        </Stack.Navigator>
    )
}