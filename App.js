import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import rootReducer from './store/reducers/rootReducer';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AddDeck from './screens/AddDeck';
import DeckList from './screens/DeckList';
import DeckViewStack from './screens/DeckViewStack'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const store = createStore(rootReducer)

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>

        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'DeckList') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'AddDeck') {
                iconName = focused ? 'add-to-list' : 'add-to-list';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'purple',
            tabBarInactiveTintColor: 'gray',

          })}
        >
          <Tab.Screen name="DeckList" component={DeckViewStack} />
          <Tab.Screen name="AddDeck" component={AddDeck} />

        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
