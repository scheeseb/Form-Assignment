password = document.querySelector("#password")
passwordConfirm = document.querySelector("#password-confirm")
warningMessage = document.getElementById('password-incorrect-warning');

passwordConfirm.addEventListener("keyup", function(){
    if(password.value != passwordConfirm.value){
        password.setCustomValidity("Passwords don't match")
        passwordConfirm.setCustomValidity("Passwords don't match")
        warningMessage.style.display = "block"
    }else {
        password.setCustomValidity("")
        passwordConfirm.setCustomValidity("")
        warningMessage.style.display = "none"
    }
})

password.addEventListener("keyup", function(){
    if(password.value != passwordConfirm.value && passwordConfirm.value){
        password.setCustomValidity("Passwords don't match")
        passwordConfirm.setCustomValidity("Passwords don't match")
        warningMessage.style.display = "block"
    }else {
        password.setCustomValidity("")
        passwordConfirm.setCustomValidity("")
        warningMessage.style.display = "none"
    }
})