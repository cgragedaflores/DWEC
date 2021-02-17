function Disco() {
    this.discName = "";
    this.group = "";
    this.publicationDate = "";
    this.genere = "";
    this.location = 0;
    this.rented = false;
}
function Disco(discName, group, publicationDate, genere, location) {
    this.discName = discName;
    this.group = group;
    this.publicationDate = publicationDate;
    this.genere = genere;
    this.location = location;
    this.rented = false;
}

Disco.prototype.setLocation = function (location) {
    this.location = location;
}
Disco.prototype.setRented = function () {
    this.rented = !this.rented;
}
Disco.prototype.imprimirDisco = function () {
    return "Nombre del Disco : " + this.discName +
        "\nGrupo o Catante : " + this.group +
        "\nFecha Publicacion : " + this.publicationDate +
        "\nGenero : " + this.genere +
        "\nlocation : " + this.location +
        "\nRented : " + this.rented;
}
const  buttonCrearObjeto = document.getElementById("crear");
buttonCrearObjeto.addEventListener('click',function () {
    //CAPTURAMOS LOS POKEMONS
    let discName = document.getElementById('disc_name').value;
    let group = document.getElementById('group').value;
    let publicacionDate = document.getElementById('date').value;
    let genere = document.getElementById('genere').value;
    //let location = document.getElementById('location').value;
    let rented;
    if (document.getElementById('r1').checked) {
        rented = document.getElementById('r1').value;
    }else if(document.getElementById('r2').checked){
        rented = document.getElementById('r2').value;
    }
    console.log(discName);
    console.log(group);
    console.log(publicacionDate);
    console.log(genere);
    console.log(location);
    console.log(rented);

    //CREAMOS EL NUEVO DISCO
    let d1 = new Disco(discName,group,publicacionDate,genere,0,rented);
    let informacionDisco = d1.imprimirDisco();
    document.getElementById("texto").innerText = ""+informacionDisco;
});