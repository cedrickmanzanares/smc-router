import { basePath as path } from '/next.config';

console.log(path);
export const basePath = path ? path : '';

console.log(basePath);
