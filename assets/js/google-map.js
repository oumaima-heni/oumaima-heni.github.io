var myCenter = [35.7645, 10.8260]; // Coordonnées de Monastir, Tunisie

function initialize() {
    var map = L.map('gmap').setView(myCenter, 13); // Initialiser la carte avec les coordonnées

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    var image = 'https://4.bp.blogspot.com/-r8wyL8Asb6k/WIoMqsOAotI/AAAAAAAAAKk/YDOemVcuOgIPSjh5OCQMvEYQno1vGllcACLcB/s1600/map.png';

    var marker = L.marker(myCenter, { icon: L.icon({ iconUrl: image }) }).addTo(map)
        .openPopup();
}

document.addEventListener('DOMContentLoaded', initialize);