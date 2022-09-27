console.log("Window Location:", window.location);

const myKeysValues = window.location.search;
console.log("keys & Values:", myKeysValues);

const urlParams = new URLSearchParams(myKeysValues);

const param1 = urlParams.get('name');
const param2 = urlParams.get('age');

console.log("name:", param1);
console.log("age:", param2);