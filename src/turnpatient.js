const birthdayCalc = birth =>{
    let d = new Date(birth);
    let e = new Date();
    let birthdayNumber = e.getTime() - d.getTime();
    let finalBirthday = Math.floor(birthdayNumber/1000/60/60/24/365); 
    return finalBirthday;
}

const turnData =  () =>{

    const patientData = JSON.parse(sessionStorage.getItem("sessionTurn"))
    console.log(patientData)
        let output = 
        
        `<div id="patient">
            <h2>Datos del paciente</h2>   
            <div>
                <label for="first__name">Nombre:</label>
                <p> ${patientData[0].userName} </p>
            </div>
            <div>
                <label for="last__name">Apellido:</label>
                <p>${patientData[0].userSurname}</p>
            </div>
            <div>
                <label for="birthday__date">Edad:</label>
                <p>${birthdayCalc(patientData[0].userBirthday)}</p>
            </div>
            <div>
                <label for="id__number">Numero de Documento:</label>
                <p>${patientData[0].userId}</p>
            </div>
            <div>
                <label for="health__insurance">Obra Social o Prepaga:</label>
                <p>${patientData[0].userHealthInsurance}</p>
            </div>
            <div>
            <label for="health__id">Numero de Obra Social o prepaga:</label>
            <p>${patientData[0].userHealthId}</p>
            </div>
        </div>
        <div id="medic">
            <h2>Datos del Medico</h2>
            <div>
                <label for="medics"> Medico/a:</label>
                <p>${patientData[patientData.length - 1].medicName}</p>
            </div>
            <div>
                <label for="medicsp">Especialidad:</label>
                <p>${patientData[patientData.length - 1].medicSpe}</p>
            </div>
        </div>
        <div id="date">
            <h2>Fecha del turno</h2>
            <div>
                <p>${patientData[patientData.length - 1].turnDate + " a las " + patientData[1].turnHour }<p>
            </div>
        </div>
        <button id="button">Confirmar turno</button>
        `
    document.getElementById("turn__card").innerHTML = output;
    
    let button = document.getElementById("button");

    button.addEventListener("click",function(){
        redirect();
    })
}
turnData();

function redirect(){
    window.location.href = './misturnos.html';
} 
