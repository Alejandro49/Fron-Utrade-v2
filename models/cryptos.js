const fetch = require('node-fetch');

const dia = null;

const crytos = [];


async function cagarCryptos() {
    const response = await fetch('http://localhost:2000/cryptos');
    const data = await response.json();
    return data;
}




module.exports.cargarCryptos = this.cargarCryptos;