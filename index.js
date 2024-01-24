//labels
let nameInput = document.querySelector('.name-input')
let nameLabel = document.querySelector('.name-label')
let userNameInput = document.querySelector('.username-input')
let userNameLabel = document.querySelector('.username-label')
let emailInput = document.querySelector('.email-input')
let emailLabel = document.querySelector('.email-label')
let passwordInput = document.querySelector('.password-input')
let passwordLabel = document.querySelector('.password-label')
let confirmInput = document.querySelector('.confirm-input')
let confirmLabel = document.querySelector('.confirm-label')

function makeLabelClickable(label, input) {
label.addEventListener('click', function() {
    input.focus()
})
}

makeLabelClickable(nameLabel, nameInput)
makeLabelClickable(userNameLabel, userNameInput)
makeLabelClickable(emailLabel, emailInput)
makeLabelClickable(passwordLabel, passwordInput)
makeLabelClickable(confirmLabel, confirmInput)
