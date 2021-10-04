import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const AddCard = () => {
    return (
        <View style={styles.container}>

            <TextInput
                View style={styles.TextInputStyle}
                placeholder="Question" />

            <TextInput
                View style={styles.TextInputStyle}
                placeholder="Answer" />
            <TouchableOpacity style={styles.Submit}><Text>Submit</Text></TouchableOpacity>

        </View>
    );
};

export default AddCard;

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