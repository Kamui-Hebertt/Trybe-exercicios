let info = {
    personagem: 'Margarida e Tio Patinhas',
    origem: "Pato DonaldChristmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  info.recorrente = 'sim';

  for (let key in info){
      console.log(info[key])
  }

//5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os 
//seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O
 //último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma
  //das chaves. Valor esperado no console:
//
//