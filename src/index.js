let email = document.getElementById("email");
let password = document.getElementById("password");
let buttonLogin = document.getElementById("login__button");
let buttonRegister = document.getElementById("register__button");

buttonLogin.addEventListener('click', ()=>{
    let userData = JSON.parse(localStorage.getItem("patientData"))
    if(!email.value){
        message("Ingrese su email y contraseña por favor.",'error')
    }else if(userData && email.value){
        let emailCatch = userData.filter( e => {
            return e.userEmail == email.value;
        });
        console.log(emailCatch)
        console.log(userData)
        if(emailCatch[0] == null){
            message("El usuario no se encuentra registrado.",'error')
        }else if(emailCatch[0].userEmail == email.value && emailCatch[0].userPassword == password.value){
            sessionStorage.setItem('sessionData', JSON.stringify(emailCatch));
            redirect();

        }else{
            message('Usuario o Contraseña incorrectos, o el Usuario no se encuentra registrado','error')
        }
    }else{
        message( 'El usuario no existe','error')
    }
});

function message(text,type){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        icon: type,
        title: text
    })
}

function redirectRegister(){
    window.location.href ="./pages/register.html";
}
buttonRegister.addEventListener('click', ()=>{
    redirectRegister();
})

function redirect(){
    window.location.href = './pages/turnselect.html';
} 

