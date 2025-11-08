const botaoBuscar = document.getElementById('btn-buscar');
const inputCEP = document.getElementById('input-cep');
const mensagemErroCepInvalido = document.querySelector('.mensagem-erro-cep-invalido');
const mensagemErroCepNaoEncontrado = document.querySelector('.mensagem-erro-cep-nao-encontrado');
const cardResultado = document.querySelector('.card-resultado');
const textoCEP = document.getElementById('resultado-cep');
const textoRua = document.getElementById('resultado-rua');
const textoBairro = document.getElementById('resultado-bairro');
const textoCidade = document.getElementById('resultado-cidade');
const textoEstado = document.getElementById('resultado-estado');
const contadorElemento = document.getElementById('contador');
const mapaIframe = document.getElementById('mapa-iframe');
const cardMapa = document.getElementById('card-mapa');

// Variavel de contagem
let contador = 0;

async function buscarCEP() {
  let cep = inputCEP.value;
  cep = cep.replace('-', '');

  mensagemErroCepInvalido.style.display = 'none';
  mensagemErroCepNaoEncontrado.style.display = 'none';
  cardMapa.style.display = 'none';

  if (cep.length !== 8 || isNaN(Number(cep))) {
    mensagemErroCepInvalido.style.display = 'block';
    return;
  }

  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();

    if (dados.erro == "true") {
      cardResultado.style.display = 'none';
      mensagemErroCepNaoEncontrado.style.display = 'block';
      return;
    }

    textoCEP.textContent = dados.cep;
    textoRua.textContent = dados.logradouro;
    textoBairro.textContent = dados.bairro;
    textoCidade.textContent = dados.localidade;
    textoEstado.textContent = dados.estado;

    cardResultado.style.display = 'block';

    contador++;
    contadorElemento.textContent = contador;

    // Monta o endereço completo para o mapa
    const enderecoCompleto = `${dados.logradouro || ''}, ${dados.bairro || ''}, ${dados.localidade}, ${dados.uf}, Brasil`;
    const enderecoParaMapa = encodeURIComponent(enderecoCompleto);

    // Define o src do iframe com o Google Maps Embed
    mapaIframe.src = `https://www.google.com/maps?q=${enderecoParaMapa}&output=embed`;
    
    // Mostra o mapa
    cardMapa.style.display = 'block';
  } catch (erro) {
    mensagemErroCepNaoEncontrado.style.display = 'block';
  }
}

botaoBuscar.addEventListener('click', buscarCEP);

function tratarInputCEP() {
  let cep = inputCEP.value.replace('-', '');

  if (cep.length > 5) {
    cep = cep.slice(0, 5) + '-' + cep.slice(5);
  }
  
  inputCEP.value = cep;
}

inputCEP.addEventListener('input', tratarInputCEP);