type FormState = {
    trivia_amount: number,
    trivia_category: string,
    trivia_difficulty: string,
    trivia_type: string
}

type PayLoad = {
    name?: string,
    value?: string,
    increment?: number,
}

type FormAction = {
    type: ActionKind,
    payload: PayLoad,
}

export enum ActionKind {
    changeAmount = "CHANG_AMOUNT",
    changeText = "CHANGE_TEXT",
}

export const INITIAL_FORM_STATE: FormState = {
    trivia_amount: 5,
    trivia_category: "",
    trivia_difficulty: "",
    trivia_type: ""
}

export const formReducer = (state: FormState, action: FormAction) => {
    const { type, payload } = action;
    switch (type) {
        case ActionKind.changeAmount:
            return {
                ...state,
                trivia_amount: ((payload.increment === 1 && state.trivia_amount === 50) || (payload.increment === -1 && state.trivia_amount === 1)) ?
                    state.trivia_amount : state.trivia_amount + payload.increment
            }
        case ActionKind.changeText:
            return {
                ...state,
                [payload.name]: payload.value === "any" ? "" : payload.value
            }
        default:
            return state;
    }
}

