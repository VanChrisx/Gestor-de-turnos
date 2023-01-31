
let selectHealth = document.getElementById("health__insurance");
let btnForm = document.getElementById("btn__form");
let firstname = document.getElementById("first__name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let surname = document.getElementById("last__name");
let birthday = document.getElementById("birthday__date");
let id = document.getElementById("id__number");
let healthInsurance = document.getElementById("health__insurance");
let healthId = document.getElementById("health__id");

const selectHealthInsuranceFill = () =>{
    fetch("../data/medicalinsurance.json")
    .then(res => res.json())
    .then(insurance => insurance.forEach(e=>{
        let option = new Option(e)
        selectHealth.appendChild(option);
    }))  
}
btnForm.addEventListener("click", function(){   
    let recoverData = localStorage.getItem('patientData');

    if(recoverData ==  null){
        if(firstname.value != "" && surname.value != "" && birthday.value != "" && id.value != "" && healthInsurance.value != "" && healthId.value != "" && email.value != ""){
            const patientData = [{
                userName:firstname.value,
                userSurname:surname.value,
                userBirthday:birthday.value,
                userEmail:email.value,
                userPassword:password.value,
                userId:id.value,
                userHealthInsurance:healthInsurance.value,
                userHealthId:healthId.value
                }]
            localStorage.setItem('patientData', JSON.stringify(patientData));
            succesful()
            setTimeout(redirect,3000)
        
        }else{
            message("Asegurese de rellenar todos los campos por favor",'error')
        }
    }else{

        let datas = JSON.parse(recoverData);

        let equal = datas.filter(data =>{
            return data.userEmail == email.value;
        });

        if(firstname.value != "" && surname.value != "" && birthday.value != "" && id.value != "" && healthInsurance.value != "" && healthId.value != "" && email.value != ""){
            if(equal[0]!=null){
                message('El email ingresado ya está en uso','error');

            }else{
                const newPatient = {
                    userName:firstname.value,
                    userSurname:surname.value,
                    userBirthday:birthday.value,
                    userEmail:email.value,
                    userPassword:password.value,
                    userId:id.value,
                    userHealthInsurance:healthInsurance.value,
                    userHealthId:healthId.value,
                }
                    datas.push(newPatient)
                    localStorage.setItem('patientData', JSON.stringify(datas));
                    succesful()
                    setTimeout(redirect,3000)  
                }

        }else{
            message("Asegurese de rellenar todos los campos por favor",'error');
        }

    }
})

function redirect(){
    window.location.href = '../index.html';
} 
function succesful(){
    Swal.fire(
        'Registro exitoso!',
        'En 3 segundos sera redireccionado a la pantalla de log in',
        'success'
    )
}
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

selectHealthInsuranceFill();