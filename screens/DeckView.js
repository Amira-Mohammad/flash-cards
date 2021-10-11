import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { clearLocalNotifications, setLocalNotifications } from "../utils/Data";
import * as Notifications from "expo-notifications";

const DeckView = ({ route, navigation }) => {
    const { id, title, questions } = route.params.individualItem;

    return (
        <View style={styles.container}>
            <Text>DeckView</Text>
            <Text>{title}</Text>
            <Text>{questions.length}</Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("AddCard");
                    navigation.navigate("AddCard", {
                        individualItemForAddCard: route.params.individualItem,
                    });
                }}
                style={styles.addCard}
            >
                <Text>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    clearLocalNotifications();
                    setLocalNotifications();

                    // Notifications.scheduleNotificationAsync({
                    //     content: {
                    //         title: 'Quiz Reminder',
                    //         body: "you have to take your quiz!",
                    //     },
                    //     trigger: {
                    //         seconds: 10
                    //     },
                    // });
                    if (questions.length === 0) {
                        Alert.alert("You must add questions before the quiz");
                    } else {
                        navigation.navigate("StartQuiz", {
                            individualItemForQuiz: route.params.individualItem,
                        });
                    }
                }}
                style={styles.startQuiz}
            >
                <Text>Start Quiz</Text>
            </TouchableOpacity>
        </View>
    );
};

export default DeckView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    addCard: {
        borderWidth: 2,
        borderRadius: 5,
        padding: 5,
        margin: 2,
        minWidth: 100,
        backgroundColor: "grey",
    },
    startQuiz: {
        borderWidth: 2,
        borderRadius: 5,
        padding: 5,
        margin: 2,
        minWidth: 100,
        backgroundColor: "purple",
        color: "white",
    },
});
