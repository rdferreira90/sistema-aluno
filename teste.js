

function personagemMorreu(dano, saude) {
    if((dano - saude) <= 0){
        console.log(1)
    }else{
        console.log(0)
    }
  }


  function funcaoPrintar(nome) {
    console.log('nome:' , nome)    
  }


  funcaoPrintar('wilder')
  personagemMorreu(0);
  console.log('final')


