// Write your solution in this file!
const employee = {
    name: "Dust Bunny",
    streetAddress: "404 W Mosier",
}

//9-2-21 
function updateEmployeeWithKeyAndValue(employeeObject, key, value){
    return {
        ...employeeObject,
        [key] : value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value){
    employeeObject[key] = value;
    return employeeObject;
}


//Is this working? It passes, but I'm not sure it's deleting anything
function deleteFromEmployeeByKey(employeeObject, key){
    const newObject = {...employeeObject};
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employeeObject, key){
    delete employeeObject[key];
    return employeeObject;
}
























//Update employee nondestructive
/* function updateEmployeeWithKeyAndValue(employee, key, value){
    return{
        ...employee,
        [key]: value,
    }
} */

//Update employee info destructive
/* function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
} */

//Delete key from employee nondestructive
/* function deleteFromEmployeeByKey(employee){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
} */

    /*/Other code found - need to look up object assign
    function deleteFromEmployeeByKey(obj, key, value) {
        return Object.assign({},obj, {[key] : value});
    }
    */

//Delete key from employee destructive
/* function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name;
    return employee;
} */