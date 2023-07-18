//----------------------TEMAS DE FONDO Y TAMAÑO DE FUENTE

function cambiarTema(miTema) {
  const customTheme = document.getElementById('customTheme');

  if (miTema === 'Azul') {
    customTheme.textContent = `
      body {
        background-color: #25599B;
        color: #333;
        font-size: 20px
      }

    `;
  } else if (miTema === 'Verde') {
    customTheme.textContent = `
      body {
        background-color: #259B30;
        font-size: 18px
      }
    `;
  }else if (miTema === 'Rojo') {
    customTheme.textContent = `
      body {
        background-color: #FF1700;
        color: #f4f4f4;
        font-size: 15px
      }
    `;
  }

  localStorage.setItem('theme', miTema);
}

const savedTheme = localStorage.getItem('theme') || 'dark';

if (savedTheme) {
  cambiarTema(savedTheme);
}
