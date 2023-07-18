import {nuevoDep, nombreCiudad, urlImg, idDepar} from './main.js';

//------------------------------------------------ FETCH -------------------------------------------------
export async function fetchData(endPoint, config){
  try{
    const response = await fetch(`http://localhost:3000/${endPoint}`, config);
    const data = await response.json();
    return data;
  }catch(error){
    console.error('Erro al hacer Fetch')
  };
};

//--------------------------------------------- AGREGAR (POST) ---------------------------------------------
export async function add(endPoint, newData) {
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newData)
  };
  await fetchData(`${endPoint}`, config); 
};


//---------------------------------------------ACTUALIZAR (PATCH) DEPARTAMENTO-------------------------------

//------OBTIENE LOS DATOS Y LOS ENVIA AL INPUT PARA EDITARLOS------
export async function update(endPoint, boton){
  const id = boton.id;
  const config = {
    method: 'GET'
  }; 
  const data = await fetchData((`${endPoint}/${id}`), config);
  idDepar.value = id;
  nuevoDep.value = data.nomDepartamento
  return id;
};

//------ACTUALIZA LOS DATOS------
export async function patch(endPoint, newRuta){
 const id = idDepar.value;
  const config = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newRuta)
  };
  fetchData(`${endPoint}/${id}`, config);
};

//------------------------------- ACTUALIZAR (PATCH) CIUDAD (OJO PROVICIONAL) --------------------------------

 export async function updateP(endPoint, boton){
  const id = boton.id;
  const config = {
    method: 'GET'
  }; 
  const data = await fetchData((`${endPoint}/${id}`), config);
  nombreCiudad.value = data.nomCiudad
  idCiud.value = data.id;
  urlImg.value = data.imagen

  return id;
};

//------ACTUALIZA LOS DATOS------
export async function patchP(endPoint, newPunto){
 const id = idCiud.value;
  const config = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPunto)
  };
  fetchData(`${endPoint}/${id}`, config);
};  



//--------------------------------------------- ELIMINAR (DELETE) ---------------------------------------------
export function remove(endPoint, boton){
  const id = boton.id;
  const fila = boton.parentNode.parentNode;
  fila.remove();
 
  const config = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  };
  fetchData((`${endPoint}/${id}`), config);  
};
