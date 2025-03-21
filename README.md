# aula-typescript
# README - Inicializando um Projeto TypeScript

Este guia orienta a configuração inicial de um projeto TypeScript. Vamos cobrir o processo desde a criação do projeto até a configuração do ambiente de desenvolvimento, compilação de TypeScript para JavaScript e versionamento no GitHub. Além disso, você terá a oportunidade de praticar conceitos fundamentais do TypeScript por meio de exercícios.

---

## Passo 1: Inicializando o Projeto

### 1.1 Inicializando o Node.js (se necessário)

Caso ainda não tenha inicializado o Node.js no seu projeto, execute o seguinte comando para criar o arquivo `package.json`:

```bash
npm init -y
```

### 1.2 Instalando o TypeScript

Instale o TypeScript como uma dependência de desenvolvimento do projeto:

```bash
npm install typescript --save-dev
```

### 1.3 Criando o Arquivo de Configuração do TypeScript

Agora, crie o arquivo de configuração `tsconfig.json` com o seguinte comando:

```bash
npx tsc --init
```

Isso gerará o arquivo `tsconfig.json` com configurações padrão do TypeScript.

### 1.4 Editando o `tsconfig.json`

Abra o arquivo `tsconfig.json` e edite as configurações de compilação, especialmente para definir os diretórios de entrada e saída dos arquivos. A configuração sugerida é a seguinte:

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "target": "ES6",
    "module": "CommonJS"
  }
}
```

### 1.5 Criando as Pastas `src` e `dist`

Crie duas pastas dentro do seu projeto:

- **src/**: Para armazenar os arquivos TypeScript.
- **dist/**: Para armazenar os arquivos JavaScript compilados.

Use o Explorer do VSCode para facilitar a criação e visualização das pastas.

### Estrutura do Projeto

A estrutura final do seu projeto ficará assim:

```
aula-typescript/
│── .git/            # (Não visível no VSCode)
│── .gitignore       # Arquivo para ignorar arquivos no Git
│── package.json     # Configurações do projeto Node.js
│── tsconfig.json    # Configuração do TypeScript
│── src/             # Diretório para arquivos TypeScript
│   ├── index.ts     # Arquivo principal do TypeScript
│── dist/            # Diretório onde os arquivos JavaScript compilados serão gerados
```

### 1.6 Configurando o `.gitignore`

Abra o arquivo `.gitignore` e adicione as seguintes linhas para garantir que os arquivos desnecessários não sejam versionados no Git:

```bash
node_modules/
dist/
```

---

## Passo 2: Criando um Arquivo TypeScript e Compilando para JavaScript

### 2.1 Criando o Arquivo `index.ts`

Crie o arquivo `index.ts` dentro da pasta `src/` e adicione o seguinte código:

```typescript
let mensagem: string = "Olá, TypeScript!";
console.log(mensagem);
```

### 2.2 Compilando o Código TypeScript

No terminal, execute o comando a seguir para compilar os arquivos TypeScript:

```bash
npx tsc
```

Esse comando gerará um arquivo `dist/index.js`.

### 2.3 Executando o Código JavaScript Gerado

Agora, execute o código JavaScript compilado:

```bash
node dist/index.js
```

Se tudo estiver correto, a saída será:

```
Olá, TypeScript!
```

---

## Passo 3: Enviando o Código para o GitHub

### 3.1 Adicionando os Arquivos ao Versionamento

Execute o seguinte comando para adicionar todos os arquivos ao versionamento do Git:

```bash
git add .
```

### 3.2 Criando um Commit

Crie um commit com uma mensagem explicativa sobre o que foi feito:

```bash
git commit -m "Configuração inicial do projeto TypeScript"
```

### 3.3 Enviando para o GitHub

Por fim, envie seu código para o repositório no GitHub:

```bash
git push origin main
```

---

## Passo 4: Exercícios

### Exercício 1 - Tipagem e Arrays

Crie um array de números e imprima a soma dos valores.

```typescript
let valores: number[] = [10, 20, 30];
let somaValores: number = valores.reduce((acc, val) => acc + val, 0);
console.log("Soma dos valores:", somaValores);
```

### Exercício 2 - Função Tipada

Crie uma função que recebe um nome e retorna uma mensagem personalizada.

```typescript
function mensagemPersonalizada(nome: string): string {
    return `Olá, ${nome}! Bem-vindo ao TypeScript.`;
}
console.log(mensagemPersonalizada("Ana"));
```

### Exercício 3 - Classe e Instância

Crie uma classe `Carro` com atributos `marca`, `modelo` e `ano`. Instancie um objeto e exiba suas informações.

```typescript
class Carro {
    constructor(public marca: string, public modelo: string, public ano: number) {}
    detalhes(): string {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}
const carro1 = new Carro("Toyota", "Corolla", 2022);
console.log(carro1.detalhes());
```

---

## Conclusão

Nesta aula, você aprendeu como configurar um projeto TypeScript, compilar arquivos TypeScript para JavaScript e realizar o versionamento do código com o Git. Além disso, praticou conceitos fundamentais do TypeScript, como tipagem, funções tipadas e classes. Esses conceitos são essenciais para o desenvolvimento de aplicações robustas e seguras com TypeScript, seja em projetos web ou mobile, como o React Native.

Pratique os exercícios para reforçar o aprendizado antes de aplicar o conhecimento em projetos mais avançados. 🚀