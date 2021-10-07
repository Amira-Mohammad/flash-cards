import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
const StartQuiz = ({ route, navigation }) => {
    const { title, questions } = route.params.individualItem
    return (
        <View style={styles.container}>
            <Text>StartQuiz</Text>
            <Text>{route.params.individualItem.questions.length}</Text>
        </View>
    );
};

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

export default StartQuiz;