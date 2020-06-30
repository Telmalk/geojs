const ged = require("geo-distance");

const center = {
    lon: 48.9718842,
    lat: 2.2603381,
};

const point = {
    lon: 48.970039,
    lat: 2.263557,
};



console.log(ged.between(center, point).human_readable());

const x1 =  2.2603381;
const y1 =  48.9718842;
const x2 =  2.263557;
const y2 =  48.970039;
const R = 6371e3;
const phi1 = x1 * Math.PI/180;
const phi2 = x2 * Math.PI/180;
const deltaPhi = (x2-x1) * Math.PI/180;
const deltaLambda = (y2-y1) * Math.PI/180;

const calc = Math.sin(deltaPhi/2) * Math.sin(deltaPhi/2) + Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda/2) * Math.sin(deltaLambda/2);
const distanceInRadians = 2 * Math.atan2(Math.sqrt(calc), Math.sqrt(1 - calc));

const distanceInMeters = parseInt(R * distanceInRadians, 10);
console.log(distanceInMeters);