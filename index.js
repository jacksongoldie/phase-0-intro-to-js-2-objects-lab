// Write your solution in this file!
const employee = {
    name: "Dust Bunny",
    streetAddress: "404 W Mosier",
}

//Update employee nondestructive
function updateEmployeeWithKeyAndValue(employee, key, value){
    return{
        ...employee,
        [key]: value,
    }
}

//Update employee info destructive
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

//Delete key from employee nondestructive
function deleteFromEmployeeByKey(employee){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}

    /*/Other code found - need to look up object assign
    function deleteFromEmployeeByKey(obj, key, value) {
        return Object.assign({},obj, {[key] : value});
    }
    */

//Delete key from employee destructive
function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name;
    return employee;
}