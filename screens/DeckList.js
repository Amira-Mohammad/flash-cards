import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    LogBox
} from "react-native";
import { useSelector } from "react-redux";

const Item = ({ title, questions }) => (
    <View>
        <Text>{title}</Text>
    </View>
);
function DeckList({ navigation }) {
    const renderItem = ({ item }) => (
        <View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("DeckView", { individualItem: item });
                }}
                style={styles.deckContainer}
            >
                <Item title={item.title} />
                <Item title={`${item.questions.length} Cards`} />
            </TouchableOpacity>
        </View>
    );

    useEffect(() => {
        LogBox.ignoreAllLogs()
    })
    let availableDecks;

    availableDecks = useSelector((state) => {
        return state.DeckReducers;
    });

    // console.log(availableDecks);

    return (
        <View style={styles.container}>
            {/* {console.log("availableDecks", availableDecks)} */}
            <FlatList
                data={availableDecks}
                renderItem={renderItem}
                // keyExtractor={item => item.index_id.toString()}
                keyExtractor={(item) => `${item.id}`}
            />
        </View>
    );
}

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
});

export default DeckList;
