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

var posicaoIMC;
var posicaoIMCBaixo;
var posicaoIMCNormal;
var posicaoIMCSobrePeso;
var posicaoIMCObesidade1;
var posicaoIMCObesidade2;
var posicaoIMCObesidade3;

function calcularIMC(event) {
  //preventDefault =  Impede o recarregamento da página
  event.preventDefault();

  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;

  //Regra de calculo do IMC => peso / (altura * altura);
  imcCalculado = peso / (altura * altura);

  resultado = document.getElementById("resultado");
  posicaoIMCBaixo = document.getElementById("linhaBaixo");
  posicaoIMCNormal = document.getElementById("linhaNormal");
  posicaoIMCSobrePeso = document.getElementById("linhaSobrepeso");
  posicaoIMCObesidade1 = document.getElementById("linhaSobrepesoI");
  posicaoIMCObesidade2 = document.getElementById("linhaSobrepesoII");
  posicaoIMCObesidade3 = document.getElementById("linhaSobrepesoIII");

  /**Regra criada para informar o usuário da obrigatoriedade de preencher os campos */
  if (peso === null || (peso === " " && altura === null) || altura === "") {
    alert(
      "Para realizar o calculo de IMC é necessário informar o Peso e a Altura!",
    );
  }

  if (imcCalculado < 18.5) {
    resultado.innerHTML = `<br/> Seu IMC é de ${imcCalculado.toFixed(2)}, CLASSIFICAÇÃO: Peso baixo!`;
    posicaoIMCBaixo.innerHTML = `${imcCalculado.toFixed(2)}`;

    //posicaoIMCBaixo.innerHTML = "";
    posicaoIMCNormal.innerHTML = "";
    posicaoIMCSobrePeso.innerHTML = "";
    posicaoIMCObesidade1.innerHTML = "";
    posicaoIMCObesidade2.innerHTML = "";
    posicaoIMCObesidade3.innerHTML = "";
  } else if (imcCalculado > 18.5 && imcCalculado < 24.9) {
    resultado.innerHTML = `<br/> Seu IMC é de ${imcCalculado.toFixed(2)}, CLASSIFICAÇÃO: Peso normal`;
    posicaoIMCNormal.innerHTML = `${imcCalculado.toFixed(2)}`;

    /**Criado para garantir que os demais campos fiquem limpos após usuário
     * realizar novo calculo.
     */
    posicaoIMCBaixo.innerHTML = "";
    //posicaoIMCNormal.innerHTML = "";
    posicaoIMCSobrePeso.innerHTML = "";
    posicaoIMCObesidade1.innerHTML = "";
    posicaoIMCObesidade2.innerHTML = "";
    posicaoIMCObesidade3.innerHTML = "";
  } else if (imcCalculado > 25 && imcCalculado < 29.9) {
    resultado.innerHTML = `<br/> Seu IMC é de ${imcCalculado.toFixed(2)}, CLASSIFICAÇÃO: Sobrepeso`;
    posicaoIMCSobrePeso.innerHTML = `${imcCalculado.toFixed(2)}`;

    /**Criado para garantir que os demais campos fiquem limpos após usuário
     * realizar novo calculo.
     */
    posicaoIMCBaixo.innerHTML = "";
    posicaoIMCNormal.innerHTML = "";
    //posicaoIMCSobrePeso.innerHTML = '';
    posicaoIMCObesidade1.innerHTML = "";
    posicaoIMCObesidade2.innerHTML = "";
    posicaoIMCObesidade3.innerHTML = "";
  } else if (imcCalculado > 30 && imcCalculado < 34.9) {
    resultado.innerHTML = `<br/> Seu IMC é de ${imcCalculado.toFixed(2)}, CLASSIFICAÇÃO: Obesidade I`;
    posicaoIMCObesidade1.innerHTML = `${imcCalculado.toFixed(2)}`;

    /**Criado para garantir que os demais campos fiquem limpos após usuário
     * realizar novo calculo.
     */
    posicaoIMCBaixo.innerHTML = "";
    posicaoIMCNormal.innerHTML = "";
    posicaoIMCSobrePeso.innerHTML = "";
    //posicaoIMCObesidade1.innerHTML = '';
    posicaoIMCObesidade2.innerHTML = "";
    posicaoIMCObesidade3.innerHTML = "";
  } else if (imcCalculado > 35 && imcCalculado < 39.9) {
    resultado.innerHTML = `<br/> Seu IMC é de ${imcCalculado.toFixed(2)}, CLASSIFICAÇÃO: Obesidade II`;
    posicaoIMCObesidade2.innerHTML = `${imcCalculado.toFixed(2)}`;

    /**Criado para garantir que os demais campos fiquem limpos após usuário
     * realizar novo calculo.
     */
    posicaoIMCBaixo.innerHTML = "";
    posicaoIMCNormal.innerHTML = "";
    posicaoIMCSobrePeso.innerHTML = "";
    posicaoIMCObesidade1.innerHTML = "";
    //posicaoIMCObesidade2.innerHTML = '';
    posicaoIMCObesidade3.innerHTML = "";
  } else if (imcCalculado > 40) {
    resultado.innerHTML = `<br/> Seu IMC é de ${imcCalculado.toFixed(2)}, CLASSIFICAÇÃO: Obesidade III`;
    posicaoIMCObesidade3.innerHTML = `${imcCalculado.toFixed(2)}`;

    /**Criado para garantir que os demais campos fiquem limpos após usuário
     * realizar novo calculo.
     */
    posicaoIMCBaixo.innerHTML = "";
    posicaoIMCNormal.innerHTML = "";
    posicaoIMCSobrePeso.innerHTML = "";
    posicaoIMCObesidade1.innerHTML = "";
    posicaoIMCObesidade2.innerHTML = "";
    //posicaoIMCObesidade3.innerHTML = '';
  }

  //Limpando o formulário
  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
}
