const USER_NAME = "USER_NAME";
const GET_DATA = "GET_DATA";

const initialState = {
    userName: '',
    data: []
}

export default function rootReducer(state = initialState, action) {
    console.log("Called from reducer");

    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                data: action.payload
            }


        default:
            return state
    }
}
