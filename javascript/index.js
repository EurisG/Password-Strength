let state = false;
const pw = document.querySelector('.pwBox')
const pwStrength = document.querySelector('.password-strength')
const number = document.querySelector('.one-number')
const special = document.querySelector('.one-special-char')
const eight = document.querySelector('.eight-character')
const lowUpperCase = document.querySelector('.low-upper-case')

pw.addEventListener("keyup", function(){
    let pass = document.getElementById("pw").value;
    checkStrength(pass);
});

function toggle() {
    if(state){
        document.querySelector('pw').setAttribute('type','password')
        state = false;
    } else {
        document.querySelector('pw').setAttribute('type','text')
        state = true;
    }
}

function checkStrength(pw) {
    let strenght = 0;

    if (pw.match(([a-z] * [A-Z]) ([A-Z] * [a-z]))) {
        strenght += 1;
        lowUpperCase.classList.remove('fa-circle');
        lowUpperCase.classList.add('fa-check');
    } else {
        lowUpperCase.classList.add('fa-circle')
        lowUpperCase.classList.remove('fa-check')
    }

    if (pw.match([0 - 9])){
        strenght += 1 
        Number
    }
}

