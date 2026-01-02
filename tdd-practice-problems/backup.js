export const readFile = (filePath) => Deno.readTextFile(filePath); //3

const extractor = (str) => {
  const [name, ...transectionSet] = str.split(",");

  return { name, transectionSet };
}; // 3

const parseCustomer = (customers) =>
  customers.then((data) => data.split("\n")).then((data) =>
    data.map(extractor)
  ); //3

const extractCustomersDetails = () => { //3
  const customers = readFile("./../data/small_data/customers.csv"); //3

  return parseCustomer(customers)
    .then(mapTransactions);
};

const parseToPromise = (content) => Promise.resolve(content);

const parseNumberes = (numberStr) =>
  numberStr.split("\n").map((number) => parseInt(number));

const summariseTransactions = (amounts) => {
  const balance = amounts.reduce(
    (balanceAcc, amount) => balanceAcc += amount,
    0,
  );

  return { transactionCount: amounts.length, balance };
};

const displayPromiseData = (data) => console.log(data);

const merge = (contents) =>
  //2
  contents.map((content) => content.trim()).join("\n");

const mapTransactions = (customers) =>
  Promise.all(
    customers.map((customer) =>
      Promise.all(
        customer.transectionSet.map((path) => readFile(`.${path}`)),
      )
    ),
  );

const main = () => {
  extractCustomersDetails()
    .then((customersTransactions) =>
      Promise.all(
        customersTransactions.map((transactions) =>
          Promise.all(transactions)
            .then(merge)
            .then(parseNumberes)
            .then(summariseTransactions)
        ),
      )
    )
    .then(displayPromiseData);
};

main();



// commit 1
const content = `-195\n826\n859\n-23\n420\n12`;

const parseToPromise = (content) => Promise.resolve(content);

const parseNumberes = (numberStr) =>
  numberStr.split("\n").map((number) => parseInt(number));

const summariseTransactions = (amounts) => {
  const balance = amounts.reduce(
    (balanceAcc, amount) => balanceAcc += amount,
    0,
  );

  return { transactionCount: amounts.length, balance };
};

const displayPromiseData = (data) => console.log(data);

const main = () => {
  parseToPromise(content)
    .then(parseNumberes)
    .then(summariseTransactions)
    .then(displayPromiseData);
};

main();
