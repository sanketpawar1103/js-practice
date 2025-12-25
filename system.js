import { promptSecret } from "@std/cli";

const displayOptions = (str) => {
  console.log(str);
};

const isInValidUser = (user) => {
  console.log(user);
  console.clear();
  if (!user.name && user.name.includes(",")) {
    console.log(" Empty name Or remove ,\n");
    return true;
  } else if (user.phone.length !== 10 || user.phone.includes(",")) {
    console.log(" Phone number should be of 10 digits Or remove ,\n");
    return true;
  } else if (user.pass.length < 4 || user.pass.includes(",")) {
    console.log(" Password should be atleast of 4 charachters remove ,\n");
    return true;
  } else if (user.pin.length !== 4 || user.pin.includes(",")) {
    console.log(" Pin should be of 4 chars only remove ,\n");
    return true;
  } else if (user.balance || user.balance <= 0) {
    console.log("Invalid balance amount, \n");
    return true;
  }

  return false;
};

const readUserDetails = () => {
  console.clear();
  console.log(" | CREATE ACCOUNT |\n");
  const name = prompt("Enter full name:");
  const phone = prompt("Enter phone number:");
  const balance = prompt("Enter balance:");
  const pass = promptSecret("Enter password for account:");
  const pin = promptSecret("Enter pin:");

  return { name, phone, balance, pass, pin };
};

const readCredentials = () => {
  console.clear();
  const phone = prompt("Enter mobile number:");
  const pass = promptSecret("Enter password :");

  return { phone, pass };
};

const formatUserData = () => {
  const users = [];
  Deno.readTextFileSync("./data.csv")
    .split("\n")
    .forEach((each) => {
      const user = each.split(",");
      users.push({
        name: user[0],
        phone: user[1],
        pass: user[2],
        pin: user[3],
        history: user.slice(4),
      });
    });

  return users;
};

const authenticateUser = (credentials, users) => {
  console.clear();

  return users.find((each) =>
    each.phone === credentials.phone && each.pass === credentials.pass
  );
};
const logIn = () => {
  const users = formatUserData();
  console.log(" | LOG IN PAGE |");

  const credentials = readCredentials();

  if (!authenticateUser(credentials, users)) {
    console.clear();
    console.log("Credentials missmatch");
    main();
  }

  console.log("Welcome");
};

const createAccount = () => {
  const user = readUserDetails();

  if (isInValidUser(user)) {
    return main();
  }

  console.log(" Account created successfylly");

  Deno.writeTextFileSync("./data.csv", Object.values(user).join(","), {
    append: true,
  });

  return logIn();
};

const CHOICES = {
  1: createAccount,
  2: logIn,
  3: () => {},
};

const main = () => {
  const choice = prompt(" 1. Create Account\n 2. Log In\n 3. Exit\n\n");

  if (choice in CHOICES) {
    CHOICES[choice]();
  } else {
    console.clear();
    console.log(" Invalid CHOICE\n");
    main();
  }

  return;
};

main();
