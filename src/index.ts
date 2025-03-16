let mensagem: string = "Olá, TypeScript!";
console.log(mensagem);


//exercicio 1
let valores: number[] = [10, 20, 30];  // Cria um array de números
let somaValores: number = valores.reduce((acc, val) => acc + val, 0);  // Soma os valores do array
console.log("Soma dos valores:", somaValores);  // Imprime a soma dos valores


//exercicio 2
// Função que recebe um nome e retorna uma mensagem personalizada
function mensagemPersonalizada(nome: string): string {
    return `Olá, ${nome}! Bem-vindo ao TypeScript.`;  // Retorna a mensagem personalizada
}

// Chama a função passando o nome "Ana"
console.log(mensagemPersonalizada("Ana"));


//exercicio 3
// Define a classe Carro com os atributos marca, modelo e ano
class Carro {
    constructor(public marca: string, public modelo: string, public ano: number) {}

    // Método que retorna as informações do carro
    detalhes(): string {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}

// Cria uma instância da classe Carro
const carro1 = new Carro("Toyota", "Corolla", 2022);

// Chama o método detalhes() da instância e imprime o resultado
console.log(carro1.detalhes());
