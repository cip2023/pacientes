var pacientesList = [];

function addPacienteToSystem(pid, pname, papellido, plocalidad, pnumero, pprotocolo, pciclo, pfecha, pWeek, pimgfecha){
    var newPaciente =  {
        id : pid,
        nombre : pname,
        apellido : papellido,
        localidad : plocalidad,
        numero : pnumero,
        protocolo : pprotocolo,
        ciclo : pciclo,
        fecha : pfecha,
        visitasList: [],
        imagenesList: [],
        week : pWeek,
        weekFecha : pimgfecha
    };
    pacientesList.push(newPaciente);
    localStoragePacientesList(pacientesList);
}

function getPacienteList(){
    var storedList = localStorage.getItem('localPacienteList');
    if(storedList == null){
        pacientesList = [];
    } else {
        pacientesList = JSON.parse(storedList);
    }
    return pacientesList;
}



function localStoragePacientesList(plist){
    localStorage.setItem('localPacienteList', JSON.stringify(plist));
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++// 

function findPaciente(pid){
    var pacienteObj;
    for (var i = 0; i < pacientesList.length; i++){
        if(pacientesList[i].id == pid){
            pacienteObj = pacientesList[i];
        }
    }
    return pacienteObj;
}



function addVisitasToPaciente(ppacienteObj, ppacienteVisitas, ppacientesDias, ppacientesMeses, ppacientesAños){
    var newFecha ={
        ciclos : ppacienteVisitas,
        dias : ppacientesDias,
        meses: ppacientesMeses,
        años : ppacientesAños
    }
    var index = pacientesList.indexOf(ppacienteObj);
    ppacienteObj.visitasList.push(newFecha);
    pacientesList[index] = ppacienteObj;
    localStoragePacientesList(pacientesList);
}


function addImagenesToPaciente(bpacienteObj, bpacienteweek, bpacientesDias, bpacientesMeses, bpacientesAños){
    var newImagen ={
        imgweek : bpacienteweek,
        imgdias : bpacientesDias,
        imgmeses: bpacientesMeses,
        imgaños : bpacientesAños
    }
    var index = pacientesList.indexOf(bpacienteObj);
    bpacienteObj.imagenesList.push(newImagen);
    pacientesList[index] = bpacienteObj;
    localStoragePacientesList(pacientesList);
}
