import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import RadioButtonRN from "radio-buttons-react-native";

const StartQuiz = ({ route, navigation }) => {
    const [next, setNext] = useState(0);
    const [previous, setPrevious] = useState(0);
    const [status, setStatus] = useState("");
    const [show, setShow] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const { title, questions, id } = route.params.individualItemForQuiz;

    let availableCard;
    var selectDeck;

    availableCard = useSelector((state) => {
        state.DeckReducers.forEach((el) => {
            if (id === el.id) {
                selectDeck = el;
            }
        });
        return selectDeck;
    });
    //console.log("availableCard", availableCard);
    //console.log("questions", questions);
    //   console.log("rrrrrrrr", availableCard.questions.length);

    const correctAnswer =
        availableCard.questions[status === "next" ? next : previous].answer;
    const wrongAnswer =
        availableCard.questions[status === "next" ? next : previous].wrongAnswer;
    const data = [
        {
            label: correctAnswer,
        },
        {
            label: wrongAnswer,
        },
    ];

    return (
        <View style={styles.container}>
            {availableCard.questions.length > 0 ? (
                <View>
                    {/* {console.log(next > availableCard.questions.length - 2 ? true : false)} */}
                    <Text>
                        {next + 1}/{availableCard.questions.length}
                    </Text>
                    <Text>
                        {
                            availableCard.questions[status === "next" ? next : previous]
                                .question
                        }
                    </Text>
                    <Text>
                        {
                            availableCard.questions[status === "next" ? next : previous]
                                .answer
                        }
                    </Text>
                    <Text>
                        {
                            availableCard.questions[status === "next" ? next : previous]
                                .wrongAnswer
                        }
                    </Text>

                    <RadioButtonRN
                        style={{ marginVertical: 40 }}
                        data={data}
                        selectedBtn={(e) => setSelectedAnswer(e)}
                    />
                    <View style={styles.btn}>
                        <TouchableOpacity
                            style={styles.prevBtn}
                            disabled={next === 0 ? true : false}
                            onPress={() => {
                                setPrevious(next - 1);
                                setStatus("prev");
                                setNext(next - 1);
                                // console.log("next", next - 1)
                            }}
                        >
                            <Text>previous</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.nextBtn}
                            disabled={
                                next > availableCard.questions.length - 2 ? true : false
                            }
                            onPress={() => {
                                setNext(next + 1);
                                setStatus("next");
                                // availableCard.questions[next]
                            }}
                        >
                            <Text>Next</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.showAnswer}
                            onPress={() => {
                                setShow(!show);
                            }}
                        >
                            <Text>Show Answer</Text>
                        </TouchableOpacity>
                        {show ? (
                            <View>
                                <Text>
                                    {
                                        availableCard.questions[status === "next" ? next : previous]
                                            .answer
                                    }
                                </Text>
                            </View>
                        ) : null}
                    </View>
                    <TouchableOpacity
                        style={styles.startOver}
                        onPress={() => {
                            console.log("start the quiz over");
                        }}
                    >
                        <Text>start the quiz over</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View>
                    <Text>No questions found</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    deckContainer: {
        borderWidth: 2,
        marginBottom: 5,
        padding: 5,
        flex: 1,
        alignItems: "center",
        color: "red",
        borderRadius: 10,
        minWidth: 200,
    },
    btn: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        minWidth: 200,
        marginBottom: 10,
    },
    prevBtn: {
        borderWidth: 2,
        borderColor: "purple",
        marginBottom: 5,
        padding: 5,
        flex: 1,
        alignItems: "center",
        borderRadius: 10,
        marginEnd: 20,
    },
    nextBtn: {
        borderWidth: 2,
        borderColor: "purple",
        marginBottom: 5,
        padding: 5,
        flex: 1,
        alignItems: "center",
        borderRadius: 10,
    },
    startOver: {
        borderWidth: 2,
        borderColor: "purple",
        marginBottom: 15,
        // padding: 5,
        flex: 1,
        alignItems: "center",
        borderRadius: 10,
        maxHeight: 30,
    },
    showAnswer: {
        borderWidth: 2,
        borderColor: "purple",
        marginBottom: 10,
        // padding: 5,
        flex: 1,
        alignItems: "center",
        borderRadius: 10,
        maxHeight: 30,
    },
});

export default StartQuiz;
