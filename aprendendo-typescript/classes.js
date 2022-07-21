"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Data = /** @class */ (function () {
    // public dia: number;
    // mes: number;
    // ano: number;
    // constructor(dia: number, mes: number, ano: number = 1970) {
    // this.dia = dia;
    // this.mes = mes;
    // this.ano = ano;
    // }
    function Data(dia, mes, ano) {
        if (ano === void 0) { ano = 2021; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    } // Tem a mesma função do código acima
    return Data;
}());
var data = new Data(18, 7, 2021);
console.log(data.dia);
var data2 = new Data(18, 7);
// Utilizando Modificadores de Acesso
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, velocidadeMax) {
        if (velocidadeMax === void 0) { velocidadeMax = 220; }
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMax = velocidadeMax;
        this.velocidadeAtual = 0;
    }
    Carro.prototype.alterarVelocidade = function (delta) {
        var novaVelocidade = this.velocidadeAtual + delta;
        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMax) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMax : 0;
        }
    };
    Carro.prototype.acelerar = function () {
        this.alterarVelocidade(5);
    };
    Carro.prototype.frear = function () {
        this.alterarVelocidade(-5);
    };
    return Carro;
}());
var carro = new Carro("Chevrolet", "Prisma", 250);
carro.acelerar();
carro.frear();
// carro.alterarVelocidade(300);
// Herança
var Camaro = /** @class */ (function (_super) {
    __extends(Camaro, _super);
    function Camaro() {
        var _this = _super.call(this, "Chevrolet", "Camaro", 500) || this;
        _this.turbo = false;
        return _this;
    }
    Camaro.prototype.ligarTurbo = function () {
        this.turbo = true;
    };
    return Camaro;
}(Carro));
var camaro = new Camaro();
camaro.acelerar();
camaro.frear();
