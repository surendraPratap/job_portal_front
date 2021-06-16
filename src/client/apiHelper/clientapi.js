
import { API } from "../../api"


export const createPost = (userID, tokens, postDetails) => {

    return fetch(`${API}/client/${userID}/post`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokens}`
        },
        body: JSON.stringify(postDetails)
    }).then(response => {
        return response.json()
    }).catch(error => {
        console.log("ERRor", error)
        return error;
    })
}