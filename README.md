# Framework Frontend Responsivo Acessivel

Framework JavaScript para criação de páginas web responsivas com acessibilidade para deficientes visuais.

## Como usar? 

Para utilizar o framework siga os seguintes passos: 

1. Baixe os arquivos deste repositório em uma pasta de sua preferência. 
2. Crie uma página HTML. 
3. Importe os arquivos **framework.js** e **framework.css** dentro da tag ```<head>``` da página criada no passo anterior.
4. Crie um arquivo JavaScript separado e também o importe na tag ```<head>```, após o arquivo **framework.js**, para que seja possível ter acesso às variáveis e funções auxiliares.
5. Dentro do arquivo JavaScript criado anteriormente, implemente uma das seguintes funções:
   * **```didStartSetup```**: essa função será chamada pelo framework assim que a página terminar de carregar, e antes das tags começarem a ser criadas a partir dos objetos recebidos. Não recebe nenhum parâmetro e não possui retorno. Use-a para executar qualquer ação que desejar nesse momoento. **Implementação opcional**.
   * **```getHeaderObjects```**: essa função deve retornar os objetos que serão transformados nas tags HTML que vc quer que sejam inseridas na tag [\<header\>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/header), dentro do body da sua página. Não recebe nenhum parâmetro e deve retornar uma lista de objetos. Caso a função não tenha sido implementada ou retorno uma lista vazia, a tag ```<header>``` não é criada. 
   * **```getMainObjects```**: essa função deve retornar os objetos que serão transformados nas tags HTML que vc quer que sejam inseridas na tag [\<main\>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/main), dentro do body da sua página. Não recebe nenhum parâmetro e deve retornar uma lista de objetos. Caso a função não tenha sido implementada ou retorno uma lista vazia, a tag ```<main>``` não é criada. 
   * **```getFooterObjects```**: essa função deve retornar os objetos que serão transformados nas tags HTML que vc quer que sejam inseridas na tag [\<footer\>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/footer), dentro do body da sua página. Não recebe nenhum parâmetro e deve retornar uma lista de objetos. Caso a função não tenha sido implementada ou retorno uma lista vazia, a tag ```<footer>``` não é criada. 
   * **```didEndSetup```**: essa função será chamada pelo framework assim que terminar de processar os objetos que foram retornados nas três funções anteriores. Não recebe nenhum parâmetro e não possui retorno. Use-a para executar qualquer ação que desejar nesse momoento. **Implementação opcional**.
   
Este projeto possui um arquivo de **template**, no qual todos os passos acima já estão implementados, e partir do qual é possível criar as páginas desejadas.
    
## Como criar os objetos que serão transformados nas tags? 

Cada tag é representada por um objeto JavaScript que possui a estrutura base: 

```
{
    type: ...,
    content: ...
}
```

- **type** é um valor inteiro e diz qual tag deve ser criada.
- **content** pode ser uma string, um array ou outro objeto. Seu conteúdo varia de acordo com o valor de **type** e ele deve possuir o que é necessário para se criar a tag desejada. 

Atualmente o framework dá suport à criação das seguintes tags: ```<p>```, ```<i>```, ```<a>```, ```<span>```, ```<h>```, ```<hgroup>```, ```<abbr>```, ```<acronym>```, ```<ul>```, ```<ol>```, ```<li>```, ```<figure>```, ```<img>```, ```<figcaption>```, ```<br>```, ```<section>```, ```<article>```, ```<nav>```, ```<aside>```, ```<form>```, ```<input>```, ```<button>``` e ```<select>```. 

Também há um componenete personalizado para a criação de menu de navegação. 

Não é necessário criar a estrutura dos objetos manualmente. Para isso, o framework disponibiliza uma série de funções auxiliares que criar os objetos, diminuindo e facilitando o trabalho.

Cada função possui o nome da tag que se deseja criar, e dependendo de qual tag for, a função recebe diferente parâmetros, alguns obrigatório e outros opcionais. 

Veja as funções auxiliares a seguir. 

## Funções auxiliares

A seguir serão mostradas as assinaturas das funções auxiliares e uma explicação sobre os parâmetros recebidas por cada uma. 

* **```function p(content)```**
  - **content** pode ser uma string, um dos objetos que representam as tags ```<i>```, ```<span>```, ```<a>```, ```<abbr>```, ```<acronym>```, ou um array contendo strings e objetos (os que representam as tags suportadas de forma aninhada apresentados anteriomente).Os textos e tags criadas (se for o caso) são inseridos como conteúdo da tag ```<p>``` criada.

* **```function i(text, clss)```**
  - **text** deve ser uma string e será inserido como conteúdo da tag ```<i>``` criada. 
  - **clss** deve ser uma string e será usado como valor da propriedade **class** da tag ```<i>``` criada. 

* **```function span(text)```**
  - **text** deve ser uma string e será inserido como conteúdo da tag ```<span>``` criada. 

* **```function a(text, link)```**
  - **text** deve ser uma string e será inserido como conteúdo da tag ```<a>```criada. 
  - **link** deve ser uma string e será utlizado como valor da propriedade **href** da tag ```<a>```criada. 

* **```function h(text, level)```**
  - **text** deve ser uma string e será inserido como conteúdo da tag ```<h>``` criada. 
  - **level** deve ser um inteiro entre 1 e 6 e é utilizado para definir qual tag será criada (```<h1>```, ```<h2>```, ```<h3>```, ```<h4>```, ```<h5```, ```<h6>```). É opcional. Caso seja omitido ou caso seja menor que 1 ou maior que 6 é cirado uma tag ```<h1>```. 