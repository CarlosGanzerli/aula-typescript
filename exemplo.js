var mensagem = "Olá, TypeScript!";
console.log(mensagem);
var nome = "Maria";
var idade = 30;
var ativo = true;
var notas = [8, 9, 10];
notas.push(7); // Adiciona um novo elemento (7) ao array
console.log(notas[0]); // Saída: 8 (acesso pelo índice)let aluno: [string, number] = ["João", 25];
console.log(aluno[0]); // Saída: "João"
console.log(aluno[1]); // Saída: 25 
//aluno[1] = "Maria"; // Erro: Tipo 'string' não é atribuível a 'number'enum Status {
var Status;
(function (Status) {
    Status[Status["Pendente"] = 0] = "Pendente";
    Status[Status["EmAndamento"] = 1] = "EmAndamento";
    Status[Status["Concluido"] = 2] = "Concluido";
})(Status || (Status = {}));
var tarefa = Status.EmAndamento;
console.log(Status.Pendente); // Saída: 0
console.log(Status.EmAndamento); // Saída: 1
console.log(Status.Concluido); // Saída: 2
function soma(a, b) {
    return a + b;
}
console.log(soma(5, 3)); // Saída: 8
function saudacao(nome, idade) {
    return idade ? "Ol\u00E1, ".concat(nome, ", voc\u00EA tem ").concat(idade, " anos!") : "Ol\u00E1, ".concat(nome, "!");
}
console.log(saudacao("Maria")); // Saída: "Olá, Maria!"
console.log(saudacao("João", 25)); // Saída: "Olá, João, você tem 25 anos!"
function saudacao(nome, idade) {
    if (idade === void 0) { idade = 18; }
    return "Ol\u00E1, ".concat(nome, ", voc\u00EA tem ").concat(idade, " anos!");
}
console.log(saudacao("Carlos")); // Saída: "Olá, Carlos, você tem 18 anos!"
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.apresentar = function () {
        return "Meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos.");
    };
    return Pessoa;
}());
var pessoa1 = new Pessoa("Carlos", 40);
console.log(pessoa1.apresentar()); // Saída: "Meu nome é Carlos e tenho 40 anos."
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(saldoInicial) {
        this.saldo = saldoInicial;
    }
    ContaBancaria.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    ContaBancaria.prototype.getSaldo = function () {
        return this.saldo;
    };
    return ContaBancaria;
}());
var conta = new ContaBancaria(1000);
conta.depositar(500);
console.log(conta.getSaldo()); // Saída: 1500
console.log(conta.saldo); // ❌ Erro: 'saldo' é privado
