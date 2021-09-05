import { TokenState } from "../token.slicer";

const showFunction = (state: TokenState): TokenState => {
    return {
        ...state,
        pop_up: {
            ...state.pop_up,
            show: true
        }
    }
}

export { showFunction }