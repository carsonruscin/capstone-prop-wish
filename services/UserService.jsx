export const getUserByUsername = (username) => {
    return fetch(`http://localhost:8088/users?userName=${username}`).then((res) => res.json())
}

export const getAllUsers = () => {
    return fetch("http://localhost:8088/users").then((res) => res.json())
}

