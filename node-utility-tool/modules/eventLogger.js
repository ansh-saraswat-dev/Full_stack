import fs from "fs";
import { EventEmitter } from "events";
import { LOG_FILE } from "../config/appConfig.mjs";

const emitter = new EventEmitter();
emitter.on("log", msg => fs.appendFileSync(LOG_FILE, `[${new Date().toISOString()}] ${msg}\n`));

export default emitter;
