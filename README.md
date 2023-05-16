<!-- PARA ESCOLHER AS CORES DAS LINGUAGENS USAR O SITE https://brandcolors.net/ -->
![ShielddoProjeto](https://img.shields.io/badge/Repo-Typescript-0099e5.svg?style=for-the-badge)
![ShielddoProjeto](https://img.shields.io/badge/Versão-1.0.0-e9ebec.svg?style=for-the-badge)
![ShielddoProjeto](https://img.shields.io/badge/Linguagem-Typescript-0099e5.svg?style=for-the-badge)
![ShielddoProjeto](https://img.shields.io/github/repo-size/adrianoleitedasilva/typescript?style=for-the-badge)
![ShielddoProjeto](https://img.shields.io/tokei/lines/github/adrianoleitedasilva/typescript?style=for-the-badge)
![ShielddoProjeto](https://img.shields.io/github/directory-file-count/adrianoleitedasilva/typescript?style=for-the-badge)
![ShielddoProjeto](https://img.shields.io/github/stars/adrianoleitedasilva/typescript?style=for-the-badge) 
![ShielddoProjeto](https://img.shields.io/github/forks/adrianoleitedasilva/typescript?style=for-the-badge)
![ShielddoProjeto](https://img.shields.io/github/issues-pr/adrianoleitedasilva/typescript?style=for-the-badge)
![ShielddoProjeto](https://img.shields.io/github/last-commit/adrianoleitedasilva/typescript?style=for-the-badge)

<!-- Envie a imagem por meio de uma ISSUE e cole o link aqui nessa linha abaixo -->
![banner](https://github.com/adrianoleitedasilva/typescript/assets/6373438/a364c3ca-6a1b-4e7e-86d2-bacacb801f4a)

- [Typescript](#typescript)
- [Instalação](#instalação)
    - [Configurando o compilador do Typescript](#configurando-o-compilador-do-typescript)
  
# Typescript

TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft que se baseia na sintaxe do JavaScript. Ela adiciona recursos de tipagem estática ao JavaScript, o que permite aos desenvolvedores escreverem código mais seguro, escalável e com menos erros.

Ao contrário do JavaScript, que é uma linguagem de programação interpretada, o TypeScript é uma linguagem de programação tipada estaticamente que precisa ser compilada em JavaScript antes de ser executada pelos navegadores ou pelo ambiente de execução do JavaScript. A compilação do TypeScript para JavaScript é feita por meio do compilador do TypeScript.

Uma das principais características do TypeScript é o suporte a tipos. Isso significa que os desenvolvedores podem especificar os tipos de dados das variáveis, argumentos de função e retornos de função, proporcionando maior clareza e segurança ao código. Além disso, o TypeScript oferece recursos avançados, como herança de classes, interfaces, enumerações e suporte a módulos, que não estão presentes no JavaScript puro.

O TypeScript também é amplamente utilizado em projetos JavaScript de grande escala, permitindo que os desenvolvedores trabalhem com equipes maiores e facilitem a manutenção do código ao longo do tempo. Ele é compatível com todas as bibliotecas e frameworks JavaScript existentes, permitindo que os desenvolvedores escrevam código TypeScript em projetos existentes e se beneficiem de suas vantagens.

Em resumo, o TypeScript é uma linguagem de programação que estende o JavaScript adicionando recursos de tipagem estática, permitindo aos desenvolvedores escreverem código mais seguro, escalável e com menos erros, além de ser compatível com a maioria das bibliotecas e frameworks JavaScript existentes.

# Instalação

Para instalar o Typescript vamos precisar do NodeJS, instalado. Caso ele já esteja instalado em sua máquina, abra um terminal(prompt de comando) e use o comando:

```terminal
  npm install -g typescript
```

O NodeJS vai se encarregar de baixar e instalar a versão mais recente do Typescript.

Para ver a versão que foi instalada, use o comando:

```terminal
  tsc -v
```

### Configurando o compilador do Typescript

Inicialmente o arquivo de configuração não vem no projeto, precisamos "inicia-lo". Com o terminal aberto, vamos rodar o comando:

```terminal
tsc --init
```