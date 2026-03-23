// pegar elementos HTML
const toggleTema = document.getElementById('toggleTema');
const contadorElemento = document.getElementById('contador');
const botao = document.getElementById('botao');
const btnDiminuir = document.getElementById('btnDiminuir');
const btnMaisCinco = document.getElementById('btnMaisCinco');
const btnMenosCinco = document.getElementById('btnMenosCinco');
const btnMaisDez = document.getElementById('btnMaisDez');
const btnMenosDez = document.getElementById('btnMenosDez');
const resetar = document.getElementById('resetar');
const historicoElemento = document.getElementById('historico');

// carregar dados salvos
let contador = parseInt(localStorage.getItem('contador')) || 0;
let historico = JSON.parse(localStorage.getItem('historico')) || [];

if (localStorage.getItem('tema') === 'dark') {
  document.body.classList.add('dark');
}
function atualizariconeTema() {
  toggleTema.textContent = document.body.classList.contains('dark')
    ? '☀️'
    : '🌙';
}

// função para atualizar o contador na tela
function atualizarContador() {
  if (contador < 0) contador = 0;
  if (contador > 999) contador = 999;

  contadorElemento.textContent = contador;

  // animação
  contadorElemento.classList.remove('animar');
  void contadorElemento.offsetWidth;
  contadorElemento.classList.add('animar');

  // feedback visual
  contadorElemento.style.color = contador === 0 ? '#7f8c8d' : '#2ecc71';

  // salvar contador
  localStorage.setItem('contador', contador);

  console.log('Valor atual do contador:', contador);
}

// função para salvar histórico
function salvaHistorico(acao) {
  historico.push({
    acao,
    valor: contador,
  });

  // mantém apenas os últimos 5 registros
  if (historico.length > 5) {
    historico.shift();
  }

  localStorage.setItem('historico', JSON.stringify(historico));
  renderizarHistorico();
}

// função para renderizar histórico
function renderizarHistorico() {
  historicoElemento.innerHTML = '';

  // exibe do mais recente para o mais antigo
  [...historico].reverse().forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.acao} - Valor: ${item.valor}`;
    historicoElemento.appendChild(li);
  });
}

// inicialização
atualizarContador();
renderizarHistorico();
atualizariconeTema();

// eventos
botao.addEventListener('click', () => {
  contador++;
  atualizarContador();
  salvaHistorico('Adicionar');
});

btnDiminuir.addEventListener('click', () => {
  contador--;
  atualizarContador();
  salvaHistorico('Diminuir');
});

btnMaisCinco.addEventListener('click', () => {
  contador += 5;
  atualizarContador();
  salvaHistorico('Adicionar 5');
});

btnMenosCinco.addEventListener('click', () => {
  contador -= 5;
  atualizarContador();
  salvaHistorico('Subtrair 5');
});

btnMaisDez.addEventListener('click', () => {
  contador += 10;
  atualizarContador();
  salvaHistorico('Adicionar 10');
});

btnMenosDez.addEventListener('click', () => {
  contador -= 10;
  atualizarContador();
  salvaHistorico('Subtrair 10');
});

resetar.addEventListener('click', () => {
  contador = 0;
  atualizarContador();
  salvaHistorico('Resetar');
});

toggleTema.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  const temaAtual = document.body.classList.contains('dark') ? 'dark' : 'light';

  localStorage.setItem('tema', temaAtual);

  atualizariconeTema();
});
