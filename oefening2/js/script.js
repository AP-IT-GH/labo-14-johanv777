let firstNames = ["Emma","Liam","Sophie","Noah","Fatima"];
let lastNames = ["Pietersen","DeVries","Bakker","Legrand","Errazoukki"];

if (firstNames.length != lastNames.length)
{
    console.log("FOUT: De Arrays zijn niet even lang");
}

for (let i=0; i < firstNames.length; i++){
console.log(firstNames[i] + " " + lastNames[i]);
}

