# Jogo dos patos
Projeto de jogo dos patos para a matéria de engenharia de software

# Como executar

O projeto consiste em um ambiente configurado em typescript, então algumas ferramentas foram colocadas como dependências, segue passo a passo para execução do código.

## 1. Node
A dependencia principal é o node, uma ferramenta de facil uso e acesso, para mais informações e para instalação [Clique aqui](https://nodejs.org/en/).

## 2. Clonar o repositório
Obs.: Esse passo é de leitura opcional caso já esteja baixado o código em sua maquina local.

O código fonte pode ser baixado baixando do repositório na qual se encontra o projeto utilizando as formas básicas para clonar para uma pasta local. O github deixa disponível o download de uma pasta compactada com os arquivos ou para baixar pelo terminal segue o comando.

>  git clone \<URL do repositório\>

## 3. Instalar bibliotecas
Os projetos em node, em sua maioria, utilizam pacotes para facilitar a vida dos desenvolvedores. Logo é necessário fazer a instalação dos mesmos. Na pasta principal do arquivo, partindo do pressuposto que o primeiro passo foi seguido e a instação do node foi realizada, utilize o seguinte comando:
> npm install

ou utilizando yarn:

> yarn

Esse comando irá realizar a instalação das dependências.

Obs.: Não utilize ambos os comandos, não é recomendado a utilização de dois gerenciadores de pacotes no mesmo projeto por questões de padrões internos de cada um deles poderem interferir com a eficiencia dos mesmos.

## 4. Transpilar
Obs.: Passo opcional

Como padrão para projetos utilizando typescript, um transpilador é necessário, já que, apesar de baseado em javascript, a linguagem não pode ser interpretada normalmente, assim, de forma facil, o pacote do typescript disponibiliza essa ferramenta. Na pasta principal no arquivo, basta utilizar o seguinte comando:
> tsc

A transpilação do código será feita e o código typescript será traduzido para um código em javascript, essa tradução fica armazenada na pasta `build`

## 5. Executar
Com toda a preparação pronta, a execução fica simples, caso tenha realizado a transpilação do passo 4 apenas execute o comando:
> node build/index.js

Caso não tenha realizado a transpilação, não se preocupe, também é possível realizar a execução com o comando:
> npm start

ou utilizando yarn:
> yarn start