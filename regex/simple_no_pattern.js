const main = (searchStr, regex) => regex.test(searchStr);

console.log(main("Sanket", /\d+/));
