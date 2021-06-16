import { API } from "../../api"



export const saveRecruiter = (userID, token, userdetails) => {

    return fetch(`${API}/admin/${userID}/recruiter`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(userdetails)
    }).then(response => {
        return response.json()
    }).catch(error => {

        return error;
    })
}

export const allRecruitersData = (userID, token) => {
    return fetch(`${API}/admin/${userID}/allrecruiter`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        return response.json()
    }).catch(error => {

        return error;
    })
}