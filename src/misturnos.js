let leaveSession = document.getElementById("close__session");

leaveSession.addEventListener("click",function(){
    sessionStorage.removeItem("sessionData");
    sessionStorage.removeItem("sessionTurn");
    redirect();
})

const myTurns = () =>{
    let turns = JSON.parse(sessionStorage.getItem("sessionTurn"));
    turns.shift()
    turns.forEach(e => {
        let div = document.createElement('div');
        let label = document.createElement('label');
        let p = document.createElement('p');
        div.innerHTML = `
            <div class="div">
                <label for="medico">Medico/a</label>
                <p class="medico">${e.medicName}</p>
            </div>

            <div class="div">
                <label for="especialidad">Especialidad</label>
                <p class="especialidad">${e.medicSpe}</p>
            </div>

            <div class="div">
                <label for="fecha">Fecha y hora</label>
                <p class="fecha">${e.turnDate + " a las " + e.turnHour}</p>
            </div>
            `
        
        document.querySelector("#turn__section").appendChild(div);
        
    });
}
function redirect(){
    window.location.href = '../index.html';
}

myTurns();