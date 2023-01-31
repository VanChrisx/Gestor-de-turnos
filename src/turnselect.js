const speciality=["Ginecología","Pediatría","Cardiología","Clinico","Traumatología"];



let select = document.getElementById("medic__select");
let selectSp = document.getElementById("speciality__select");
let buttonTurn = document.getElementById("button__form");
let selectTurn = document.getElementById("turn__select");
let selectHour = document.getElementById("hour__select");

const info = JSON.parse(sessionStorage.getItem("sessionData"));


const patientInfo = ()=>{
    let output = `
        <div>
            <label>Nombre</label>
            <p class="name" name="name">${info[0].userName + " " + info[0].userSurname}</p>
        </div>
        <div>
            <label for="id">Numero de Documento</label>
            <p name="id"class="id">${info[0].userId}</p>
        </div>
        <div>
            <label for="insurance">Obra Social</label>
            <p class="insurance">${info[0].userHealthInsurance}</p>
        </div>
        <div>
            <label for="insurance__number">N° de Obra Social</label>
            <p name="insurance__number" class="insurance__number">${info[0].userHealthId}</p>
        </div>
        `
    
    document.getElementById("patient__info").innerHTML = output;

}

selectSp.addEventListener("change",function(){
    document.querySelector('#medic__select').innerHTML = '';
    document.querySelector('#medic__select').innerHTML = '<option value="">--Seleccion Profesional--</option>'
    filterBySpeciality(selectSp.value);
})

select.addEventListener('change', function(){
    document.querySelector('#turn__select').innerHTML = '';
    document.querySelector('#turn__select').innerHTML = '<option value="">--Seleccione fecha--</option>'
    generateRandomDate();
})

selectTurn.addEventListener('change',function(){
    document.querySelector('#hour__select').innerHTML = '';
    document.querySelector('#hour__select').innerHTML = '<option value="">--Seleccione horario--</option>';
    generateRandomHour()
})

buttonTurn.addEventListener("click",function(){
    if(select.value != "" && selectSp.value != "" && selectTurn != "" && selectHour != ""){
        const medicInfo = {
            medicName:select.value,
            medicSpe:selectSp.value,
            turnDate:selectTurn.value,
            turnHour:selectHour.value
        }
        info.push(medicInfo)

        sessionStorage.setItem('sessionTurn',JSON.stringify(info));
        redirect();
    }else{
        message("Rellene todos los campos por favor",'error')
    }
})

function generateRandomDate() {
    const turnDates = [];
    let i = 0;    
    while(i < 5){
        let newDate = new Date(+(new Date()) + Math.floor(Math.random() * 10000000000));
        let year = newDate.getFullYear()
        let month = newDate.getMonth() + 1;
        let day = newDate.getDate()
        let dayName = getDayName(newDate, "es-AR")
        let fullday = dayName + " " + day + "/" + month + "/" + year;
        turnDates.push(fullday);
        i++;
    }
    turnDates.forEach(e =>{
        let option = new Option(e)
        selectTurn.appendChild(option);
    })
    

}

function generateRandomHour(){
    let turnHour = 0;
    let turnListHour= [];
    let i = 0;    
    while(i < 6){
        turnHour = Math.floor(Math.random()*12) + 8;

        turnListHour.push(turnHour + " hs");
        i++
    }
    let hourOrder = turnListHour.sort((a,b)=>a-b);
    console.log(hourOrder);
    hourOrder.forEach(e =>{
        let option = new Option(e)
        selectHour.appendChild(option);
    });
}

const selectSpecialFill = (medSp) =>{
    medSp.forEach(e =>{
        let option  = new Option(e)
        selectSp.appendChild(option);
    })
}

function redirect(){
    window.location.href = './turnpatient.html';
} 

const filterBySpeciality = (medSpecial) => {
    fetch("../data/medics.json")
    .then(res => res.json()
    .then(medics => medics.filter(e => e.speciality == medSpecial)))
    .then(response => selectMedicFill(response))
}

function selectMedicFill(medfill){
    medfill.forEach(e => {
    let option = new Option(e.first_name + " " + e.last_name)  
    select.appendChild(option);
    });
}
function getDayName(dateStr, locale){
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
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

patientInfo();
selectSpecialFill(speciality);