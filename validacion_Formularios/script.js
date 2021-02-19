const form = document.getElementById('form');
const nomUsuari = document.getElementById('nomusuari');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Funcio mostrarError()
// Mostra el missatge d' error en cas que no es cumpleixin
// els requisits
function mostrarError(nomUsuari, missatgeError) {
    const formControl = nomUsuari.parentElement;
    formControl.className = 'form-control error';

    const small = formControl.querySelector('small');
    small.innerText = missatgeError;
}

function mostrarCorrecte(nomUsuari) {
    const formControl = nomUsuari.parentElement;
    formControl.className = 'form-control correcto';
}

function comprovaEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function esObligatori(input) {
    if (input.value === '') {
        mostrarError(input, 'Es obligatori');
    } else {
        mostrarCorrecte(input);
    }
}

// Event listener
form.addEventListener('submit', function(e) {
    e.preventDefault(console.log('submit'));

    // console.log(nomUsuari.value);
    
    /*if (nomUsuari.value === '') {
        mostrarError(nomUsuari,'El nom d usuari es obligatori');
    } else {
        mostrarCorrecte(nomUsuari);
    }

    if (email.value === '') {
        mostrarError(email,'El email es obligatori');
    } else if (!comprovaEmail(email.value)) {
        mostrarError(email, 'El email no es valido');
    } else {
        mostrarCorrecte(email);
    }

    if (password.value === '') {
        mostrarError(password,'La password es obligatoria');
    } else {
        mostrarCorrecte(password);
    }

    if (password2.value === '') {
        mostrarError(password2,'La confirmacio es obligatoria');
    } else {
        mostrarCorrecte(password2);
    }*/

    esObligatori(nomUsuari);
    
    esObligatori(email);
    
    esObligatori(password);
    
    esObligatori(password2);
});
