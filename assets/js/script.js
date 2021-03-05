const form = document.getElementById('form');
const boton = document.getElementById('btn');
const texto = document.getElementById('sent')

let rut = document.getElementById('rut');
let nombre = document.getElementById('name');
let lastname = document.getElementById('lastname');
let age = document.getElementById('age');
let mail = document.getElementById('mail');
let date = document.getElementById('date');
let specialty = document.getElementById('specialty');
let hour = document.getElementById('hour');

let regexRut = /^0*(\d{1,3}(\.?\d{3})*)\-?([\dkK])$/gim;
let regexName = /^[a-zA-ZÁ-ý\s]{1,40}$/;
let regexLastname = /^[a-zA-ZÁ-ý\s]{1,40}$/;
let regexAge = /^(\+|\-)?\d+$/;
let regexMail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,5})$/;
let regexDate = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

boton.addEventListener('click', e=> {

    let selectSpecialty = specialty.options[specialty.selectedIndex].text;
    let selectHour = hour.options[hour.selectedIndex].text;

    e.preventDefault();

    let success = false;
    if (!regexRut.test(rut.value)){
        document.getElementById('icon__error1').classList.remove('icons__hidden')
        success = true;
    } else {
        document.getElementById('icon__error1').classList.add('icons__hidden')
        document.getElementById('icon__success1').classList.remove('icons__hidden')
    }

    e.preventDefault();
    if (!regexName.test(nombre.value)){
        document.getElementById('icon__error2').classList.remove('icons__hidden')
        success = true;
    } else {
        document.getElementById('icon__error2').classList.add('icons__hidden')
        document.getElementById('icon__success2').classList.remove('icons__hidden')
    }

    e.preventDefault();
    if (!regexLastname.test(lastname.value)){
        document.getElementById('icon__error3').classList.remove('icons__hidden')
        success = true;
    } else {
        document.getElementById('icon__error3').classList.add('icons__hidden')
        document.getElementById('icon__success3').classList.remove('icons__hidden')
    }

    e.preventDefault();
    if (!regexAge.test(age.value)){
        document.getElementById('icon__error4').classList.remove('icons__hidden')
        success = true;
    } else {
        document.getElementById('icon__error4').classList.add('icons__hidden')
        document.getElementById('icon__success4').classList.remove('icons__hidden')
    }

    e.preventDefault();
    if (!regexMail.test(mail.value)){
        document.getElementById('icon__error5').classList.remove('icons__hidden')
        success = true;
    } else {
        document.getElementById('icon__error5').classList.add('icons__hidden')
        document.getElementById('icon__success5').classList.remove('icons__hidden')
    }

    e.preventDefault();
    if (!regexDate.test(date.value)){
        document.getElementById('icon__error6').classList.remove('icons__hidden')
        success = true;
    } else {
        document.getElementById('icon__error6').classList.add('icons__hidden')
        document.getElementById('icon__success6').classList.remove('icons__hidden')
    }

    if(success){
        texto.innerHTML = "Por favor corrija los campos inválidos. ⛔";
    }else{
        texto.innerHTML = (`Estimado/a ${nombre.value} ${lastname.value}, su hora para ${selectSpecialty} ha sido reservada para el día ${date.value} a las ${selectHour}. Además, se le envió un mensaje a su correo ${mail.value} con el detalle de su cita. Gracias por preferirnos. 👩‍⚕️🌟`);
    }
})