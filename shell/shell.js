const FILESYSTEM = ["root", ["sanket.js", "user.js", ['User', []]]];
let crrtInd = 0;
let path = `>${FILESYSTEM[0]}`;

const mkdir = (dirName) => {
  FILESYSTEM[crrtInd + 1].push([[dirName], []]);
  console.log(FILESYSTEM);
};

const list = () => {
  const files = FILESYSTEM[crrtInd + 1];
  let str = files.reduce((pStr, data) => pStr += `/${data}\t\t`, "");

  const msg = str ? str : 'Empty directory';
  return msg;
};

const changeDir = (dir) => {
  const isDir = FILESYSTEM[crrtInd + 1].findIndex((d) => Array.isArray(d));

  if (isDir === -1) {
    crrtInd--;
    console.log('Directory not found');
    return;
  }

  crrtInd = isDir;
  path += `/${FILESYSTEM[1][isDir][0]}`;
  return;
};

while (true) {
  const input = prompt(path + " % ");
  const cmd = input.split(" ");
  switch (cmd[0]) {
    case "ls":
      console.log(list());
      break;
    case "mkdir":
      mkdir(cmd[1]);
      break;
    case "cd":
      changeDir(cmd[1]);
      break;
    default:
      console.log("Command not found");
  }
}