import { TokenState } from "../token.slicer";

const hideFunction = (state: TokenState): TokenState => {
    return {
        ...state,
        pop_up: {
            ...state.pop_up,
            show: false
        }
    }
}

export { hideFunction }