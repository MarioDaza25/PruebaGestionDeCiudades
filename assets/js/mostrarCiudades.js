import {tablaCiudades} from './main.js'
import {remove, updateP} from './fetchApi.js';
import {idDep} from './main.js'

//------------------------------------- FETCH CIUDADES -------------------------------
export async function displayCiudades(boton) {
  try {
    const id = boton.id;
    idDep.value = id;
    const response = await fetch(`http://localhost:3000/Ciudades/?DepartamentosId=${id}`);
    const data = await response.json();
    tablaCiudades.innerHTML = '';

    //----------------------------- FETCH CLIMA ----------------------
    async function getClima(ciudad) {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=25153e2e94aa1b62fb1e91e29b544298`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error Fetch Clima:', error);
      };
    };

    for (const ciudad of data) {
      const c = await getClima(ciudad.nomCiudad);
      const img = (c.weather[0].icon)
      const tmCels = Math.round((c.main.temp)-273.15)
      const Ciudads = `
        <tr>
          <td class="text-center">${ciudad.id}</td>
          <td class="text-center">${ciudad.nomCiudad}</td>
          <td class="text-center">${ciudad.imagen}</td>
          <td class="text-center">${tmCels}ºC</td>
          <td class="text-center"><img src="https://openweathermap.org/img/wn/${img}@2x.png" alt="" class="w-75"></td>
          <td class="text-center"><button class="btn btn-primary botonEditar" data-bs-toggle="modal" data-bs-target="#staticBack" id="${ciudad.id}">Editar</button></td>
          
          <td class="text-center"><button class="btn btn-danger botonEliminar" id="${ciudad.id}">Eliminar</button></td>
        </tr>`;
      tablaCiudades.insertAdjacentHTML('beforeend', Ciudads);
    }

    const botonesEliminar = tablaCiudades.querySelectorAll('.botonEliminar');
    botonesEliminar.forEach((botonE) => {
      botonE.onclick = () => remove('Ciudades', botonE);
    });

    const botonesEditar = tablaCiudades.querySelectorAll('.botonEditar');
    botonesEditar.forEach((boton) => {
      boton.onclick = () => updateP('Ciudades', boton);
    });
  } catch (error) {
    console.error('Error al encontrar los datos:', error);
  }
}
