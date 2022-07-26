let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  info.recorente = 'sim';

for (let key in info){
    console.log(info[key])
};

//4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console: