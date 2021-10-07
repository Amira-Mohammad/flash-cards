import Decks from '../../utils/Data'
import { ADD_CARD, ADD_DECK } from '../actions/action'

const initState = {
    Decks: Decks
}

const DeckReducers = (state = initState, action) => {
    switch (action.type) {
        case ADD_DECK:
            console.log("action", action)
            return {
                ...state,
                Decks:
                    state.Decks.push({
                        title: action.title,
                        questions: []
                    })

            }

        case ADD_CARD:
            return {
                ...state,

            }

        default:
            return state
    }

}

export default DeckReducers;