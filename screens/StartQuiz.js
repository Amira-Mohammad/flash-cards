import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import RadioButtonRN from "radio-buttons-react-native";
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

const StartQuiz = ({ route, navigation }) => {
    const [next, setNext] = useState(0);
    const [previous, setPrevious] = useState(0);
    const [status, setStatus] = useState("");
    const [show, setShow] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [score, setScore] = useState(0);
    const [resetRadioBtn, setResetRadioBtn] = useState(null);
    const { title, questions, id } = route.params.individualItemForQuiz;

    let availableCard;
    var selectDeck;
    let renderedUI
    availableCard = useSelector((state) => {
        state.DeckReducers.forEach((el) => {
            if (id === el.id) {
                selectDeck = el;
            }
        });
        return selectDeck;
    });

    renderedUI = availableCard.questions.map(((el, i) => {
        console.log("el", el)
        const ddd = null;
        return (
            <View>
                <RadioForm
                    index={i}
                    radio_props={[
                        {
                            label: el.answer, value: 0
                        },
                        {
                            label: el.wrongAnswer, value: 1
                        }]}
                    initial={ddd}
                    buttonColor={'purple'}
                    onPress={
                        (value) => setSelectedAnswer(value)
                        // (value) => { this.setState({ value: value }) }

                    }
                />
            </View>
        )
    }))


    const correctAnswer =
        availableCard.questions[status === "next" ? next : previous].answer;
    const wrongAnswer =
        availableCard.questions[status === "next" ? next : previous].wrongAnswer;

    const radioBtn = renderedUI[status === "next" ? next : previous]
    const data1 = [
        {
            label: correctAnswer, value: 0
        },
        {
            label: wrongAnswer, value: 1
        }
    ];

    // const data = [
    //     {
    //         label: correctAnswer,
    //     },
    //     {
    //         label: wrongAnswer,
    //     },
    // ];


    console.log("selectedAnswer", !(next > availableCard.questions.length - 2) || !selectedAnswer)
    return (
        <View style={styles.container}>
            {availableCard.questions.length > 0 ? (
                <View>

                    <View style={styles.centerText}>
                        <Text>
                            {next + 1}/{availableCard.questions.length}
                        </Text>
                        <Text>
                            {
                                availableCard.questions[status === "next" ? next : previous]
                                    .question
                            }
                        </Text>
                        {/* <Text>
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
                        </Text> */}
                    </View>
                    {radioBtn}
                    {/* <RadioForm
                        radio_props={data1}
                        initial={!resetRadioBtn && null}
                        onPress={
                            (value) => setSelectedAnswer(value)
                            // (value) => { this.setState({ value: value }) }
                        }
                    /> */}
                    {/* <RadioButtonRN
                        style={{ marginVertical: 40 }}
                        data={data}
                        selectedBtn={(e) => setSelectedAnswer(e)}
                    /> */}
                    <View style={styles.btn}>
                        <TouchableOpacity
                            style={styles.prevBtn}
                            disabled={next === 0 ? true : false}
                            onPress={() => {
                                setPrevious(next - 1);
                                setStatus("prev");
                                setNext(next - 1);

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
                                setResetRadioBtn(null)
                                if (selectedAnswer === 0) {

                                    setScore(score + 1)
                                    setSelectedAnswer("")
                                } else {
                                    setScore(score)
                                    setSelectedAnswer("")
                                }

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
                    {!(next > availableCard.questions.length - 2) && !selectedAnswer ? (null) : (
                        <View>
                            <TouchableOpacity
                                style={styles.startOver}
                                onPress={() => {

                                    setNext(0)
                                    setScore(0)
                                }}
                            >
                                <Text>start the quiz over</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.startOver}
                                onPress={() => {
                                    navigation.goBack()
                                }}
                            >
                                <Text>Go back</Text>
                            </TouchableOpacity>
                            <Text>your score is {score}</Text>
                        </View>)
                    }

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
        padding: 10,
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
    centerText: {
        alignItems: 'center',
        flex: 1
    }
});

export default StartQuiz;
