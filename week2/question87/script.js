let arr = [-5, 1, 5, 0, -7];
let altitude = 0;
let maxAltitude = 0;
for (let i = 0; i < arr.length; i++) {
  altitude += arr[i];
  if (altitude > maxAltitude) {
    maxAltitude = altitude;
  }
}
console.log(maxAltitude);
