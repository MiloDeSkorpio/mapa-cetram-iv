function populateSelect() {
    const select = document.getElementById("select1");
    origins.forEach(origin => {
      const option = document.createElement("option");
      option.value = origin.value;
      option.text = origin.label;
      select.appendChild(option);
    });
  }
function updateSelect2() {
    const select1 = document.getElementById('select1');
    const select2 = document.getElementById('select2');
    select2.innerHTML = ''; // Limpiar opciones de select2
  
    const selectedOption1 = select1.options[select1.selectedIndex].value;

    if (selectedOption1 === '') {
      return; // Si no se selecciona nada en select1, no hacer nada
    }
  
    // Agregar opciones a select2 según la selección en select1
    switch (selectedOption1) {
      case 'MIV':
        select2.add(new Option('Metrobus Linea 7', 'ML7'));
        select2.add(new Option('Metrobus Linea 1', 'ML1'));
        select2.add(new Option('Mexibus Lado Sur', 'MLS'));
        select2.add(new Option('Mexibus Lado Norte', 'MLN'));
        select2.add(new Option('Cablebus', 'CLB'));
        select2.add(new Option('Rutas Lado Poniente', 'RLP'));
        select2.add(new Option('Mexicable', 'MXC'));
        select2.add(new Option('Rutas Lado Oriente', 'RLO'));
        break;
      case 'ECB':
        select2.add(new Option('Metrobus Linea 7', 'ML7'));
        select2.add(new Option('Metrobus Linea 1', 'ML1'));
        select2.add(new Option('Mexibus Lado Sur', 'MLS'));
        select2.add(new Option('Mexibus Lado Norte', 'MLN'));
        select2.add(new Option('Metro Indios Verdes', 'MIV'));
        select2.add(new Option('Rutas Lado Poniente', 'RLP'));
        select2.add(new Option('Mexicable', 'MXC'));
        select2.add(new Option('Rutas Lado Oriente', 'RLO'));
        break;
      case 'MXD':
        select2.add(new Option('Metrobus Linea 7', 'ML7'));
        select2.add(new Option('Metrobus Linea 1', 'ML1'));
        select2.add(new Option('Metro Indios Verdes', 'MIV'));
        select2.add(new Option('Cablebus', 'CLB'));
        select2.add(new Option('Rutas Lado Poniente', 'RLP'));
        select2.add(new Option('Mexicable', 'MXC'));
        select2.add(new Option('Rutas Lado Oriente', 'RLO'));
        break;
      case 'MXA':
        select2.add(new Option('Metrobus Linea 7', 'ML7'));
        select2.add(new Option('Metrobus Linea 1', 'ML1'));
        select2.add(new Option('Metro Indios Verdes', 'MIV'));
        select2.add(new Option('Cablebus', 'CLB'));
        select2.add(new Option('Rutas Lado Poniente', 'RLP'));
        select2.add(new Option('Mexicable', 'MXC'));
        select2.add(new Option('Rutas Lado Oriente', 'RLO'));
        break;
      case 'MB1':
        select2.add(new Option('Metrobus Linea 7', 'ML7'));
        select2.add(new Option('Metrobus Linea 1', 'ML1'));
        select2.add(new Option('Metro Indios Verdes', 'MIV'));
        select2.add(new Option('Cablebus', 'CLB'));
        select2.add(new Option('Rutas Lado Poniente', 'RLP'));
        select2.add(new Option('Rutas Lado Oriente', 'RLO'));
        select2.add(new Option('Mexicable', 'MXC'));
        select2.add(new Option('Mexibus Sur', 'MXS'));
        select2.add(new Option('Mexibus Norte', 'MXN'));
        break;
      case 'MB7':
        select2.add(new Option('Metrobus Linea 1', 'ML1'));
        select2.add(new Option('Metro Indios Verdes', 'MIV'));
        select2.add(new Option('Cablebus', 'CLB'));
        select2.add(new Option('Rutas Lado Poniente', 'RLP'));
        select2.add(new Option('Rutas Lado Oriente', 'RLO'));
        select2.add(new Option('Mexicable', 'MXB'));
        select2.add(new Option('Mexibus Sur', 'MXB'));
        select2.add(new Option('Mexibus Norte', 'MXB'));
        break;
      case 'MXC':
        select2.add(new Option('Metrobus Linea 1', 'ML1'));
        select2.add(new Option('Metrobus Linea 7', 'ML7'));
        select2.add(new Option('Metro Indios Verdes', 'MIV'));
        select2.add(new Option('Cablebus', 'CLB'));
        select2.add(new Option('Rutas Lado Poniente', 'RLP'));
        select2.add(new Option('Rutas Lado Oriente', 'RLO'));
        select2.add(new Option('Mexibus Sur', 'MXB'));
        select2.add(new Option('Mexibus Norte', 'MXB'));
        break;
    }
    selectedOption1

  }

  function updateImage() {
      const select1 = document.getElementById('select1');
      const select2 = document.getElementById('select2');
      const imagen = document.getElementById('imagen');
      
      const selectedOrigin = select1.options[select1.selectedIndex].value;
      const selectedDestination = select2.options[select2.selectedIndex].value;
      console.log(selectedOrigin)
      console.log(selectedDestination)
      if (selectedOrigin === '' || selectedDestination === '') {
          return; // Handle empty selections
        }
        
        const newImagePath = `img/${selectedOrigin}-${selectedDestination}.png`;
        
        if (newImagePath) {
            imagen.src = newImagePath;
        } else {
            // Handle cases where no image found for the combination (e.g., default image)
        }
    }
    select1.addEventListener('change', updateImage);
    select2.addEventListener('change', updateImage);
window.onload =  function() {
    populateSelect();
    updateImage();
}
    