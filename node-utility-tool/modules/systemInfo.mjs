import os from "os";
export const getSystemInfo = ()=>({ platform:os.platform(), cpu:os.cpus().length, memory:os.totalmem() });
