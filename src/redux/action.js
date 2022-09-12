import axios from "axios"

export function getUsers() {
    return async (dispatch) => {
        const { data } = await axios("https://631d9ae3789612cd07ad2f56.mockapi.io/users")
        dispatch({
            type: "GET_USERS",
            payload: data
        })
    }
}