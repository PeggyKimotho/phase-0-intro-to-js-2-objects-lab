// Write your solution in this file!
let employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee,
        [key]: value
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]= value;
    return employee;
    }
destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");

deleteFromEmployeeByKey