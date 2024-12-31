let loggedInUser = JSON.parse(localStorage.getItem('LocalLoggedIn'))
let navList = document.getElementById('nav-List')

if (loggedInUser) {

    navList.innerHTML = `Logout`
    navList.setAttribute('onclick', 'handleLogout()')
    navList.classList.add('btn-danger')
} else {
    navList.classList.add('btn-success')
    navList.setAttribute('onclick', 'handleSignIn()')
    navList.innerHTML = `SignIn`
}

function handleSignIn () {
    location.href = '../login/login.html'
}
function handleLogout () {
    localStorage.removeItem('LocalLoggedIn')
    location.href = '../login/login.html'
}


