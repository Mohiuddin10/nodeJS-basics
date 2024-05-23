const myName = () => {
    return "Mohammad mohiuddin"
}

const myAge = () => {
    return 32;
}

const cgpa = 3.88;

const myGrade = (cgpa) => {
    return cgpa;
}

// console.log(`my name ${myName()}, my age is ${myAge()}, CGPA: ${myCGPA()}`); 

// exports.name = myName; 

module.exports = {
    myName,
    myAge,
    myGrade
}