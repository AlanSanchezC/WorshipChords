var generandoLista = false;
var lista = [];
var listaNombres = [];

function cancionSeleccionada(cancion) {
	if (generandoLista) {
		if (lista.includes(cancion.id)) 
		{
			var i = lista.indexOf(cancion.id);
			if(i != -1){
				lista.splice(i, 1);
				cancion.style.fontWeight = 'initial';
				cancion.style.fontStyle = 'initial';
			}
		} else {
			lista.push(cancion.id);
			cancion.style.fontWeight = '900';
			cancion.style.fontStyle = 'oblique';
		}

		if (lista.length > 0)
			document.getElementById('view').style.display = 'inline';
		else
			document.getElementById('view').style.display = 'none';
		
		document.getElementById('nombres').innerHTML = "";

		var parametros = "";
		for (var i = 0; i < lista.length; i++) {
			var nombre = document.getElementById(lista[i]);
			document.getElementById('nombres').innerHTML += nombre.text + " / ";
			parametros += lista[i] + "*";
		}
		document.getElementById('params').value = parametros.slice(0,-1);

	} else {
		window.open("Songs/" + cancion.id, "_blank");
	}
	
}

function nuevaLista(seleccionar){
	if (seleccionar){
		document.getElementById('create').style.display = 'none';
		document.getElementById('cancel').style.display = 'inline';
		generandoLista = true;

	}else{
		document.getElementById('nombres').innerHTML = "";
		for (var i = 0; i < lista.length; i++) {
			var tituloSeleccionado = document.getElementById(lista[i]);
			tituloSeleccionado.style.fontWeight = 'initial';
			tituloSeleccionado.style.fontStyle = 'initial';
		}
		lista = [];
		generandoLista = false;
		document.getElementById('create').style.display = 'inline';
		document.getElementById('cancel').style.display = 'none';
		document.getElementById('view').style.display = 'none';
	}
}