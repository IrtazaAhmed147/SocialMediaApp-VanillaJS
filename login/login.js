let users = JSON.parse(localStorage.getItem('LocalUsers')) || []


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
    if ( !email.value.trim() || !password.value.trim()) {
        return
    }

    let existingUser = users.find((user) => user.email === email.value)
    console.log(existingUser)
    if (!existingUser) {
        alert('User does not exist!')
        return
    }
    if(existingUser.password !== password.value) {
        alert('Invalid Ceredential!')
        return
    }
        const loggedIn = {
            email: email.value,
            password: password.value,
        }
    
    localStorage.setItem('LocalLoggedIn', JSON.stringify(loggedIn))
    alert('Login successful')
    location.href = '../index.html'
})