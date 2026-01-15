import fs from "fs";
import eventLogger from "./eventLogger.js";

export const createFile = (p,c)=>{ fs.writeFileSync(p,c); eventLogger.emit("log",`Created ${p}`); };
export const readFile = p => (eventLogger.emit("log",`Read ${p}`), fs.readFileSync(p, "utf8"));
export const appendFile = (p,c)=> { fs.appendFileSync(p,c); eventLogger.emit("log",`Appended ${p}`); };
export const deleteFile = p =>{ fs.unlikeSync(p); eventLogger.emit("log", `Deleted ${p}`); };
export const listFiles = d => (eventLogger.emit("log", `Listed {d}`), fs.readdirSync(d));