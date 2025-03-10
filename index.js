const employee={}
function updateEmployeeWithKeyAndValue(employee, key, value) {
   
      return Object.assign({},employee, {[key]:value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    const   NEW_OBJ=Object.assign({},employee)
    delete NEW_OBJ[key]
    return NEW_OBJ;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    Object.assign({},employee);
    delete employee[key]
    return employee
}