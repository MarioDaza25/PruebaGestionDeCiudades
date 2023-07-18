import { add, patch, patchP } from './fetchApi.js';
import {displayDepartamentos} from './mostrarDepartamentos.js';


export const tablaDepart = document.getElementById('tablaDepart');
export const tablaCiudades = document.getElementById('tablaCiudades');
export const nuevoDep = document.getElementById('nuevoDep');
export const idDep = document.getElementById('idDep');
export const idDepar = document.getElementById('idDepar');
export const idCiud = document.getElementById('idCiud');
export const nombreCiudad = document.getElementById('nombreCiudad');
export const urlImg = document.getElementById('urlImg');
const myFormDep = document.getElementById('myFormDep');
const formActDep = document.getElementById('formActDep'); 
const formActCiud = document.getElementById('formActCiud');
const myFormCiud = document.getElementById('myFormCiud');


displayDepartamentos()

//---------------------------------------------Evento Boton Agregar Departamento---------------------------------------------
myFormDep.addEventListener('submit', () => {
  const formData = new FormData(myFormDep);
  const Depart = Object.fromEntries(formData.entries());
  add('Departamentos', Depart);
});

//-------------------------------------------Evento boton Actualizar Departamento-------------------------------------------
formActDep.addEventListener('submit', () => {
  const formData = new FormData(formActDep);
  const newDep = Object.fromEntries(formData.entries());
  patch('Departamentos', newDep);
}); 

//-------------------------------------------Evento Boton Agregar Ciudad-------------------------------------------
myFormCiud.addEventListener('submit', () => {
  const formData = new FormData(myFormCiud);
  const ciudad = Object.fromEntries(formData.entries());
  add('Ciudades', ciudad);
}); 

//-------------------------------------------Evento boton Actualizar Ciudad-------------------------------------------
formActCiud.addEventListener('submit', () => {
  const formData = new FormData(formActCiud);
  const newCiud = Object.fromEntries(formData.entries());
  patchP('Ciudades', newCiud);
});  


