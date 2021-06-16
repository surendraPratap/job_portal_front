import { API } from '../api'


export const signup = (userdetails => {

    return fetch(`${API}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userdetails)
    })
        .then(respnse => {
            return respnse.json();
        })
        .catch(error => {
            return error;
        })
})
export const signin = (userdetails => {

    return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userdetails)
    })
        .then(response => {

            return response.json();
        })
        .catch(error => {

            return error;
        })
})

export const signout = (next) => {
    if (typeof window !== undefined) {
        localStorage.removeItem("jwt");
        next();
    }
    return fetch(`${API}/signout`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }).then(response => {
        return console.log("Sign out successfully");
    }).catch(error => {
        console.log(error)
    })
}


export const onauthentication = (data, next) => {

    if (typeof window !== undefined) {
        localStorage.setItem("jwt", JSON.stringify(data));
        next();
    }
}

export const isAuthenticated = () => {
    if (typeof window == "undefined") {

        return false;
    }
    if (localStorage.getItem("jwt")) {

        return JSON.parse(localStorage.getItem("jwt"))
    } else {
        return false;
    }
}