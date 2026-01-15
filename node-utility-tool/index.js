import readline from "readline";
import { createFile, readFile, appendFile, deleteFile, listFiles } from "../modules/fileManager.js";
import { getSystemInfo } from "../modules/systemInfo.mjs";
import { parseURL } from "../modules/urlParser.js";

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const menu = `
1. Create File
2. Read File
3. Append File
4. Delete File
5. List Files
6. Show System Information
7. Parse URL
8. Exit
Choose an option: `;

function ask() {
  rl.question(menu, (choice) => {
    try {
      switch (choice) {
        case "1":
          rl.question("Enter file path: ", p => { createFile(p, "New File"); ask(); });
          break;
        case "2":
          rl.question("Enter file path: ", p => { console.log(readFile(p)); ask(); });
          break;
        case "3":
          rl.question("Enter file path: ", p => {
            rl.question("Enter content: ", c => { appendFile(p, c); ask(); });
          });
          break;
        case "4":
          rl.question("Enter file path: ", p => { deleteFile(p); ask(); });
          break;
        case "5":
          rl.question("Enter directory path: ", d => { console.log(listFiles(d)); ask(); });
          break;
        case "6":
          console.log(getSystemInfo()); ask();
          break;
        case "7":
          rl.question("Enter URL: ", u => { console.log(parseURL(u)); ask(); });
          break;
        case "8":
          console.log("Exiting..."); rl.close();
          break;
        default:
          console.log("Invalid choice"); ask();
      }
    } catch (e) {
      console.error(e.message); ask();
    }
  });
}
ask();