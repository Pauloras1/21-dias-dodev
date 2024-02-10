// Solicitando as informações do usuário
let nome = prompt("Digite o seu nome: ");
let idade = parseInt(prompt("Digite a sua idade: "));
let altura = parseFloat(prompt("Digite a sua altura em metros: "));
let peso = parseFloat(prompt("Digite o seu peso em kg: "));

// Calculando o ano de nascimento
let ano_atual = 2023;
let ano_nascimento = ano_atual - idade;

// Calculando o IMC
let imc = peso / (altura * altura);

// Exibindo as informações
alert(`Olá ${nome}, você tem ${idade} anos, nasceu em ${ano_nascimento}, tem ${altura} de altura, pesa ${peso}kg e seu IMC é ${imc.toFixed(2)} Kg/m2`);
