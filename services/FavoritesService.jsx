export const getFavorites = (loggedInUserId) => {
    return fetch(`http://localhost:8088/favoritedPosts?_expand=user&_expand=post&userId=${loggedInUserId}`)
        .then(res => res.json());
};

export const getPostById = async (postId) => {
    try {
      const response = await fetch(`http://localhost:8088/posts/${postId}`);
      const postData = await response.json();
      return postData;
    } catch (error) {
      console.error('Error fetching post data:', error);
      return null;
    }
  };

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

    return fetch("http://localhost:8088/favoritedPosts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .catch((error) => {
        console.error('Error adding post to favorites:', error);
        throw error;
    });
};

export const removeFromFavorites = async (post) => {
    const deleteOptions = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    }

    await fetch(`http://localhost:8088/favoritedPosts/${post}`, deleteOptions)
}





