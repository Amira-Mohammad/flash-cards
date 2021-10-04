import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import DeckList from './DeckList'
import DeckView from './DeckView'
import StartQuiz from './StartQuiz'
import AddCard from './AddCard'

const Stack = createStackNavigator()

const DeckViewStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="DeckList"
                component={DeckList}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DeckView"
                component={DeckView}
            />
            <Stack.Screen
                name="StartQuiz"
                component={StartQuiz}
            />
            <Stack.Screen
                name="AddCard"
                component={AddCard}
            />
        </Stack.Navigator>
    )
}
export default DeckViewStack



