import path from "path";
export const getPathDetails = p=>({ base:path.basename(p), ext:path.extname(p) });