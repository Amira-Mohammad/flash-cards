import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
const DeckView = ({ route, navigation }) => {
    const { title, questions } = route.params.individualItem
    return (
        <View style={styles.container}>
            <Text>DeckView</Text>
            <Text>{title}</Text>
            <Text>{questions.length}</Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("AddCard")
                }}
                style={styles.addCard}>
                <Text>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("StartQuiz", { individualItem: route.params.individualItem })
                }}
                style={styles.startQuiz}>
                <Text>Start Quiz</Text>
            </TouchableOpacity>
        </View>
    );
};

export default DeckView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addCard: {
        borderWidth: 2,
        borderRadius: 5,
        padding: 5,
        margin: 2,
        minWidth: 100,
        backgroundColor: 'grey',


    },
    startQuiz: {
        borderWidth: 2,
        borderRadius: 5,
        padding: 5,
        margin: 2,
        minWidth: 100,
        backgroundColor: 'purple',
        color: 'white'
    },
});