let person = {
    name : "Kamrul Hasan Jaman",
    age: 22,
    sex: "Male",
    currentlyStudying: "B. Sc in ICE",
    university: "Daffodil International University",
    livingArea: "Mirpur 2"
}


console.log(person);

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person));

//Seal the object 
Object.seal(person)
// Freez the object
Object.freeze(person);

const details = {...person};

console.log(details);


// for ... im

for(const key in details){
   // console.log(`${key} : ${details.key}`); It doesn't work 

   console.log(`${key} : ${details[key]}`);  
}

console.log(`\n`);

//for of loop in an object

for (let [key, value] of Object.entries(person)) {
    console.log(`key: ${key}, value: ${value}`);
    
}