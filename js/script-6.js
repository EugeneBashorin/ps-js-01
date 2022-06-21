// make function formatTime(minutes), wich convert minutes to hours and minutes HH:mm
console.log('EX js-6');
function formatTime(minutes){
//const hh = Math.round(minutes / 60);
const hh = Math.floor(minutes / 60);
const hFormate = String(hh).padStart(2, 0);

const mm = minutes % 60; 
const mFormate = String(mm).padEnd(2, 0);

return `${minutes} min is ${hFormate}:${mFormate} hh:mm`;
}
console.log(formatTime(76));
console.log(formatTime(83));
