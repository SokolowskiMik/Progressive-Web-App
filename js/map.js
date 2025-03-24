const map = L.map('map').setView([50.06914, 19.9547], 17);
        
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const marker = L.marker([50.06914, 19.9547]).addTo(map);

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            marker.setLatLng([latitude, longitude]);
            map.setView([latitude, longitude], 17);
            document.getElementById('coords').innerText = `Lat: ${latitude}, Lng: ${longitude}`;
        }, error => {
            document.getElementById('coords').innerText = "Nie można uzyskać lokalizacji.";
        });
    } else {
        document.getElementById('coords').innerText = "Twoja przeglądarka nie obsługuje geolokalizacji.";
    }
}