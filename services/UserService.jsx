export const getUserByUsername = (username) => {
    return fetch(`http://localhost:8088/users?userName=${username}`).then((res) => res.json())
}

export const getUserById = (userId) => {
    return fetch(`http://localhost:8088/users?id=${userId}`)
      .then(res => res.json())
      .then(users => users[0]);
  }

export const getAllUsers = () => {
    return fetch("http://localhost:8088/users").then((res) => res.json())
}

