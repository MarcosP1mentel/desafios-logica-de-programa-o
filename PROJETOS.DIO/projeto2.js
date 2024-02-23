function NivelRanqueadas(vitorias, derrotas) {
    let TotalVitorias = vitorias - derrotas;
    let Nivel;
    
    if(TotalVitorias <=10){
        Nivel = "Ferro";
    } else if (TotalVitorias >=11 && TotalVitorias <=20){
        Nivel = "Bronze";
    } else if (TotalVitorias >=21 && TotalVitorias <=50){
        Nivel = "Prata";
    } else if (TotalVitorias >=51 && TotalVitorias <=80){
        Nivel = "Ouro";
    } else if (TotalVitorias >=81 && TotalVitorias <=90){
        Nivel = "Diamante";
    } else if (TotalVitorias >=91 && TotalVitorias <=100){
        Nivel = "Lendário";
    } else {
        Nivel = "Imortal"
    }
    
    return 'O herói tem um saldo de ' + TotalVitorias + ' está no nivel de ' + Nivel + ''
    }
    
    let Vitorias = 170
    let Derrotas = 1
    const resultado = NivelRanqueadas(Vitorias, Derrotas);
    console.log (resultado);