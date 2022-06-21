//Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства.
//Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
//Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
console.log('***********');
console.log('EX js-7');

const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  
  function getAllPropValues(propName) {

    const valueArray = [];
  
    if(propName in products[0]){
      for(let product of products){
            valueArray.push(product[propName]);
        }
        return console.log(valueArray);
      }
    return console.log(valueArray);
  }

getAllPropValues("name");
getAllPropValues("price");
getAllPropValues("prfgnfgice");
console.log('***********');