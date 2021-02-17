const form = document.getElementById('form');
const nomUsuario = document.getElementById('nomusuari');
const emailUsuario = document.getElementById('email');
const passwordUsuario = document.getElementById('password');
const password2Usuario = document.getElementById('password2');

//EVENTS LISTENER
form.addEventListener('submit', event => {
    event.preventDefault();

    if(nomUsuario.value === ''){
        mostrarError('El nombre de usuario es obligatorio');
    }else{
        mostrarCorrecte();
    }
    if(emailUsuario.value === ''){
        mostrarError('El email de usuario es obligatorio');
    }else{
        mostrarCorrecte();
    }
    if(passwordUsuario.value === ''){
        mostrarError('El contraseña de usuario es obligatorio');
    }else{
        mostrarCorrecte();
    }
    if(password2Usuario.value === ''){
        mostrarError('El contraseña de usuario es obligatorio');
    }else{
        mostrarCorrecte();
    }


    //mensajes de control
    console.log(nomUsuario.value);
    console.log('submit');
});



//functions
//mostraError : muestra el mensaje de error
//y destaca el control afectado
function mostrarError(input,messege){
    const formControl = input.parentElement;
    formControl.className  = 'form-control error';

    //
    const small = formControl.querySelector('small');
    small.innerText = messege;
}

function mostrarCorrecte(input){
    const formControl = input.parentElement;
    formControl.className  = 'form-control correcto';
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}