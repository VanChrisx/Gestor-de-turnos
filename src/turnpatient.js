function generateRandomDate() {
    return new Date(+(new Date()) + Math.floor(Math.random() * 10000000000));
    }

const birthdayCalc = birth =>{
    let d = new Date(birth);
    let e = new Date();
    let birthdayNumber = e.getTime() - d.getTime();
    let finalBirthday = Math.floor(birthdayNumber/1000/60/60/24/365); 
    return finalBirthday;
}

const turnData =  () =>{
    const patientData = JSON.parse(sessionStorage.getItem("patientData"))

        let output = 
        
        `<div id="patient">
            <h2>Datos del paciente</h2>   
            <div>
                <label for="first__name">Nombre:</label>
                <p> ${patientData.userName} </p>
            </div>
            <div>
                <label for="last__name">Apellido:</label>
                <p>${patientData.userSurname}</p>
            </div>
            <div>
                <label for="birthday__date">Edad:</label>
                <p>${birthdayCalc(patientData.userBirthday)}</p>
            </div>
            <div>
                <label for="id__number">Numero de Documento:</label>
                <p>${patientData.userId}</p>
            </div>
            <div>
                <label for="health__insurance">Obra Social o Prepaga:</label>
                <p>${patientData.userHealthInsurance}</p>
            </div>
            <div>
            <label for="health__id">Numero de Obra Social o prepaga:</label>
            <p>${patientData.userHealthId}</p>
            </div>
        </div>
        <div id="medic">
            <h2>Datos del Medico</h2>
            <div>
                <label for="medics"> Medico/a:</label>
                <p>${patientData.medMedics}</p>
            </div>
            <div>
                <label for="medicsp">Especialidad:</label>
                <p>${patientData.medMedicSp}</p>
            </div>
        </div>
        <div id="date">
            <h2>Fecha del turno</h2>
            <div>
                <p>${new generateRandomDate().toLocaleDateString('es-AR')}<p>
            </div>
        </div>
        `
        

    document.getElementById("turn__card").innerHTML = output;
}

turnData();