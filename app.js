let loggedInUser = JSON.parse(localStorage.getItem('LocalLoggedIn'))
let Allposts = JSON.parse(localStorage.getItem('LocalPostStorage'))
let navList = document.getElementById('nav-List')

if (loggedInUser) {

    navList.innerHTML = `Logout`
    navList.setAttribute('onclick', 'handleLogout()')
} else {
    window.location.href = './login/login.html'
    navList.setAttribute('onclick', 'handleSignIn()')
    navList.innerHTML = `Sign In`
}

function handleSignIn() {
    location.href = '../login/login.html'
}
function handleLogout() {
    localStorage.removeItem('LocalLoggedIn')
    location.href = '../login/login.html'
}


// show post

let postBox = document.getElementById('postBox')

if (Allposts) {
    console.log('chala')
    Allposts?.forEach((post) => {
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
        
        </div>
        
        </div>
        </div>`
        postBox.appendChild(div)
    })
}
