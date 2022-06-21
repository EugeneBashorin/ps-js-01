console.log("******№9******")
//write your own function bind
//simple

const person1 = {name: 'Michel', age: 22, job: 'frontend'}
const person2 = {name: 'Maria', age: 23, job: 'UX-UI designer'}

function logPerson(person){
    const {name, age, job} = person;
    console.log(`Person: ${name}, ${age}, ${job}`)
}

function bind(context, fn){
return fn(context)
}

bind(person1, logPerson)
bind(person2, logPerson)