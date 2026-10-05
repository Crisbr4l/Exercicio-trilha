const prompt = require("prompt-sync")();

let time = [];
let continuar = true;

function mostraMenu() {
  console.log("\n---------------------------------------");
  console.log("-----SISTEMA DE GAMES-----");
  console.log("------------------------------------------")
  console.log("\n")
  console.log("1 - Cadastrar");
  console.log("2 - Deletar");
  console.log("3 - Mostrar Equipe");
  console.log("4 - Cálculo da Média da Equipe");
  console.log("5 - Buscar Jogador")
  console.log("6 - Atualizar Pontuação do Jogador")
  console.log("7 - sair")
  console.log("\n"); //"n" é quebra de linha 

}
function mostraEquipe() {
  if (time.length === 0) {
    return;
  }
  for (let i = 0; i < time.length; i++) {
    let jogador = time[i];
    console.log((i + 1) + ". " + jogador.nome + " | Função: " + jogador.funcao + " | Pontuação: " + jogador.pontuacao);
  }


}

function mostraEquipe() {
  console.log("-------------------");
  console.log("Minha Equipe atual é: ", time);
  console.log("-------------------");
}

function cadastrarJogador() {
  let nomeJogador = prompt("Digite o nome do jogador: ");
  let funcaoJogador = prompt("Digite a função no time: ");
  let pontuacaoJogador = Number(prompt("Digite a pontuação: "));

  if (isNaN(pontuacaoJogador)) {
    console.log("Pontuação inválida!");
    return;
  } else {
    let recruta = {
      nome: nomeJogador,
      funcao: funcaoJogador,
      pontuacao: pontuacaoJogador,
    }


    time.push(recruta);
    console.log("Jogador " + nomeJogador + " foi castrado com sucesso! ");
    console.log("---------------------------");

  }

}


function deletarJogador() {
  if (time.length === 0) {
    console.log("Nenhum ususario cadastrado ");
    return;
  }
  let nomeDeletado = prompt("Digite o nome a ser deletado: ");
  let indexDeletado = -1;

  for (let i = 0; i < time.length; i++) {

    if (time[i].nome === nomeDeletado) {
      indexDeletado = i;
      break;
    }
  }

  if (indexDeletado === -1) {
    console.log("jogador não encontrado.");
    return;
  }
  time.splice(indexDeletado, 1);
  console.log("Jogador deletado com sucesso!!!")
}


function calculoDaMedia() {


  if (time.length === 0) {
    console.log("Nenhum jogador cadastrado.");
    return;
  }

  let totalPontos = 0;

  for (let i = 0; i < time.length; i++) {
    totalPontos = totalPontos + time[i].pontuacao;
  }

  let mediaPontos = totalPontos / time.length;

  console.log("O time possui uma pontuação média de: " + mediaPontos);
}


//Buscador 
let nomeDesejado = time
function buscarJogador() {
  if (time.length === 0) {
    console.log("Equipe esta vazia. Cadastre jogadores primeiro!")
    return;

  }
  let nomeDesejado = prompt("Digite o nome do jogador: ");
  console.log("Bunscando Por: " + nomeDesejado + "...")
  let encontrou = false
  for (let i = 0; i < time.length; i++) {
    let jogadorAtual = time[i];

    if (jogadorAtual.nome === nomeDesejado) {
      console.log("JOGADOR ENCONTRADO!");
      console.log("Nome: " + jogadorAtual.nome + " | Pontos: " + jogadorAtual.pontuacao);

      encontrou = true;



    }
    if (encontrou === false) {
      console.log("O jogador " + nomeDesejado + " não faz parte da equipe.")


    }
    break;
  }

}

//Atualizar Pontuação 
function atualizarPontuacao() {

  if (time.length === 0) {
    console.log("Equipe esta vazia. Cadastre jogadores primeiro!")
    return;
  }


  let nomeAtualizar = prompt("Qual o nome do jogador que você quer atualizar? ")
  let encontrou = false;

  for (let i = 0; i < time.length; i++) {
    let atualizarJogador = time[i];

    if (atualizarJogador.nome === nomeAtualizar) {
      let pontosNovos = Number(prompt("Quantos pontos ele ganhou? "))

      if (isNaN(pontosNovos)) {
        console.log("Pontuação invalida!")

      }
      atualizarJogador.pontuacao += pontosNovos

      console.log("\nPontuação atualizado com sucesso!")
      console.log("SUCESSO! a pontuação de " + atualizarJogador.nome + " subiu para " + atualizarJogador.pontuacao + " pontos!");

      encontrou = true;
      break;


    }
  }
}

while (continuar === true) {
  mostraMenu();
  let opcao = prompt("Digite sua opção: ");

  if (opcao === "1") {
    cadastrarJogador();
  }
  else if (opcao === "2") {
    deletarJogador();
  }

  else if (opcao === "3") {
    mostraEquipe();

  }
  else if (opcao === "4") {
    calculoDaMedia();
  }
  else if (opcao === "5") {
    buscarJogador(nomeDesejado);
  }
  else if (opcao === "6") {
    atualizarPontuacao();
  }
  else if (opcao === "7") {
    continuar = false;
  }
  else {
    console.log("opção invalida, digite outra opção: ");

  }

}

