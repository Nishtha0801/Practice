let usernameInput = document.querySelector("#username");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let form = document.querySelector(".formVal");

// username -> 3-25 characters
form.addEventListener('submit', function(e){
    // prevent the submission of form
    e.preventDefault();

    let isUsernameValid = validateUsername();
    let isEmailValid = validateEmail();
    let isPasswordValid = validatePassword();

    let isFormValid = isUsernameValid && isEmailValid && isPasswordValid;
    if(isFormValid){
        
    }
});

// sbse pehle -> username daalna is important
function isPresent(value){
    return value === '' ? false : true;
}

// username ka minimum length should be 3 and max should be 25 characters
function isBetween(length, min, max){
    return length<min || length > max ? false : true;
}
// valid => sucess vala add krdo
// invalid => error add krdo

function showError(input, message){
    let inputField = input.parentElement;
    inputField.classList.remove('success');
    inputField.classList.add('error');

    let errorMessage = inputField.querySelector('small');
    errorMessage.textContent = message;
}

function showSuccess(input){
    let inputField = input.parentElement;

    inputField.classList.remove('error');
    inputField.classList.add('success');

    let errorMessage = inputField.querySelector('small');
    errorMessage.textContent = '';

}

// trim removes whitespaces from both sides of the string.
function validateUsername(){
    let valid = false;
    let min = 3;
    let max = 25;
    // !false => true

    let username = usernameInput.value.trim();
    if(!isPresent(username)){
        showError(usernameInput, 'Username cannot be empty!');
    } else if(!isBetween(username.length, min, max)){
        showError(usernameInput, `Username must be between ${min} and ${max} characters`);
    } else {
        showSuccess(usernameInput);
        valid = true;
    }
  return valid;
}

// password hona chahiye
// doosra password strong chahiye
function isPasswordStrong(password) {
    // regex expressions => regular expression => pattern of characters
    let re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
    return re.test(password);
}

function isEmailValid(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateEmail(){
    let valid = false;
    let email = emailInput.value.trim();
    if(!isPresent(email)){
        showError(emailInput, 'Email cannot be empty!');
    }
    else if(!isEmailValid(email)){
        showError(emailInput, 'Email id not valid');
    } else {
        showSuccess(emailInput);
        valid = true;
    }
    return valid;
}

// validatePassword
function validatePassword(){
    let valid = false;
    let password = passwordInput.value.trim();
    if(!isPresent(password)){
        showError(passwordInput, 'Password cannot be empty!');
    } else if(!isPasswordStrong(password)){
        showError(passwordInput, 'Password is not strong!');
    } else {
        showSuccess(passwordInput);
        valid = true;
    }
    return valid;
}


