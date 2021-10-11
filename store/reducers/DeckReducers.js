import Decks from '../../utils/Data'
import { ADD_CARD, ADD_DECK } from '../actions/action'
const initState = Decks
const DeckReducers = (state = initState, action) => {
    //console.log("stateeeee", state)
    switch (action.type) {

        case ADD_DECK:
            // console.log("action", {
            //     title: action,
            //     questions: []
            // })
            //console.log("state", state)
            return [
                ...state,
                {
                    // id: Math.floor(Math.random() * 10),
                    title: action.title,
                    questions: []
                }
            ]
        // Decks: [...state.Decks,
        // {
        //     title: action.title,
        //     questions: []
        // }
        // ]

        //[...state.Decks, action.title]
        // state.Decks.push({
        //     title: action.title,
        //     questions: []
        // })


        case ADD_CARD:
            //console.log("ss", state)
            const newQuestion = [];
            state.forEach((el) => {
                if (el.id === action.id) {
                    // console.log("action from reducer", action)
                    el.questions.push({
                        question: action.question,
                        answer: action.answer,
                        wrongAnswer: action.wrongAnswer,
                        score: action.score
                    })
                    newQuestion.push(el)

                } else {
                    newQuestion.push(el)
                }

            })
            //console.log("newQuestion", newQuestion)
            return newQuestion

        default:
            return state
    }


}

export default DeckReducers;