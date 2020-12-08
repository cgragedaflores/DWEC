for(let horaInicio = 9; horaInicio < 22; horaInicio++){
    for(let miniutoInicio = 0; miniutoInicio < 65; miniutoInicio+=5){
        document.write(horaInicio+ " : "+miniutoInicio+"<br/>");
        if (miniutoInicio > 60) {
            miniutoInicio = 0;
        }
    }
}