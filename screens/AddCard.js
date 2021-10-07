import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { addCard } from '../store/actions/action';
const AddCard = () => {
    const [newCardQ, setNewCardQ] = useState('')
    const [newCardA, setNewCardA] = useState('')

    const dispatch = useDispatch()

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.TextInputStyle}
                name="question"
                placeholder="Question"
                value={newCardQ}
                onChange={Question => setNewCardQ(Question)} />

            <TextInput
                style={styles.TextInputStyle}
                name="Answer"
                placeholder="Answer"
                value={newCardA}
                onChange={Answer => setNewCardA(Answer)} />
            <TouchableOpacity
                onPress={() => {
                    console.log("newCardQ", newCardQ)
                    console.log("newCardA", newCardA)
                }}
                style={styles.Submit}><Text>Submit</Text></TouchableOpacity>

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