let loggedInUser = JSON.parse(localStorage.getItem('LocalLoggedIn'))
let navList = document.getElementById('nav-List')

if (loggedInUser) {

    navList.innerHTML = `Logout`
    navList.setAttribute('onclick', 'handleLogout()')
} else {
    navList.setAttribute('onclick', 'handleSignIn()')
    navList.innerHTML = `Sign In`
}

function handleSignIn () {
    location.href = '../login/login.html'
}
function handleLogout () {
    localStorage.removeItem('LocalLoggedIn')
    location.href = '../login/login.html'
}


