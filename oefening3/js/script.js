let aantalVrienden = prompt("Hoeveel vrienden wil je toevoegen?");
let vriendenArray = [];

for (let i=0; i<aantalVrienden;i++){
    let vriendToevoeg = prompt("Geef de naam van de vriend");
    vriendenArray.push(vriendToevoeg);
}


for (let vriend of vriendenArray) {
    console.log(vriend);
}