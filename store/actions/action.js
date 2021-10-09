export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';

export function addDeck(id, title) {
    return {
        type: ADD_DECK,
        title,
        id
    }

}


export function addCard(id, question, answer) {
    console.log("action from action creator", id, question, answer)
    return {
        type: ADD_CARD,
        id,
        question,
        answer: { [Math.floor(Math.random() * 2) + 1]: answer },
        wrongAnswer: "wrongAnswer",
        score: 2
    }

}