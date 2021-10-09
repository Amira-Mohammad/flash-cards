import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const StartQuiz = ({ route, navigation }) => {
    const [next, setNext] = useState(0)
    const [previous, setPrevious] = useState(0)
    const [status, setStatus] = useState("")
    const { title, questions, id } = route.params.individualItemForQuiz

    let availableCard;

    availableCard = useSelector(state => {
        let selectDeck;
        state.DeckReducers.forEach(el => {
            if (id === el.id) {
                selectDeck = el
            }
        });
        return selectDeck


    })
    //console.log("ee", availableCard)

    return (
        <View style={styles.container}>
            {/* {console.log(next > availableCard.questions.length - 2 ? true : false)} */}
            <Text>StartQuiz</Text>
            <Text>{availableCard.questions[status === "next" ? next : previous].question}</Text>
            <TouchableOpacity
                disabled={next > availableCard.questions.length - 2 ? true : false}
                onPress={() => {
                    setNext(next + 1)
                    setStatus("next")
                    // availableCard.questions[next]

                }}
            ><Text>Next</Text></TouchableOpacity>
            <TouchableOpacity
                disabled={next === 0 ? true : false}
                onPress={() => {

                    setPrevious(next - 1)
                    setStatus("prev")
                    setNext(next - 1)
                    console.log("next", next - 1)
                }}
            ><Text>previous</Text></TouchableOpacity>

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