console.log("**********12**********");
//Make code review and try to use scope

// const makeDishes = function(sheffName, dishesName){
//     return console.log(`Shief ${sheffName} — dishes ${dishesName}`);
// }

// makeDishes("Eugen","Soup");
// makeDishes("Hanna","Beef");
// makeDishes("Eugen","Potatos");
// makeDishes("Hanna","Salade");

const shief_Name = function(shiefName){
    const shief = shiefName;
    return function doDishes (dishesName){
        console.log(`${shief} — is a Main shief Shief. Today ${shiefName} do — ${dishesName}`);
    }  
}

const eugenShief = shief_Name("Eugen");
eugenShief("SOUP");
eugenShief("SALADE");
const hannaShief = shief_Name("Hanna");
hannaShief("BEEF");
hannaShief("ICE-CREAM");
eugenShief("TOURKEY");

//The same VAR2:
const shiefName2 = function(shief_Name2){
    const shief = shief_Name2;
const doDishes = function(dishesName){
        console.log(`${shief} — is a Main shief Shief. Today ${shief_Name2} do — ${dishesName}`);
    }  
    return doDishes;
}
console.log("***var2**");
const eugenSh = shiefName2("Eugen");
eugenSh("SOUP");
eugenSh("SALADE");
const hannaSh = shiefName2("Hanna");
hannaSh("BEEF");
hannaSh("ICE-CREAM");
hannaSh("TOURKEY");