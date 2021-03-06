import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { addDeck } from "../store/actions/action";

const AddDeck = ({ route, navigation }) => {
    const [newDeckTitle, setNewDeckTitle] = useState("");

    const dispatch = useDispatch();
    //console.log("Create Deck done", newDeckTitle)
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.TextInputStyle}
                placeholder="Title"
                value={newDeckTitle}
                onChangeText={(Title) => setNewDeckTitle(Title)}
            />

            <TouchableOpacity
                onPress={() => {
                    dispatch(addDeck(Math.floor(Math.random() * 10), newDeckTitle));
                    setNewDeckTitle("")
                    navigation.navigate("DeckList")
                    // console.log("Create Deck done", newDeckTitle)
                }}
                style={styles.Submit}
            >
                <Text style={styles.submitText}>Create Deck</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    TextInputStyle: {
        borderWidth: 2,
        borderRadius: 5,
        padding: 5,
        margin: 2,
        minWidth: 300,
    },
    Submit: {
        backgroundColor: "purple",
        borderWidth: 2,
        borderRadius: 5,
        padding: 5,
        margin: 2,
        minWidth: 300,
        alignItems: "center",
    },
    submitText: {
        color: "white",
    },
});

export default AddDeck;
