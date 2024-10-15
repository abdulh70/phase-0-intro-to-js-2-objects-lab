// Write your solution in this file!

const employee = {
    name: "abdul"
}
function updateEmployeeWithKeyAndValue(empl, key, value) {
    //create a copy to update destructively
    const newOb= {...empl};

    // assign a new value
    newOb[key] = value;

    return newOb;
}

function destructivelyUpdateEmployeeWithKeyAndValue(empl, key, value) {
    empl[key] = value;
    return empl;
  }
  function deleteFromEmployeeByKey(empl, key) {
    const newOb = { ...employee };
    delete newOb[key];
    return newOb;
  }
  function destructivelyDeleteFromEmployeeByKey(empl, key) {
    delete empl[key];
    return empl;
  }