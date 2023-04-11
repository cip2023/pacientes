let todosLosProtocolos = [
"CA209-7DX",
"CA209-67T(Grupo-B)",
"213410",
"C3441021",
"EFC15935",
"Lupus",
"C3441052",
"CA209-67T(Grupo-A)"];


let arrayC3441052 = ["Screening", "Week 1 Lab Seguridad","Week 3 Lab Seguridad","Week 5 Dispensa","Week 7 Lab Seguridad","Week 9 Dispensa","Week 11 Lab Seguridad","Week 13 Dispensa","Week 15 Lab Seguridad","Week 17 Dispensa","Week 21 Dispensa","Week 25 Dispensa","Week 29",
"Week 33 Dispensa","Week 37 Dispensa", "Week 41 Dispensa", "Week 45 Dispensa","Week 49 Dispensa","Week 53 Dispensa","Week 57 Dispensa","Week 61 Dispensa","Week 65 Dispensa","Week 69 Dispensa","Week 73 Dispensa",
"Week 77 Dispensa","Week 81 Dispensa","Week 85 Dispensa","Week 89 Dispensa","Week 93 Dispensa","Week 97 Dispensa","Week 101 Dispensa","Week 105 Dispensa","Week 109 Dispensa","Week 113 Dispensa","Week 117 Dispensa","Follow Up 28 días", "Follow Up C8S (1)", "Follow Up C8S (2)"];

let arraySunrise2 = ["Scr","Rando","Week 0","Week 3","Week 6","Week 9","Week 12","Week 15","Week 18"
,"Week 21","Week 24","Week 27","Week 30","Week 33","Week 36","Week 39","Week 42","Week 45"
,"Week 48","Week 51","Week 54","Week 57","Week 60","Week 63","Week 66","Week 69","Week 72","Week 75","Week 78","Week 84"
,"Week 96","Week 108","Week 120","Week 132","Week 144","EOT","Segto(30)","Segto(100d)","Week 6"];

let arrayLupus = ["Screening", "V1 S0", "V2 S1", "V3 S2", "V4 S4", "V5 S8", "V6 S12", "V7 S16", "V8 S20", "V9 S24", "V10 S28", "V11 S32", "V12 S36"
, "V13 S40", "V14 S44", "V15 S48", "V16 S52 EOT", "Seg(1) 6 semanas despues ult dosis","Seg(2) 10 semanas despues ult dosis"]

let arrayEFC15935 = ["Screening", "C1D1", "C1D15", "C2D1", "C2D15", "C3D1", "C4D1", "C5D1", "C6D1", "C7D1", "C8D1"
, "C9D1", "C10D1", "C11D1", "C12D1", "C13D1", "C14D1", "C15D1", "C16D1", "C17D1", "C18D1", "C19D1", "C20D1", "C21D1"
, "C22D1", "C23D1", "C24D1", "C25D1", "C26D1", "C27D1", "C28D1", "C29D1", "C30D1", "C31D1", "C32D1", "C33D1", "C34D1"
, "C35D1", "FdT(1)", "FdT(2)", "FdT(3)", "FdT(4)", "FdT(5)", "FdT(6)", "FdT(7)", "FdT(8)", "FdT(9)", "FdT(10)", "FdT(11)"
, "FdT(12)", "FdT(13)", "FdT(14)", "FdT(15)", "FdT(16)", "FdT(17)", "FdT(18)", "FdT(19)", "FdT(20)", "FdT(21)", "FdT(22)"
, "FdT(23)", "FdT(24)", "FdT(25)"];


let arrayC3441021 = ["Screening", "Week 1", "Week 3", "Week 5", "Week 7", "Week 9", "Week 11 ", "Week 13", "Week 15", "Week 17", "Week 21"
, "Week 25", "Week 29", "Week 33", "Week 37", "Week 41", "Week 45", "Week 49", "Week 53", "Week 57", "Week 61", "Week 65", "Week 69", "Week 73", 
"Week 77", "Week 81", "Week 85", "Week 89", "Week 93", "Week 97", "Week 101", "Week 105", "Week 109", "Week 117", "Week 121", "Week 125"
, "Week 133", "Week 141", "Week 145", "Week 149", "Week 157", "Week 165", "Week 169", "Week 173", "Week 181", "Week 189", "Week 193", "Week 197", "Week 205", 
"Week 213", "Week 217", "Week 221", "Week 229", "Week 237", "Week 241", "Week 245", "Week 253", "Sgto Seguridad", "LT_FUP(1)", "LT_FUP(2)", "LT_FUP(3)", "LT_FUP(4)"
, "LT_FUP(5)", "LT_FUP(6)", "LT_FUP(7)", "LT_FUP(8)", "LT_FUP(9)", "LT_FUP(10)"];

let arrayCA2097DX = ["Screening", "C1","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11",
"C12","C13","C14","C15","C16","C17","C18","C19","C20","C21","C22","C23","C24","C25","C26",
"C27","C28","C29","C30","C31","C32","C33","C34", "Sgto (1)", "Sgto (2)", "Supervivencia (1)", "Supervivencia (2)", "Supervivencia (3)"];

let arrayCA20967T = ["Screening", "C1D1","C1D8","C2D1","C2D8","C3","C4","C5","C6","C7","C8","C9","C10","C11",
"C12","C13","C14","C15","C16","C17","C18","C19","C20","C21","C22","C23","C24","C25","C26",
"C27","C28","C29","C30","C31","C32","C33","C34","C35","C36","C37","C38","C39","C40","C41"
,"C42","C43","C44","C45","C46","C47","C48","C49","C50","C51","C52", "Sgto (1)", "Sgto (2)", "Supervivencia (1)", "Supervivencia (2)", "Supervivencia (3)"];

let arrayCA20967TA = ["Screening", "C1D1", "C1D4","C1D8", "C1D15", "C1D22","C2","C3","C4","C5","C6","C7","C8","C9","C10","C11",
"C12","C13","C14","C15","C16","C17","C18","C19","C20","C21","C22","C23","C24","C25","C26",
"C27","C28","C29","C30","C31","C32","C33","C34","C35","C36","C37","C38","C39","C40","C41"
,"C42","C43","C44","C45","C46","C47","C48","C49","C50","C51","C52", "Sgto (1)", "Sgto (2)", "Supervivencia (1)", "Supervivencia (2)", "Supervivencia (3)"];

let arrayIMGCA2097DX = ["P. Dosis (C1D1)","Week 9", "Week 18", "Week 27", "Week 36", "Week 45", "Week 54","Week 66", "Week 78", "Week 90", "Week 102", "Week 114", "Week 126", "Week 138", "Week 150..."];

let arrayIMGC3441052 = ["Week 1","Week 9", "Week 17","Week 25", "Week 33","Week 41","Week 49","Week 57","Week 69","Week 81","Week 93","Week 105"];

let array213410 = ["Screening","C1D1 PK y ADA","C1D8","C1D15","C2D1 PK y ADA","C3D1 PK y ADA","C4D1 PK y ADA","C5D1","C6D1 PK y ADA","C7D1","C8D1 PK y ADA","C9D1","C10D1 PK y ADA","C11D1",
"C12D1","C13D1","C14D1","C15D1","C16D1 PK y ADA","C17D1","C18D1","C19D1","C20D1","C21D1","C22D1 PK Y ADA","EOT","FUP(1)", "FUP(2)", "FUP-POST(1)", "FUP-POST(2)", "FUP-POST(3)"];

let arrayIMGCA20967T = ["Rando", "Week 8", "Week 16", "Week 24", "Week 32", "Week 40", "Week 48", "Week 60", "Week 72", "Week 84", "Week 96", "Week 120", "Week 144..."];

let arrayIMG213410 = ["Week 6","Week 12", "Week 18", "Week 27","Week 36","Week 45","Week 54","Week 66","Week 78","Week 90","Week 102","Week 114","Week 126"];

function Recorrer(combobox,valores)
{

    ciclos.innerHTML=''

    for(let index of valores){
        combobox.innerHTML += `
        <option>${index}</option>
        `
    }
};

function llenarProtocolos(){
    Recorrer(protocolos,todosLosProtocolos)
};

llenarProtocolos()

function RecorrerIMG(combobox,valores)
{

    select.innerHTML=''

    for(let index of valores){
        combobox.innerHTML += `
        <option>${index}</option>
        `
    }
};


protocolos.addEventListener('change', (e)=>{
    let dato = e.target.value
    switch (dato){
        case'C3441021':
        Recorrer(ciclos, arrayC3441021)
        break;
    }
})

protocolos.addEventListener('change', (e)=>{
    let dato = e.target.value
    switch (dato){
        case'EFC15935':
        Recorrer(ciclos, arrayEFC15935)
        break;
    }
})

protocolos.addEventListener('change', (e)=>{
    let dato = e.target.value
    switch (dato){
        case'C3441052':
        selecciones.appendChild(select);
        select.id = "Week";
        Recorrer(ciclos, arrayC3441052)
        RecorrerIMG(select, arrayIMGC3441052)
        selecciones.appendChild(selectFecha);
        break;
    }
})


protocolos.addEventListener('change', (e)=>{
    let dato = e.target.value
    switch (dato){
        case'213410':
        selecciones.appendChild(select);
        select.id = "Week";
        Recorrer(ciclos, array213410)
        RecorrerIMG(select, arrayIMG213410)
        selecciones.appendChild(selectFecha);
        break;
    }
})

protocolos.addEventListener('change', (e)=>{
    let dato = e.target.value
    switch (dato){
        case'CA209-7DX':
        selecciones.appendChild(select);
        select.id = "Week";
        Recorrer(ciclos, arrayCA2097DX)
        RecorrerIMG(select, arrayIMGCA2097DX)
        selecciones.appendChild(selectFecha);
        break;
    }
})

protocolos.addEventListener('change', (e)=>{
    let dato = e.target.value
    switch (dato){
        case'Lupus':
        Recorrer(ciclos, arrayLupus)
        break;
    }
})

protocolos.addEventListener('change', (e)=>{
    let dato = e.target.value
    switch (dato){
        case'CA209-67T(Grupo-A)':
        select.id = "Week"
        selecciones.appendChild(select);
        Recorrer(ciclos, arrayCA20967TA)
        RecorrerIMG(select, arrayIMGCA20967T)
        selecciones.appendChild(selectFecha);
        break;
    }
})


let select = document.createElement("select");
let selecciones = document.querySelector('#selecciones');


let selectFecha = document.createElement("input");
selectFecha.type = 'date';
selectFecha.id = "fechaWeek";



protocolos.addEventListener('change', (e)=>{
    let dato = e.target.value
    switch (dato){
        case'CA209-67T(Grupo-B)':
        select.id = "Week"
        selecciones.appendChild(select);
        Recorrer(ciclos, arrayCA20967T)
        RecorrerIMG(select, arrayIMGCA20967T)
        selecciones.appendChild(selectFecha);
        break;
    }
})

protocolos.addEventListener('change', (e)=>{
    let dato = e.target.value
    switch (dato){
        case'ACT-16432':
        Recorrer(ciclos, arrayACT16432)
        break;
    }
})

/*-------------------------------------------------------------- */

document.querySelector('#submit').addEventListener('click', savePaciente);
document.querySelector('#calcular').addEventListener('click', calcularVisitas);
document.querySelector('#calcular').addEventListener('click', drawFechasList);
document.querySelector('#eliminar').addEventListener('click', deletePatientObj);

const inputFiltro = document.querySelector('#txtFiltro');
inputFiltro.addEventListener('keyup', drawPacienteList)
drawPacienteList();
drawFechasList()


function savePaciente (){
    var sId = document.querySelector('#numeroPaciente').value,
        sName = document.querySelector('#nombre').value,
        sApellido = document.querySelector('#apellido').value,
        sLocalidad = document.querySelector('#localidad').value,
        sNumero = document.querySelector('#numeroPaciente').value,
        sProtocolo = document.querySelector('#protocolos').value,
        sCiclo = document.querySelector('#ciclos').value,
        sFecha =  document.querySelector('#fechaCiclo').value;
        ImgFecha = document.querySelector('#fechaWeek').value;
        ImgWeek = document.querySelector('#Week').value;

    addPacienteToSystem(sId, sName, sApellido, sLocalidad, sNumero, sProtocolo, sCiclo, sFecha, ImgWeek, ImgFecha);
    drawPacienteList();
}

function drawFechasList(){
    var list = getPacienteList(),
        imgtbody = document.querySelector('#pacienteImagenes tbody');
        tbody = document.querySelector('#pacienteFechas tbody');
        tbody.innerHTML = "";
        imgtbody.innerHTML = "";

         
 
    for(var i = 0; i < list.length; i++){
        let fechahoy = new Date();
        for(var r = 0; r < list[i].visitasList.length; r++){
            var row = tbody.insertRow(i);
            var ldias = list[i].visitasList[r].dias;
            var lmeses = list[i].visitasList[r].meses;
            var laños = list[i].visitasList[r].años;
            if(new Date(laños,lmeses,ldias) > new Date(fechahoy.getFullYear(), (fechahoy.getMonth() + 1), fechahoy.getDate()) && new Date(laños,lmeses,ldias) <=  new Date(fechahoy.getFullYear(), (fechahoy.getMonth() + 1), (fechahoy.getDate() + 30))  ){
                numeroCell = row.insertCell(0),
                cicloCell = row.insertCell(1),
                fechaCell = row.insertCell(2);
                fechaCell.innerHTML = (`${ldias}/${lmeses}/${laños}`);
                numeroCell.innerHTML = list[i].numero;
                cicloCell.innerHTML = list[i].visitasList[r].ciclos;
            }
        }

        for(var r = 0; r < list[i].imagenesList.length; r++){
            var iidias = list[i].imagenesList[r].imgdias;
            var iimeses = list[i].imagenesList[r].imgmeses;
            var iiaños = list[i].imagenesList[r].imgaños;
            var imgrow = imgtbody.insertRow(i);
            if(new Date(iiaños,iimeses,iidias) > new Date(fechahoy.getFullYear(), (fechahoy.getMonth() + 1), fechahoy.getDate()) && new Date(iiaños,iimeses,iidias) <=  new Date(fechahoy.getFullYear(), (fechahoy.getMonth() + 1), (fechahoy.getDate() + 30))  ){
                numeroCell = imgrow.insertCell(0),
                ifechaCell = imgrow.insertCell(1);
                ifechaCell.innerHTML = (`${iidias}/${iimeses}/${iiaños}`);
                numeroCell.innerHTML = list[i].numero;
            }
        }
    }
}


function drawPacienteList(){
    let filtro = inputFiltro.value;
    var list = getPacienteList(),
        tbody = document.querySelector('#pacienteTable tbody');
         tbody.innerHTML = "";
 
    for(var i = 0; i < list.length; i++){
        var row = tbody.insertRow(i);
        if(list[i].nombre.toLowerCase().includes(filtro.toLowerCase()) ||  
        list[i].apellido.toLowerCase().includes(filtro.toLowerCase()) ||  
        list[i].protocolo.toLowerCase().includes(filtro.toLowerCase()) ||
        list[i].numero.toLowerCase().includes(filtro.toLowerCase()) ){
            
            var nombreCell = row.insertCell(0),
            apellidoCell = row.insertCell(1),
            localidadCell = row.insertCell(2),
            numeroCell = row.insertCell(3),
            protocoloCell = row.insertCell(4),
            cicloCell = row.insertCell(5),
            fechaCell = row.insertCell(6),
            selectCell = row.insertCell(7);
    
    
    
            nombreCell.innerHTML = list[i].nombre;
            apellidoCell.innerHTML = list[i].apellido;
            localidadCell.innerHTML = list[i].localidad;
            numeroCell.innerHTML = list[i].numero;
            protocoloCell.innerHTML = list[i].protocolo;
            cicloCell.innerHTML = list[i].ciclo;
            fechaCell.innerHTML = list[i].fecha;
    
            var inputSelect = document.createElement('input');
            inputSelect.type = 'radio';
            inputSelect.value = list[i].numero;
            inputSelect.name = "rbtPaciente";
            selectCell.appendChild(inputSelect);
    
            tbody.appendChild(row);
        }

       
    }
}

function deletePatientObj(){
    let abc = document.querySelector('#pacienteTable tbody input[type="radio"]:checked').value
    let patientObjArr = JSON.parse(localStorage.getItem("localPacienteList"));
    let patientIndexInArr = patientObjArr.findIndex(element => element.id === abc);
    patientObjArr.splice(patientIndexInArr, 1);
    let patientObjArrJSON = JSON.stringify(patientObjArr);
    localStorage.setItem("localPacienteList", patientObjArrJSON );
    alert("Actualizá la página");
}


function calcularVisitas(){
    sOwnerid = document.querySelector('#pacienteTable tbody input[type="radio"]:checked').value;
    var pacienteObj = findPaciente(sOwnerid);
    
    fecha = new Date((pacienteObj.fecha)+"T00:00:00");
    ifecha = new Date((pacienteObj.weekFecha)+"T00:00:00");

    function findCiclo(value){
        return value === pacienteObj.ciclo;
    }

    function findWeek(value){
        return value === pacienteObj.week;
    }
    
    const costar213410 = array213410.findIndex(findCiclo);
    const c3441021 = arrayC3441021.findIndex(findCiclo);
    const ca2097dx = arrayCA2097DX.findIndex(findCiclo);
    const ca20967T = arrayCA20967T.findIndex(findCiclo);
    const efc15935 = arrayEFC15935.findIndex(findCiclo);
    const lupus = arrayLupus.findIndex(findCiclo);
    const c3441052 = arrayC3441052.findIndex(findCiclo);
    const ca20967ta = arrayCA20967TA.findIndex(findCiclo);
    const ca2097dxweek = arrayIMGCA2097DX.findIndex(findWeek);
    const ca20967tweek = arrayIMGCA20967T.findIndex(findWeek);
    const c3441052week = arrayIMGC3441052.findIndex(findWeek);
    
 /************************************************************************** */
 if (pacienteObj.protocolo == "C3441021"){
    for(var e = c3441021; e < arrayC3441021.length; e++){
        if(e == c3441021){
            fecha.setDate(fecha.getDate());
            sCiclos = arrayC3441021[e];
            sDias = fecha.getDate();
            sMeses = (fecha.getMonth()+1);
            sAños = fecha.getFullYear();
            addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)       
        } else if( e > c3441021  && e <=1){
            fecha.setDate(fecha.getDate() + 28);
            sCiclos = arrayC3441021[e];
            sDias = fecha.getDate();
            sMeses = (fecha.getMonth()+1);
            sAños = fecha.getFullYear();
            addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
        } else if( e > c3441021  && e <=9){
            fecha.setDate(fecha.getDate() + 14);
            sCiclos = arrayC3441021[e];
            sDias = fecha.getDate();
            sMeses = (fecha.getMonth()+1);
            sAños = fecha.getFullYear();
            addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
        } else if( e > 9  && e <=18){
            fecha.setDate(fecha.getDate() + 28);
            sCiclos = arrayC3441021[e];
            sDias = fecha.getDate();
            sMeses = (fecha.getMonth()+1);
            sAños = fecha.getFullYear();
            addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
        }else if( e > 18  && e <=56){
            fecha.setDate(fecha.getDate() + 56);
            sCiclos = arrayC3441021[e];
            sDias = fecha.getDate();
            sMeses = (fecha.getMonth()+1);
            sAños = fecha.getFullYear();
            addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
        }else if( e > 56  && e <=57){
            fecha.setDate(fecha.getDate() + 28);
            sCiclos = arrayC3441021[e];
            sDias = fecha.getDate();
            sMeses = (fecha.getMonth()+1);
            sAños = fecha.getFullYear();
            addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
        }else if( e > 57  && e <=67){
            fecha.setDate(fecha.getDate() + 84);
            sCiclos = arrayC3441021[e];
            sDias = fecha.getDate();
            sMeses = (fecha.getMonth()+1);
            sAños = fecha.getFullYear();
            addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
        }
    }
}


 /************************************************************************** */

    if (pacienteObj.protocolo == "213410"){
        for(var e = costar213410; e < array213410.length; e++){
            if(e == costar213410){
                fecha.setDate(fecha.getDate());
                sCiclos = array213410[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)       
            } else if( e > costar213410  && e <=1){
                fecha.setDate(fecha.getDate() + 28);
                sCiclos = array213410[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if( e > costar213410  && e <=24){
                fecha.setDate(fecha.getDate() + 21);
                sCiclos = array213410[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if( e > 24  && e <=25){
                fecha.setDate(fecha.getDate() + 7);
                sCiclos = array213410[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            }else if( e > 25  && e <=26){
                fecha.setDate(fecha.getDate() + 23);
                sCiclos = array213410[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            }else if( e > 26  && e <=27){
                fecha.setDate(fecha.getDate() + 60);
                sCiclos = array213410[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            }else if( e > 27  && e <=30){
                fecha.setDate(fecha.getDate() + 90);
                sCiclos = array213410[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            }
        }
    }

 /************************************************************************** */

    if (pacienteObj.protocolo == "CA209-7DX"){
        for(var e = ca2097dx; e < arrayCA2097DX.length; e++){
            if(e == ca2097dx){
                fecha.setDate(fecha.getDate());
                sCiclos = arrayCA2097DX[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)       
            } else if( e > ca2097dx  && e <=1){
                fecha.setDate(fecha.getDate() + 28);
                sCiclos = arrayCA2097DX[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if( e > ca2097dx  && e <=11){
                fecha.setDate(fecha.getDate() + 21);
                sCiclos = arrayCA2097DX[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if(e > 11 && e <= 34){
                fecha.setDate(fecha.getDate() + 28); 
                sCiclos = arrayCA2097DX[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            }else if(e > 34 && e <= 35){
                fecha.setDate(fecha.getDate() + 30); 
                sCiclos = arrayCA2097DX[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            }else if(e > 35 && e <= 36){
                fecha.setDate(fecha.getDate() + 70); 
                sCiclos = arrayCA2097DX[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            }else if(e > 36 && e <= 39){
                fecha.setDate(fecha.getDate() + 90); 
                sCiclos = arrayCA2097DX[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            }
                
        }

        for(var e = ca2097dxweek; e < arrayIMGCA2097DX.length; e++){
            if(e == ca2097dxweek){
            ifecha.setDate(ifecha.getDate());
            iWeek = arrayIMGCA2097DX[e];
            iDias = ifecha.getDate();
            iMeses = (ifecha.getMonth() + 1);
            iAños = ifecha.getFullYear();
            addImagenesToPaciente(pacienteObj,iWeek, iDias, iMeses, iAños)
            } else if(e > ca2097dxweek && e <= 6 ){
                ifecha.setDate(ifecha.getDate() + 63);
            iWeek = arrayIMGCA2097DX[e];
            iDias = ifecha.getDate();
            iMeses = (ifecha.getMonth() + 1);
            iAños = ifecha.getFullYear();
            addImagenesToPaciente(pacienteObj,iWeek, iDias, iMeses, iAños)
            }
            else if(e > 6 && e <= 14 ){
            ifecha.setDate(ifecha.getDate() + 84);
            iWeek = arrayIMGCA2097DX[e];
            iDias = ifecha.getDate();
            iMeses = (ifecha.getMonth() + 1);
            iAños = ifecha.getFullYear();
            addImagenesToPaciente(pacienteObj,iWeek, iDias, iMeses, iAños)
            }
        }
    } 


 /************************************************************************** */
    if (pacienteObj.protocolo == "CA209-67T(Grupo-B)"){
        for(var e = ca20967T; e < arrayCA20967T.length; e++){
            if(e == ca20967T){
                fecha.setDate(fecha.getDate());
                sCiclos = arrayCA20967T[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)       
            } else if( e > ca20967T  && e <=1){
                fecha.setDate(fecha.getDate() + 28);
                sCiclos = arrayCA20967T[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if( e > ca20967T  && e <=54){
                fecha.setDate(fecha.getDate() + 14);
                sCiclos = arrayCA20967T[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if(e > 54 && e <= 55){
                fecha.setDate(fecha.getDate() + 30); 
                sCiclos = arrayCA20967T[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if(e > 55 && e <= 56){
                fecha.setDate(fecha.getDate() + 70); 
                sCiclos = arrayCA20967T[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if(e > 56 && e <= 59){
                fecha.setDate(fecha.getDate() + 90); 
                sCiclos = arrayCA20967T[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            }
        }

        for(var e = ca20967tweek; e < arrayIMGCA20967T.length; e++){
            if(e == ca20967tweek){
            ifecha.setDate(ifecha.getDate());
            iWeek = arrayIMGCA20967T[e];
            iDias = ifecha.getDate();
            iMeses = (ifecha.getMonth() + 1);
            iAños = ifecha.getFullYear();
            addImagenesToPaciente(pacienteObj,iWeek, iDias, iMeses, iAños)
            } else if(e > ca20967tweek && e <= 6 ){
                ifecha.setDate(ifecha.getDate() + 56);
            iWeek = arrayIMGCA20967T[e];
            iDias = ifecha.getDate();
            iMeses = (ifecha.getMonth() + 1);
            iAños = ifecha.getFullYear();
            addImagenesToPaciente(pacienteObj,iWeek, iDias, iMeses, iAños)
            }
            else if(e > 6 && e <= 11 ){
            ifecha.setDate(ifecha.getDate() + 84);
            iWeek = arrayIMGCA20967T[e];
            iDias = ifecha.getDate();
            iMeses = (ifecha.getMonth() + 1);
            iAños = ifecha.getFullYear();
            addImagenesToPaciente(pacienteObj,iWeek, iDias, iMeses, iAños)
            }
            else if(e > 11 && e <= 16 ){
            ifecha.setDate(ifecha.getDate() + 168);
            iWeek = arrayIMGCA20967T[e];
            iDias = ifecha.getDate();
            iMeses = (ifecha.getMonth() + 1);
            iAños = ifecha.getFullYear();
            addImagenesToPaciente(pacienteObj,iWeek, iDias, iMeses, iAños)
            }
        }
    }

    if (pacienteObj.protocolo == "CA209-67T(Grupo-A)"){
        for(var e = ca20967ta; e < arrayCA20967TA.length; e++){
            if(e == ca20967ta){
                fecha.setDate(fecha.getDate());
                sCiclos = arrayCA20967TA[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)       
            } else if( e > ca20967ta  && e <=1){
                fecha.setDate(fecha.getDate() + 28);
                sCiclos = arrayCA20967TA[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if( e > ca20967ta  && e <=3){
                fecha.setDate(fecha.getDate() + 4);
                sCiclos = arrayCA20967TA[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if( e > 3  && e <= 5){
                fecha.setDate(fecha.getDate() + 7);
                sCiclos = arrayCA20967TA[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if( e > 5  && e <=58){
                fecha.setDate(fecha.getDate() + 28);
                sCiclos = arrayCA20967TA[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if(e > 58 && e <= 59){
                fecha.setDate(fecha.getDate() + 30); 
                sCiclos = arrayCA20967TA[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if(e > 59 && e <= 60){
                fecha.setDate(fecha.getDate() + 70); 
                sCiclos = arrayCA20967TA[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if(e > 60 && e <= 61){
                fecha.setDate(fecha.getDate() + 90); 
                sCiclos = arrayCA20967TA[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            }
        }

        for(var e = ca20967tweek; e < arrayIMGCA20967T.length; e++){
            if(e == ca20967tweek){
            ifecha.setDate(ifecha.getDate());
            iWeek = arrayIMGCA20967T[e];
            iDias = ifecha.getDate();
            iMeses = (ifecha.getMonth() + 1);
            iAños = ifecha.getFullYear();
            addImagenesToPaciente(pacienteObj,iWeek, iDias, iMeses, iAños)
            } else if(e > ca20967tweek && e <= 6 ){
                ifecha.setDate(ifecha.getDate() + 56);
            iWeek = arrayIMGCA20967T[e];
            iDias = ifecha.getDate();
            iMeses = (ifecha.getMonth() + 1);
            iAños = ifecha.getFullYear();
            addImagenesToPaciente(pacienteObj,iWeek, iDias, iMeses, iAños)
            }
            else if(e > 6 && e <= 11 ){
            ifecha.setDate(ifecha.getDate() + 84);
            iWeek = arrayIMGCA20967T[e];
            iDias = ifecha.getDate();
            iMeses = (ifecha.getMonth() + 1);
            iAños = ifecha.getFullYear();
            addImagenesToPaciente(pacienteObj,iWeek, iDias, iMeses, iAños)
            }
            else if(e > 11 && e <= 16 ){
            ifecha.setDate(ifecha.getDate() + 168);
            iWeek = arrayIMGCA20967T[e];
            iDias = ifecha.getDate();
            iMeses = (ifecha.getMonth() + 1);
            iAños = ifecha.getFullYear();
            addImagenesToPaciente(pacienteObj,iWeek, iDias, iMeses, iAños)
            }
        }
    }

    if (pacienteObj.protocolo == "EFC15935"){
        for(var e = efc15935; e < arrayEFC15935.length; e++){
            if(e == efc15935){
                fecha.setDate(fecha.getDate());
                sCiclos = arrayEFC15935[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)       
            } else if( e > efc15935  && e <=1){
                fecha.setDate(fecha.getDate() + 28);
                sCiclos = arrayEFC15935[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if( e > efc15935 && e <=2){
                fecha.setDate(fecha.getDate() + 15);
                sCiclos = arrayEFC15935[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if(e > 2 && e <= 3){
                fecha.setDate(fecha.getDate() + 13); 
                sCiclos = arrayEFC15935[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if(e > 3 && e <= 4){
                fecha.setDate(fecha.getDate() + 15); 
                sCiclos = arrayEFC15935[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if(e > 4 && e <= 5){
                fecha.setDate(fecha.getDate() + 13); 
                sCiclos = arrayEFC15935[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if(e > 5 && e <= 37){
                fecha.setDate(fecha.getDate() + 28); 
                sCiclos = arrayEFC15935[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if(e > 37 && e <= 38){
                fecha.setDate(fecha.getDate() + 30); 
                sCiclos = arrayEFC15935[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if(e > 38 && e <= 62){
                fecha.setDate(fecha.getDate() + 84); 
                sCiclos = arrayEFC15935[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            }
        }
    }

    if (pacienteObj.protocolo == "C3441052"){
        for(var e = c3441052; e < arrayC3441052.length; e++){
            if(e == c3441052){
                fecha.setDate(fecha.getDate());
                sCiclos = arrayC3441052[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)       
            } else if( e > c3441052  && e <= 1){
                fecha.setDate(fecha.getDate() + 28);
                sCiclos = arrayC3441052[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if( e > c3441052  && e <= 9){
                fecha.setDate(fecha.getDate() + 14);
                sCiclos = arrayC3441052[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if( e > 9  && e <= 11){
                fecha.setDate(fecha.getDate() + 28);
                sCiclos = arrayC3441052[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            }else if( e > 11  && e <= 19){
                fecha.setDate(fecha.getDate() + 56);
                sCiclos = arrayC3441052[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            }else if( e > 34  && e <=35){
                fecha.setDate(fecha.getDate() + 28);
                sCiclos = arrayC3441052[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            }else if( e > 35  && e <=37){
                fecha.setDate(fecha.getDate() + 56);
                sCiclos = arrayC3441052[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            }
            
        }
        for(var e = c3441052week; e < arrayIMGC3441052.length; e++){
            if(e == c3441052week){
            ifecha.setDate(ifecha.getDate());
            iWeek = arrayIMGC3441052[e];
            iDias = ifecha.getDate();
            iMeses = (ifecha.getMonth() + 1);
            iAños = ifecha.getFullYear();
            addImagenesToPaciente(pacienteObj,iWeek, iDias, iMeses, iAños)
            } else if(e > c3441052week && e <= 7 ){
                ifecha.setDate(ifecha.getDate() + 56);
            iWeek = arrayIMGC3441052[e];
            iDias = ifecha.getDate();
            iMeses = (ifecha.getMonth() + 1);
            iAños = ifecha.getFullYear();
            addImagenesToPaciente(pacienteObj,iWeek, iDias, iMeses, iAños)
            }
            else if(e > 7 && e <= 11 ){
            ifecha.setDate(ifecha.getDate() + 84);
            iWeek = arrayIMGC3441052[e];
            iDias = ifecha.getDate();
            iMeses = (ifecha.getMonth() + 1);
            iAños = ifecha.getFullYear();
            addImagenesToPaciente(pacienteObj,iWeek, iDias, iMeses, iAños)
            }
        }
    }

    if (pacienteObj.protocolo == "Lupus"){
        for(var e = lupus; e < arrayLupus.length; e++){
            if(e == lupus){
                fecha.setDate(fecha.getDate());
                sCiclos = arrayLupus[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)       
            } else if( e > lupus  && e <=1){
                fecha.setDate(fecha.getDate() + 30);
                sCiclos = arrayLupus[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if( e > lupus && e <=3){
                fecha.setDate(fecha.getDate() + 7);
                sCiclos = arrayLupus[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if(e > 3 && e <= 4){
                fecha.setDate(fecha.getDate() + 14); 
                sCiclos = arrayLupus[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if(e > 3 && e <= 4){
                fecha.setDate(fecha.getDate() + 15); 
                sCiclos = arrayLupus[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if(e > 4 && e <= 16){
                fecha.setDate(fecha.getDate() + 28); 
                sCiclos = arrayLupus[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if(e > 16 && e <= 17){
                fecha.setDate(fecha.getDate() + 42); 
                sCiclos = arrayLupus[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } else if(e > 17 && e <= 18){
                fecha.setDate(fecha.getDate() + 58); 
                sCiclos = arrayLupus[e];
                sDias = fecha.getDate();
                sMeses = (fecha.getMonth()+1);
                sAños = fecha.getFullYear();
                addVisitasToPaciente(pacienteObj, sCiclos, sDias, sMeses, sAños)
            } 
        }
    }
}