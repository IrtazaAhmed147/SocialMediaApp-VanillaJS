let users = JSON.parse(localStorage.getItem('LocalUsers')) || []

let username = document.getElementById('username')
let password = document.getElementById('password')
let email = document.getElementById('email')
let form = document.getElementById('form')
let isPassShow = false


function handleShowPass(tag) {
    if (isPassShow) {
        tag.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
        password.type = 'password'
        isPassShow = false
    } else {
        tag.innerHTML = '<i class="fa-solid fa-eye"></i>'
        password.type = 'text'
        isPassShow = true
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!username.value.trim() || !email.value.trim() || !password.value.trim()) {

        return
    }

    let existingUser = users.find((user) => user.email === email.value)
    console.log(existingUser)
    if (existingUser) {
        alert('User already exist!')
        return
    }

    const newUser = {
        username: username.value,
        email: email.value,
        password: password.value
    }
    users.push(newUser)
    localStorage.setItem('LocalUsers', JSON.stringify(users))
    alert('sign up successful')
    location.href = '../login/login.html'
})