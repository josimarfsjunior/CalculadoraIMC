/**
 * IMC	              Classificação
Abaixo de 18,5	      Peso baixo
18,5 a 24,9	          Peso normal
25 a 29,9	          Sobrepeso
30 a 34,9	          Obesidade I
35 a 39,9	          Obesidade II
Acima de 40	          Obesidade III

*Essa calculadora de IMC é para adultos com 19 anos ou mais. 
Converse com seu médico sobre seu IMC se você tiver menos de 19 anos de idade
 */

var peso;
var altura;
var imcCalculado;
var resultado;

function calcularIMC(event) {
  //preventDefault =  Impede o recarregamento da página
  event.preventDefault();

  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;

  //Regra de calculo do IMC => peso / (altura * altura);
  imcCalculado = peso / (altura * altura);

  resultado = document.getElementById("resultado");

  if (imcCalculado < 18.5) {
    resultado.innerHTML = `<br/> Seu IMC é de ${imcCalculado.toFixed(2)}, CLASSIFICAÇÃO: Peso baixo!`;
  } else if (imcCalculado > 18.5 && imcCalculado < 24.9) {
    resultado.innerHTML = `<br/> Seu IMC é de ${imcCalculado.toFixed(2)}, CLASSIFICAÇÃO: Peso normal`;
  } else if (imcCalculado > 25 && imcCalculado < 29.9) {
    resultado.innerHTML = `<br/> Seu IMC é de ${imcCalculado.toFixed(2)}, CLASSIFICAÇÃO: Sobrepeso`;
  } else if (imcCalculado > 30 && imcCalculado < 34.9) {
    resultado.innerHTML = `<br/> Seu IMC é de ${imcCalculado.toFixed(2)}, CLASSIFICAÇÃO: Obesidade I`;
  } else if (imcCalculado > 35 && imcCalculado < 39.9) {
    resultado.innerHTML = `<br/> Seu IMC é de ${imcCalculado.toFixed(2)}, CLASSIFICAÇÃO: Obesidade II`;
  } else if (imcCalculado > 40) {
    resultado.innerHTML = `<br/> Seu IMC é de ${imcCalculado.toFixed(2)}, CLASSIFICAÇÃO: Obesidade III`;
  }

  //Limpando o formulário
  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
}
