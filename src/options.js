const fetch = require('node-fetch');
const { getLinksInFileMd } = require('./md.js');

// Funcion para extraer las 5 propiedades //
// input: path output: array de objetos con 5 propiedades //

const validate = (route) => {
  const linksMd = getLinksInFileMd(route);
  const validateLinks = linksMd.map((element) => new Promise((resolve, reject) => (
    fetch(element.href) // objeto con propie de resp de la peticion con fetch //
      .then((res) => {
        const obj = {
          href: element.href,
          text: element.text,
          file: element.file,
        };
        if (res.status >= 200 && res.status < 400) {
          obj.status = res.status;
          obj.message = res.statusText;
          resolve(obj);
        } else {
          obj.status = res.status;
          obj.message = 'Fail';
          resolve(obj);
        }
      })
      .catch((err) => {
        reject(err);
      }))));
  // Se invoca la funcion pasada a la promise.all(con argumento iterable) //
  return Promise.all(validateLinks);
};
// validate('/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/
// LIM012-fe-md-links/test/test-API/test.md')
// .then((res) => console.log(res));

// Funcion para obtener links unicos y links totales//
// input: path-string output: string-cantidades

const getLinksStats = (path) => new Promise((resolve) => {
  validate(path)
    .then((response) => {
      const totalLinks = response.length;
      // set constructor que me permite iterar
      // eslint-disable-next-line no-shadow
      const uniqueLinks = [...new Set(response.map((response) => response.href))].length;
      resolve(`Total : ${totalLinks} Unique: ${uniqueLinks}`);
    });
});
// getLinksStats('/home/ubuntu/Documentos/Laboratoria/
// ProyectosBootcamp/LIM012-fe-md-links/test/test-API/test.md')
//  .then((res) => console.log (res));

// Función para ver los links rotos
// input: path-string output: string-cantidades
const getBrokenLinksStats = (path) => new Promise((resolve) => {
  validate(path)
    .then((response) => {
      const brokenLinks = response.filter((element) => element.message === 'Fail').length;
      resolve(`Broken: ${brokenLinks}`);
    });
});


getBrokenLinksStats('/home/ubuntu/Documentos/Laboratoria/ProyectosBootcamp/LIM012-fe-md-links/test/test-API/test.md')
  .then((res) => (res));

module.exports = { validate, getLinksStats, getBrokenLinksStats };