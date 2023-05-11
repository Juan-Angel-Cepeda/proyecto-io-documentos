var map = L.map('map').setView([28.701462, -106.142826], 13);
let docLoad = () => {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    //Este codigo es para agregar un marcador en el mapa
    L.marker([28.701462, -106.142826]).addTo(map);
    //Este codigo es para cargar un documento en la pagina
    var myObject = document.getElementById("myDocumentShow");
    myObject.setAttribute("data", "../source/Practica_4.pdf");
    myObject.addEventListener("load", function() {
     console.log("El documento se ha cargado correctamente.");
    });
}