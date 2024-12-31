let posts = JSON.parse(localStorage.getItem('LocalPostStorage')) || []
// let existingUser = JSON.parse(localStorage.getItem('LocalLoggedIn')) || {}
let title = document.getElementById('title')
let postImage = document.getElementById('postImage')
let description = document.getElementById('description')

function createPost() {
    if (!title.value.trim() || !image.value.trim() || !description.value.trim()) {
        return
    }
    const newPost = {
        username: loggedInUser?.username,
        userImage: loggedInUser?.image,
        title: title.value,
        image: postImage.value,
        description: description.value,
        email: loggedInUser?.email,
        createdAt: Date.now(),
    }
    posts.push(newPost)
    localStorage.setItem('LocalPostStorage', JSON.stringify(posts))
    alert('Post Created')
    window.location.reload()
}