//Criando a classe (HERO)
class Hero {
	constructor(nome, idade, tipo){
		this.nome = "nome"
		this.idade ="idade"
		this.tipo = "tipo"
}
// definindo o tipo de ataque de cada heroi	
	atacar(){
	let ataque;
	
	switch(this.tipo){
		case 'mago':
			ataque = 'magia';
		case 'guerreiro':
			ataque = 'espada';
		case 'monge':
			ataque = 'artes marciais';
		case 'ninja':
			ataque = 'shuriken';
		break;
	default:
			ataque = 'realizou um ataque';
}
	console.log(`O ${this.tipo} atacou usando ${ataque}`)
	}
}
//instância da class hero
	const hero1 = new Hero('Pato Donald o mago', 22, 'mago');
	const hero2 = new Hero ('Pateta', 41, 'guerreiro');
	const hero3 = new Hero('Mickey', 15, 'monge');
	const hero4 = new Hero('Minnie', 16, 'ninja');

//chamando o metodo atacar para o heroi
hero1.atacar();
hero2.atacar();
hero3.atacar();
hero4.atacar();