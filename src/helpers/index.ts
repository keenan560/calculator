const add = (arg1: string[], arg2: string[]) => {
  let left = parseFloat(arg1.join(''));
  let right = parseFloat(arg2.join(''));
  console.log('here!');
  console.log(left + right);
  return left + right;
};

const subtract = (arg1: string[], arg2: string[]) => {
  let left = parseFloat(arg1.join(''));
  let right = parseFloat(arg2.join(''));
  return left - right;
};

const divide = (arg1: string[], arg2: string[]) => {
  let left = parseFloat(arg1.join(''));
  let right = parseFloat(arg2.join(''));
  return left / right;
};

const multiply = (arg1: string[], arg2: string[]) => {
  let left = parseFloat(arg1.join(''));
  let right = parseFloat(arg2.join(''));
  return left * right;
};

const evaluate = (
  arg1: string[] | number[],
  arg2: string[] | number[],
  operator: string | undefined,
) => {
  console.log('here');
  switch (true) {
    case !arg1 || !arg2 || !operator:
      return arg2;
    case operator === '+':
      return add(arg1, arg2);
    case operator === '-':
      return subtract(arg1, arg2);
    case operator === '/':
      return divide(arg1, arg2);
    case operator === 'x':
      return multiply(arg1, arg2);
  }
};

const formatNumber = (num: any) => {
  console.log(num);

  if (typeof num === 'string') {
    return '';
  }
  if (typeof num === 'object' && num[0] === '.') {
    return num;
  }

  if (typeof num === 'object') {
    let number = parseFloat(num?.join(''));

    return number.toLocaleString('en-US');
  }
};

export {evaluate, formatNumber};
