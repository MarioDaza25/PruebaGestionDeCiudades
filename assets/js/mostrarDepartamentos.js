import {remove, update} from './fetchApi.js';
import {displayCiudades} from './mostrarCiudades.js';
import {tablaDepart} from './main.js'

export async function displayDepartamentos(){
  try{
    const response = await fetch('http://localhost:3000/Departamentos');
    const data = await response.json();

    data.forEach(Dep => {
      const Departs = `
      <tr class="text-light">
        <td class="text-center">${Dep.id}</td>
        <td class="text-center">${Dep.nomDepartamento}</td>
        <td class="text-center">
          <button class="btn btn-warning botonCiudad" data-bs-toggle="modal" data-bs-target="#miModal" id="${Dep.id}">
          <img src="./assets/img/ciudades.png" alt="" class="w-25">.
          </button>
        </td>
        <td class="text-center"><button class="btn btn-primary botonEditar"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="${Dep.id}">Editar</button></td>
        <td class="text-center"><button class="btn btn-danger botonEliminar" id="${Dep.id}">Eliminar</button></td>
      </tr>`;
      tablaDepart.insertAdjacentHTML('beforeend', Departs);
    });


    const botonCiudad = tablaDepart.querySelectorAll('.botonCiudad');
    botonCiudad.forEach(botonP =>{
      botonP.onclick = () => displayCiudades(botonP)
    });

    const botonesEliminar = tablaDepart.querySelectorAll('.botonEliminar');
    botonesEliminar.forEach(botonE =>{
      botonE.onclick = () => remove('Departamentos', botonE)
    });

    const botonesEditar = tablaDepart.querySelectorAll('.botonEditar');
    botonesEditar.forEach(boton =>{
      boton.onclick = () => update('Departamentos', boton)
    });
  }catch (error) {
    console.error('Error al mostrar las Departamentos', error);
  };
};