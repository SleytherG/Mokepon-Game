let ataqueJugador = '';
let ataqueEnemigo = '';
let p = document.createElement('p');
let vidasJugador = 3;
let vidasEnemigo = 3;


function iniciarJuego() {
	const btnMascota = document.querySelector('#boton-mascota');
	const btnFuego = document.querySelector('#boton-fuego');
	const btnAgua = document.querySelector('#boton-agua');
	const btnTierra = document.querySelector('#boton-tierra');
	const btnReiniciar = document.querySelector('#boton-reiniciar');

    const vidasMascota = document.querySelector("#vidas-mascota");
    const vidasMascotaEnemigo = document.querySelector("#vidas-enemigo");

    vidasMascota.innerHTML = vidasJugador;
    vidasMascotaEnemigo.innerHTML = vidasEnemigo;


	btnMascota.addEventListener('click', seleccionarMascotaJugador);
	btnReiniciar.addEventListener('click', reiniciarBtn);
	/**
	 *  1 => FUEGO
	 *  2 => AGUA
	 *  3 => TIERRA */

	btnFuego.addEventListener('click', () => {
		return setAtaqueJugador(1);
	});
	btnAgua.addEventListener('click', () => {
		return setAtaqueJugador(2);
	});
	btnTierra.addEventListener('click', () => {
		return setAtaqueJugador(3);
	});
}

function seleccionarMascotaJugador() {
	const mascotaJugador = document.querySelector('#mascota-jugador');
	const mascotaEnemigo = document.querySelector('#mascota-enemigo');
	let mascotaSelected = '';

	if (hipodoge.checked) {
		alert('Hipodoge selected');
	} else if (capipepo.checked) {
		mascotaSelected = 'Capipepo';
	} else if (ratigueya.checked) {
		mascotaSelected = 'Ratigueya';
	} else {
		alert('Ningun mokepon selecccionado');
	}

	mascotaJugador.innerHTML = mascotaSelected;
	mascotaEnemigo.innerHTML = seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
	const valorAleatorio = numeroAleatorio(1, 3);

	let mascotaEnemigoSelected = '';

	if (valorAleatorio == 1) {
		mascotaEnemigoSelected = 'Hipodoge';
	} else if (valorAleatorio == 2) {
		mascotaEnemigoSelected = 'Capipepo';
	} else if (valorAleatorio == 3) {
		mascotaEnemigoSelected = 'Ratigueya';
	}
	return mascotaEnemigoSelected;
}

function numeroAleatorio(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function setAtaqueJugador(tipoAtaqueJugador) {

	switch (tipoAtaqueJugador) {
		case 1:
			ataqueJugador = 'FUEGO';
			setAtaqueEnemigo();
			getResultado();
			break;
		case 2:
			ataqueJugador = 'AGUA';
			setAtaqueEnemigo();
			getResultado();
			break;
		case 3:
			ataqueJugador = 'TIERRA';
			setAtaqueEnemigo();
			getResultado();
			break;
	}
}

function setAtaqueEnemigo() {
	let ataqueAleatorio = numeroAleatorio(1, 3);

	switch (ataqueAleatorio) {
		case 1:
			ataqueEnemigo = 'FUEGO';
			break;
		case 2:
			ataqueEnemigo = 'AGUA';
			break;
		case 3:
			ataqueEnemigo = 'TIERRA';
			break;
	}
}

function getResultado() {
	// const resultadoJugada = document.querySelector('#resultado');
	let resultadoJugada = '';
    const vidasMascota = document.querySelector("#vidas-mascota");
    const vidasMascotaEnemigo = document.querySelector("#vidas-enemigo");

	if (ataqueJugador == ataqueEnemigo) {
		resultadoJugada = 'EMPATE';
		createElementP(ataqueJugador, ataqueEnemigo, resultadoJugada);
	} else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
		resultadoJugada = 'GANASTE 🎉';
		vidasEnemigo--;
		createElementP(ataqueJugador, ataqueEnemigo, resultadoJugada);
        vidasMascotaEnemigo.innerHTML = vidasEnemigo;
	} else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        resultadoJugada = 'GANASTE 🎉';
		vidasEnemigo--;
		createElementP(ataqueJugador, ataqueEnemigo, resultadoJugada);
        vidasMascotaEnemigo.innerHTML = vidasEnemigo;
	} else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        resultadoJugada = 'GANASTE 🎉';
		vidasEnemigo--;
		createElementP(ataqueJugador, ataqueEnemigo, resultadoJugada);
        vidasMascotaEnemigo.innerHTML = vidasEnemigo;
	} else {
		resultadoJugada = 'PERDISTE ❎';
		vidasJugador--;
		createElementP(ataqueJugador, ataqueEnemigo, resultadoJugada);
        vidasMascota.innerHTML = vidasJugador;
	}

	validarVidas();
}

function createElementP(ataqueJugador, ataqueEnemigo, resultado) {
	const mensajes = document.querySelector('#mensajes');
	p.innerHTML += `Tu mascota atacó con ${ataqueJugador}, la mascota del enemigo atacó con ${ataqueEnemigo} => ${resultado} <br>`;
	mensajes.append(p);
}

function reiniciarBtn() {
	const mensajes = document.querySelector('#mensajes');
	const btnFuego = document.querySelector('#boton-fuego');
	const btnAgua = document.querySelector('#boton-agua');
	const btnTierra = document.querySelector('#boton-tierra');

    const vidasMascota = document.querySelector("#vidas-mascota");
    const vidasMascotaEnemigo = document.querySelector("#vidas-enemigo");

    
	vidasJugador = 3;
	vidasEnemigo = 3;

    vidasMascota.innerHTML = vidasJugador;
    vidasMascotaEnemigo.innerHTML = vidasEnemigo;

	btnFuego.removeAttribute('disabled');
	btnAgua.removeAttribute('disabled');
	btnTierra.removeAttribute('disabled');

	p.innerHTML = '';
	mensajes.append(p);
}

function validarVidas() {
	const mensajes = document.querySelector('#mensajes');
	const btnFuego = document.querySelector('#boton-fuego');
	const btnAgua = document.querySelector('#boton-agua');
	const btnTierra = document.querySelector('#boton-tierra');

	if (vidasJugador === 0) {
		p.innerHTML = 'El jugador se quedo sin vidas => PERDISTE LA PARTIDA';
	}
	if (vidasEnemigo === 0) {
		p.innerHTML = 'El Enemigo se quedo sin vidas => GANASTE LA PARTIDA';
	}
	mensajes.append(p);

	if (vidasJugador === 0 || vidasEnemigo === 0) {
		btnFuego.setAttribute('disabled', true);
		btnAgua.setAttribute('disabled', true);
		btnTierra.setAttribute('disabled', true);
	}
}

window.addEventListener('load', iniciarJuego);
