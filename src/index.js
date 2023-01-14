const medic = [
    {
        "id":1,
        "first_name":"Mendie",
        "last_name":"Otton",
        "speciality":"Clinico"
    },
    {
        "id":2,
        "first_name":"Zuzana",
        "last_name":"Semken",
        "speciality":"Clinico"
    },
    {
        "id":3,
        "first_name":"Hazel",
        "last_name":"Bartels",
        "speciality":"Clinico"
    },
    {
        "id":4,
        "first_name":"Tessa",
        "last_name":"Sturridge",
        "speciality":"Clinico"
    },
    {
        "id":5,
        "first_name":"Aindrea",
        "last_name":"Argont",
        "speciality":"Pediatría"
    },
    {
        "id":6,
        "first_name":"Brenda",
        "last_name":"Ferri",
        "speciality":"Pediatría"
    },
    {
        "id":7,
        "first_name":"Cherise",
        "last_name":"Durante",
        "speciality":"Pediatría"
    },
    {
        "id":8,
        "first_name":"Clemente",
        "last_name":"Letixier",
        "speciality":"Pediatría"
    },
    {
        "id":9,
        "first_name":"Jaime",
        "last_name":"Bohan",
        "speciality":"Ginecología"
    },
    {
        "id":10,
        "first_name":"Milka",
        "last_name":"Grigorey",
        "speciality":"Ginecología"
    },
    {
        "id":11,
        "first_name":"Nicole",
        "last_name":"Godier",
        "speciality":"Ginecología"
    },
    {
        "id":12,
        "first_name":"Pat",
        "last_name":"Bowich",
        "speciality":"Ginecología"
    },
    {
        "id":13,
        "first_name":"Piper",
        "last_name":"Studders",
        "speciality":"Traumatología"
    },
    {
        "id":14,
        "first_name":"Babette",
        "last_name":"Stone",
        "speciality":"Traumatología"
    },
    {
        "id":15,
        "first_name":"Phaedra",
        "last_name":"Lafoy",
        "speciality":"Traumatología"
    },
    {
        "id":16,
        "first_name":"Viole",
        "last_name":"Belward",
        "speciality":"Traumatología"
    },
    {
        "id":17,
        "first_name":"Carolus",
        "last_name":"Antill",
        "speciality":"Cardiología"
    },
    {
        "id":18,
        "first_name":"Woodie",
        "last_name":"Janczak",
        "speciality":"Cardiología"
    },
    {
        "id":19,
        "first_name":"Thorndike",
        "last_name":"Craske",
        "speciality":"Cardiología"
    },
    {
        "id":20,
        "first_name":"Anastassia",
        "last_name":"Dunkersley",
        "speciality":"Cardiología"
    }
]
const health__insurances = ["Swiss Medical Group","OSDE","Galeno","Medicus","OSECAC","Omint","PAMI"]

const speciality=["Ginecología","Pediatría","Cardiología","Clinico","Traumatología"];


let select = document.getElementById("medic__select");
let selectSp = document.getElementById("speciality__select");

let selectHealth = document.getElementById("health__insurance");
let btnForm = document.getElementById("button__form");

let firstname = document.getElementById("first__name");
let surname = document.getElementById("last__name");
let birthday = document.getElementById("birthday__date");
let id = document.getElementById("id__number");
let healthInsurance = document.getElementById("health__insurance");
let healthId = document.getElementById("health__id");
let medicSp = document.getElementById("speciality__select");
let medics = document.getElementById("medic__select");

console.log(healthInsurance.value)

selectSp.addEventListener("change",function(){
    document.querySelector('#medic__select').innerHTML = '';
    document.querySelector('#medic__select').innerHTML = '<option value="">--Seleccion Profesional--</option>'
    filterBySpeciality(selectSp.value);
})
btnForm.addEventListener("click", function(){   
    
    
    if(firstname.value != "" && surname.value != "" && birthday.value != "" && id.value != "" && healthInsurance.value != "" && healthId.value != "" && medicSp.value != "" && medics.value != "" ){
        const patientData = {
            userName:firstname.value,
            userSurname:surname.value,
            userBirthday:birthday.value,
            userId:id.value,
            userHealthInsurance:healthInsurance.value,
            userHealthId:healthId.value,
            medMedicSp:medicSp.value,
            medMedics:medics.value
        }
        sessionStorage.setItem("patientData", JSON.stringify(patientData));
        redirect();
    
    }else{
        alert("Asegurese de rellenar todos los campos por favor");
    }
    
})

function redirect(){
    window.location.href = './pages/turnpatient.html';
} 

const selectHealthInsuranceFill = (health) =>{
    health.forEach(e=>{
        let option = new Option(e)
        selectHealth.appendChild(option);
    })
}

const selectSpecialFill = (medSp) =>{
    medSp.forEach(e =>{
        let option  = new Option(e)
        selectSp.appendChild(option);
    })
}

function filterBySpeciality(medSpecial){
    const specialMed = medic.filter(e => e.speciality == medSpecial)
    selectMedicFill(specialMed)
}

function selectMedicFill(medfill){
    medfill.forEach(e => {
        let option = new Option(e.first_name + " " + e.last_name)  
        select.appendChild(option);
    });
}


selectSpecialFill(speciality);

selectHealthInsuranceFill(health__insurances);