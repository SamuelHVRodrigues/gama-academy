class Data {
    // public dia: number;
    // mes: number;
    // ano: number;

    // constructor(dia: number, mes: number, ano: number = 1970) {
        // this.dia = dia;
        // this.mes = mes;
        // this.ano = ano;
    // }

    constructor(public dia: number, public mes: number, public ano: number = 2021) {
    } // Tem a mesma função do código acima

}

const data = new Data(18, 7, 2021);
console.log(data.dia);

const data2 = new Data(18, 7);

// Utilizando Modificadores de Acesso
class Carro {
    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMax: number = 220
    ) {}

    private alterarVelocidade(delta: number) {
        const novaVelocidade = this.velocidadeAtual + delta;

        if(novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMax) {
            this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMax : 0;
        }
    }

    acelerar() {
        this.alterarVelocidade(5);
    }

    frear() {
        this.alterarVelocidade(-5);
    }
}

const carro = new Carro("Chevrolet", "Prisma", 250);
carro.acelerar();
carro.frear();
// carro.alterarVelocidade(300);

// Herança
class Camaro extends Carro {
    private turbo = false;

    constructor(){
        super("Chevrolet", "Camaro", 500);
    }

    ligarTurbo() {
        this.turbo = true;
    }
}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();