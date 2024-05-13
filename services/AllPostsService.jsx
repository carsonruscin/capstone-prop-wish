export const getAllPosts = () => {
    return fetch('http://localhost:8088/posts').then((res) => res.json())
}

export const deletePost = async (post) => {
    const deleteOptions = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    }

    await fetch(`http://localhost:8088/posts/${post}`, deleteOptions)
}

export const getPropSizeOptions = () => {
    return fetch("http://localhost:8088/propSizeOptions").then((res) => res.json())
}

export const getBatterySizeOptions = () => {
    return fetch("http://localhost:8088/batterySizeOptions").then((res) => res.json())
}