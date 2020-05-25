const fs = require('fs');
const path = require('path');
const glob = require('glob');
const BuscarArchivos = () =>{
const dir = path.basename(__dirname);
const md = path.extname(dir);  
let index = process.argv.indexOf("--file"); 
if(index<0) return console.log("Necesita utilizar la flag --file con el uri validod"); 
let uri = process.argv[index + 1]; 
let leerarchivo = fs.readFileSync(uri,"utf8"); 

console.log(process.argv); 
console.log("index; ", index);
console.log("uri; ", uri);  
console.log("Texto en el archivo; ", leerarchivo);
console.log(dir); 
console.log(md); 
}

const getDirectories = (src) => new Promise((resolve, reject) => {
    glob(`${src}/**/*.md`, (err, files) => {
      if (err) {
        reject(err);
      }
      resolve(files);
      console.log(files); 
    });
  });
  (getDirectories('./test').then((files) => (files)));

 /* const dir = path.basename(__dirname);
  const isDirectory = (str) => {
    const dir = fs.readdirSync(str); // output -->> array con strings
    const listFiles = dir.filter((item) => path.extname(item) === '.md');
    //return (listFiles);
    console.log(listFiles); 
  };*/
  
   module.exports = {
    BuscarArchivos, getDirectories
}

