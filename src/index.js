/*const fs = require('fs');
const glob = require('glob');
const marked = require('marked');
const BuscarArchivos = () =>{
let index = process.argv.indexOf("--file"); 
if(index<0) return console.log("Necesita utilizar la flag --file con el uri validod"); 
let uri = process.argv[index + 1]; 
let leerarchivo = fs.readFileSync(uri,"utf8"); 

console.log(process.argv); 
console.log("index; ", index);
console.log("uri; ", uri);  
console.log("Texto en el archivo; ", leerarchivo);
}

//const parsedFile = '/test/Readme.md'; 
const extractLinks = (parsedFile) => {
  const par = parsedFile; 
  console.log(par);/*  return new Promise((resolve, reject) => {

      if(typeof parsedFile !== 'string') {
          reject('NOT A STRING!');
      }

      const regEx = /\[(.*?)\]\((.*?)\)/gm;
      const matchedLinksArr = parsedFile.match(regEx);
      const arrObject = matchedLinksArr.map((item) => {

          const objectLink = {
              Text: item.slice(1,item.indexOf(']')),
              Href: item.slice(item.indexOf('(') +1, item.indexOf(')')),
              path,
          }

          return objectLink;
      })

      resolve(arrObject);

  })*/
   
/*}

#!/usr/bin/env node

//const { mdLinks } = require('./index.js');

const path = process.argv[2];
const options = {
    validate: process.argv.includes('--validate') || process.argv.includes('-v'),
    stats: process.argv.includes('--stats') || process.argv.includes('-s')
}

mdLinks(path, options).then((data) => {
    console.log(data);
    
}).catch((err) => {
    console.log(err);
});
module.exports = {
  BuscarArchivos, extractLinks 
}*/