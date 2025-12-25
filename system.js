const isInValidUser = (user) => {
  console.clear();
  if (!user.name && user.name.incluces(",")) {
    console.log(" Empty name Or remove ,\n");
    return true;
  } else if (user.phone.length !== 10 && user.phone.incluces(",")) {
    console.log(" Phone number should be of 10 digits Or remove ,\n");
    return true;
  } else if (user.pass.length < 4 && user.pass.incluces(",")) {
    console.log(" Password should be atleast of 4 charachters remove ,\n");
    return true;
  } else if (user.pin.length !== 4 && user.pin.incluces(",")) {
    console.log(" Pin should be of 4 chars only remove ,\n");
    return true;
  }

  return false;
};

const readUserDetails = () => {
  console.clear();
  const name = prompt("Enter full name:");
  const phone = prompt("Enter phone number:");
  const pass = prompt("Enter password for account:");
  const pin = prompt("Enter pin:");

  return { name, phone, pass, pin };
};

const readCredentials = () => {
  console.clear();
  const phone = prompt("Enter mobile number:");
  const pass = prompt("Enter password :");

  return [phone, pass];
};

const logIn = () => {
  const data = Deno.readTextFileSync("./data.csv").split("\n");
  const credentials = readCredentials();
};

const createAccount = () => {
  const user = readUserDetails();

  if (isInValidUser(user)) {
    return main();
  }

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
