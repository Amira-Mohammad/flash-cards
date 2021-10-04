import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

function AddDeck(props) {
    return (
        <View style={styles.container}>

            <TextInput
                View style={styles.TextInputStyle}
                placeholder="Title" />


            <TouchableOpacity style={styles.Submit}><Text>Create Deck</Text></TouchableOpacity>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextInputStyle: {
        borderWidth: 2,
        borderRadius: 5,
        padding: 5,
        margin: 2,
        minWidth: 300,
    },
    Submit: {
        backgroundColor: 'purple',
        borderWidth: 2,
        borderRadius: 5,
        padding: 5,
        margin: 2,
        minWidth: 300,
    }
});

export default AddDeck;