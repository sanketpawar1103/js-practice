import { accHolders } from "./data.js";

const gui = (msg) => {
  console.clear();
  console.log(`\t|${"-".repeat(msg.length)}|`);
  console.log(`\t|${msg}|`);
  console.log(`\t|${"-".repeat(msg.length)}|\n`);
};

const gruantAccess = (crrtUser) => {
  gui(`Welcome ${crrtUser.name}`);
};

const userCredentials = () => {
  const accNo = prompt("Enter your account number : ");
  const pass = prompt("Enter password : ");
  return { accNo: accNo, pass: pass };
};

const findUser = (accNo, pass) =>
  accHolders.find((accDetails) =>
    accDetails.accNo === parseInt(accNo) &&
    accDetails.password === parseInt(pass)
  );

const login = () => {
  const { accNo, pass } = userCredentials();
  const crrtUser = findUser(accNo, pass);

  if (!crrtUser) {
    gui("Invalid user credentials...");
    return;
  }

  gruantAccess(crrtUser);
};

login();
