const practice = function () {
  let i = 0;

  return {
    Inc: () => ++i,
    Dec: () => --i,
  };
};

const variable = practice();
console.log(variable.Inc());
console.log(variable.Inc());
console.log(variable.Inc());
console.log(variable.Dec());
console.log(variable.Dec());
console.log(variable.Dec());
