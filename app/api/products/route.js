import fs from 'fs';
import path from 'path';
export function getProducts(){
    const filePath =path.join(process.cwd(),'products.json');
    const fileContent =fs.readFileSync(filePath,'utf-8');
    const products =JSON.parse(fileContent)
    return products;
}