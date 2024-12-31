let loggedInUser = JSON.parse(localStorage.getItem('LocalLoggedIn'))
let users = JSON.parse(localStorage.getItem('LocalUsers'))



let userName = document.getElementById('username')
let phoneNumber = document.getElementById('phoneNumber')
let address = document.getElementById('address')
let about = document.getElementById('about')


userName.value = loggedInUser?.username || ''
phoneNumber.value = loggedInUser?.phonenumber || ''
address.value = loggedInUser?.address || ''
about.value = loggedInUser?.about || ''

// html 
let usernameHtml = document.getElementById('usernameHtml')
let aboutHtml = document.getElementById('aboutHtml')
let phoneNumberHtml = document.getElementById('phoneNumberHtml')
let addressHtml = document.getElementById('addressHtml')

usernameHtml.innerHTML = loggedInUser?.username || 'Not Provided'
aboutHtml.innerHTML = loggedInUser?.about || 'Not Provided'
phoneNumberHtml.innerHTML = loggedInUser?.phonenumber || 'Not Provided'
addressHtml.innerHTML = loggedInUser?.address || 'Not Provided'


function handleModal() {

    console.log(loggedInUser)
    if (!userName.value.trim()) {

        return
    }

    const findUser = users.find((user) => user.email === loggedInUser.email)
    console.log('asdfsadf')
    findUser.username = userName.value
    findUser.phonenumber = phoneNumber.value
    findUser.address = address.value
    findUser.about = about.value
    console.log(findUser)
    const updateProfile = {
        username: userName.value,
        phonenumber: phoneNumber.value,
        address: address.value,
        about: about.value

    }
    let updatedUser = { ...loggedInUser, ...updateProfile }
    localStorage.setItem('LocalLoggedIn', JSON.stringify(updatedUser))
    localStorage.setItem('LocalUsers', JSON.stringify(users))

    location.reload()



}