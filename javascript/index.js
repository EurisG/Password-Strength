let state = false;
const password = document.getElementsByClassName('.pwBox')
const pwStrength = document.getElementsByClassName('.password-strength')
const number = document.querySelector('.one-number')
const special = document.querySelector('.one-special-char')
const eight = document.querySelector('.eight-character')
const lowUpperCase = document.querySelector('.low-upper-case')

// function password(){

// }
// password.addEventListener ("keyup", function() {
//     let pass = documnet.querySelector("password").value 
//     checkStrength(pass);
//     // console.log('HELLO')
// });

function toggle() {
    if(state){
        document.querySelector('pass').setAttribute('type','password')
        state = false;
    } else {
        document.querySelector('pass').setAttribute('type','text')
        state = true;
    }
}

function myFunction(show){
    show.classList.toggle("fa-eye-slash");
}

function checkStrength(pw) {
    let strength = 0;

    // contains uppercase and lowercase 
    if (password.match(([a-z] * [A-Z]) ([A-Z] * [a-z]))) {
        strength += 1;
        lowUpperCase.classList.remove('fa-circle');
        lowUpperCase.classList.add('fa-check');
    } else {
        lowUpperCase.classList.add('fa-circle')
        lowUpperCase.classList.remove('fa-check')
    }

    // has number 
    if (password.match([0 - 9])){
        strength += 1 
        number.classList.remove('fa-circle');
        number.classList.add('fa-check');
    } else {
        number.classList.add('fa-circle');
        number.classList.remove('fa-check')
    }

    // has special character 
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
        strength += 1;
        special.classList.remove('fa-circle');
        special.classList.add('fa-check');

    } else {
        special.classList.add('fa-circle');
        special.classList.remove('fa-check');
    }

    // password is more than 7 characters 
    if (password.length > 7) {
        strength += 1;
        eight.classList.remove('fa-circle');
        eight.classList.add('fa-check');
    } else {
       eight.classList.add('fa-circle');
        eight.classList.remove('fa-check');   
    }

      // If value is less than 2
      if (strength < 2) {
        pwStrength.classList.remove('progress-bar-warning');
        pwStrength.classList.remove('progress-bar-success');
        pwStrength.classList.add('progress-bar-danger');
        pwStrength.style = 'width: 10%';
    } else if (strength == 3) {
        pwStrength.classList.remove('progress-bar-success');
        pwStrength.classList.remove('progress-bar-danger');
        pwStrength.classList.add('progress-bar-warning');
        pwStrength.style = 'width: 60%';
    } else if (strength == 4) {
        pwStrength.classList.remove('progress-bar-warning');
        pwStrength.classList.remove('progress-bar-danger');
        pwStrength.classList.add('progress-bar-success');
        pwStrength.style = 'width: 100%';
    }
}

function createAcc() {
    if(state === true) {
     alert('Thank you for creating an account!')
    } else{
        alert('Please make sure email and password are correct!')
    }
}