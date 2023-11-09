// getting the current position of the device
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
let crd = ""
function success(pos) {
  crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  const map = L.map("map_container").setView([crd.latitude, crd.longitude], 11)
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?', {}).addTo(map)
  map.on("click", event => {
    console.log(event.latlng)
    const marker = L.marker([event.latlng.lat, event.latlng.lng]).addTo(map)
  })
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
navigator.geolocation.watchPosition(success, error, options)


