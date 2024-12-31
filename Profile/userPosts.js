
let postBox = document.getElementById('postBox')
let userPosts = posts?.filter((post)=> {
    return post.email === loggedInUser.email
})
if (posts) {
    userPosts?.forEach((post) => {
        let div = document.createElement('div')
        let date = new Date(post.createdAt)
        let min = date.getMinutes()
        let hour = date.getHours()
        let sec = date.getSeconds()
        let datee = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()

        div.innerHTML = `<div>
        <div class='d-flex gap-2 align-items-center' >
        <img width='20px' height='20px' style="border-radius: 50%;" src=${post?.userImage} alt="...">
        <h5 class="card-title">${post.username} </h5>
        </div>
        <div class="card" style="width: 18rem;">
        
        <img width='200px' height='200px' src=${post.image} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${post.title} </h5>
        <p class="card-text">${post.description}</p>
        <p class="card-text">${hour}:${min}:${sec} - ${datee}/${month + 1}/${year}</p>
        <button onclick='handleDelete(${post.createdAt})' class='btn btn-danger'>Delete</button>
        <button class='btn btn-success'>Edit</button>
        </div>
        
        </div>
        </div>`
        postBox.appendChild(div)
    })
}

function handleDelete(id) {
   let permission =  confirm('do you really want to delete this post?')
   if(!permission) return
   console.log(permission)


}