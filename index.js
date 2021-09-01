function initApplication() {
  let bankAccount1 = 5;
  let bankAccount2 = 10;
  let balance = addTenLines(bankAccount1, bankAccount2);
  console.log('balance is: ' + balance);
};

function addTenLines(input1, input2) {
  console.log('BEGIN addTenLines function');
  let returnData;
  for(let i = 0; i < 9; i++) {

    input1 = input1 + input2;
    console.log('input1 is: ' + input1);

  }
  returnData = input1;
  console.log('END addTenLines function');
  return returnData;
};

function subtract(input1, input2) {
  let returnData = input1 - input2;
  return returnData;
};

initApplication();
