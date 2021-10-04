import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const Item = ({ title, questions }) => (

    <View>
        <Text>{title}</Text>
    </View>
);
function DeckList({ navigation }) {
    const renderItem = ({ item }) => (

        <View>
            <TouchableOpacity
                onPress={() => {
                    console.log('xffffffffff');
                    navigation.navigate("DeckView", { individualItem: item })
                }}
                style={styles.deckContainer}>
                <Item title={item.title} />
                <Item title={`${item.questions.length} Cardsss`} />
            </TouchableOpacity>
        </View>
    );
    let availableDecks;

    availableDecks = useSelector(state => {
        return state.DeckReducers
    })
    console.log('xxxee', availableDecks);

    return (
        <View style={styles.container}>
            <FlatList
                data={availableDecks}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    deckContainer: {
        borderWidth: 2,
        marginBottom: 5,
        padding: 5,
        flex: 1,
        alignItems: 'center',
        color: 'red',
        borderRadius: 10,
        minWidth: 200
    },


});

export default DeckList;