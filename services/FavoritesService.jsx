export const getFavorites = () => {
    return fetch("http://localhost:8088/favoritedPosts?_expand=user&_expand=post").then((res) => res.json())
}

export const addToFavorites = (userId, postId) => {
    
    if (!userId || !postId) {
        console.error('User ID or Post ID is invalid.');
        return Promise.reject(new Error('User ID or Post ID is invalid.'));
    }

    const userIdObj = JSON.parse(userId)

    const data = {
        userId: userIdObj.id,
        postId: postId,
    }

    console.log('Data before stringify:', data);

    return fetch("http://localhost:8088/favoritedPosts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Stringify the data object
    })
    .then((response) => response.json())
    .catch((error) => {
        console.error('Error adding post to favorites:', error);
        throw error; // Rethrow the error for handling in the calling function if needed
    });
};





