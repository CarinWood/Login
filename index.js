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
let errorText = document.querySelector('.error-text')
let passwordCheck = document.querySelector('.password-check')
const name = ''
const username = ''
const email = ''
const password = ''


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

//Check for password typing

passwordInput.addEventListener('input', function() {
    if (passwordInput.value.length > 0 && passwordInput.value.length < 8) {
        passwordCheck.classList.add('show-pass');
    } else {
        passwordCheck.classList.remove('show-pass');
    }
});

//submit the form 

let submitBtn = document.querySelector('.submit-btn')
submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if(nameInput.value && userNameInput.value && emailInput.value 
        && passwordInput.value && confirmInput.value) {
        if(passwordInput.value === confirmInput.value) {
            errorText.classList.remove('show')
            console.log(createObject(nameInput.value, userNameInput.value, 
                emailInput.value, passwordInput.value))
            alert('You have successfully signed up!')
          
        
        } else {
            errorText.classList.add('show')
            passwordInput.value=''
            confirmInput.value=''
        }
        
    } else {
        alert("You didn't fill in all of the fields!")
    }
})

function createObject(name, username, email, password) {
   return registrationData = {
        name: name,
        username: username,
        email: email,
        password: password,
      };
}