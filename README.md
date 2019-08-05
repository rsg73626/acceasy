# Framework Frontend Responsivo Acessivel

Framework JavaScript para criação de páginas web responsivas com acessibilidade para deficientes visuais.

## Indice

1. [Como usar?](#como-usar)
   - [Template](#template)
2. [Como criar os objetos que serão transformados nas tags?](#como-criar-os-objetos-que-serão-transformados-nas-tags)
3. [Funções para criar os objetos que representam as tags](#funções-para-criar-os-objetos-que-representam-as-tags)
   - [p](#p-func)
4. [Os casos select, checkbox e radio](#os-casos-select-checkbox-e-radio)

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

### Template
   
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

## Funções para criar os objetos que representam as tags

A seguir serão mostradas as assinaturas das funções auxiliares e uma explicação sobre os parâmetros recebidas por cada uma. 


* <div id="p-func"></div> **```function p(content)```**
  - **content** pode ser uma string, um dos objetos que representam as tags ```<i>```, ```<span>```, ```<a>```, ```<abbr>```, ```<acronym>```, ou um array contendo strings e objetos (os que representam as tags suportadas de forma aninhada apresentados anteriomente).Os textos e tags criadas (se for o caso) são inseridos como conteúdo da tag ```<p>``` criada.

* **```function i(text, clss)```**
  - **text** deve ser uma string e será inserido como conteúdo da tag ```<i>``` criada. 
  - **clss** deve ser uma string e será usado como valor da propriedade **class** da tag ```<i>``` criada. 

* **```function span(text)```**
  - **text** deve ser uma string e será inserido como conteúdo da tag ```<span>``` criada. 

* **```function a(text, link)```**
  - **text** deve ser uma string e será inserido como conteúdo da tag ```<a>```criada. 
  - **link** deve ser uma string e será utilizado como valor da propriedade **href** da tag ```<a>```criada. 

* **```function h(text, level)```**
  - **text** deve ser uma string e será inserido como conteúdo da tag ```<h>``` criada. 
  - **level** deve ser um inteiro entre 1 e 6 e é utilizado para definir qual tag será criada (```<h1>```, ```<h2>```, ```<h3>```, ```<h4>```, ```<h5```, ```<h6>```). É opcional. Caso seja omitido ou caso seja menor que 1 ou maior que 6 é cirado uma tag ```<h1>```. 

* **```function hgroup(content)```**
  - **content** pode ser uma string, um dos objetos que representam uma das tags ```<h>``` ou uma array contendo strings e objetos. As strings são transformadas em tags ```<h1>```. Todas as tags criadas são inseridas como conteúdo da tag ```<hgroup>``` criada. 

* **```function abbr(text, title)```**
  - **text** deve ser uma string e será inserido como conteúdo da tag ```<abbr>``` criada. 
  - **title** deve ser uma string e seru valor será utilizado como valor da propriedade **title** da tag ```<abbr>``` cirada. 

* **```function acronym(text, title)```**
  - **text** deve ser uma string e será inserido como conteúdo da tag ```<acronym>``` criada. 
  - **title** deve ser uma string e seru valor será utilizado como valor da propriedade **title** da tag ```<acronym>``` cirada. 

* **```function ul(content)```**
  - **content** pode ser uma string, um dos objetos que representam as tags ```<p>```, ```<a>```, ```<h>```, ```<hgroup>```,```<img>```,  ```<figure>```, ```<li>```, ou um array contendo strings e objetos (os que representam as tags suportadas de forma aninhada apresentados anteriormente). Os textos e tags criada (se for o caso) são inseridos como conteúdo de uma tag ```<li>```, que por sua vez é inserida como ocnteúdo da tag ```<ul>``` criada. 

* **```function ol(content)```**
  - **content** pode ser uma string, um dos objetos que representam as tags ```<p>```, ```<a>```, ```<h>```, ```<hgroup>```,```<img>```,  ```<figure>```, ```<li>```, ou um array contendo strings e objetos (os que representam as tags suportadas de forma aninhada apresentados anteriormente). Os textos e tags criada (se for o caso) são inseridos como conteúdo de uma tag ```<li>```, que por sua vez é inserida como ocnteúdo da tag ```<ol>``` criada. 

* **```function li(content, subcontent)```**
  - **content** pode ser uma string, um dos objetos que representam as tags ```<p>```, ```<a>```, ```<h>```, ```<hgroup>```,```<img>```,  ```<figure>```, ou um array contendo strings e objetos (os que representam as tags suportadas de forma aninhada apresentados anteriormente). Os textos e tagas criadas (se for o caso) são inseridos como conteúdo das tag ```<li>``` criada. Pode ser passado como **null** caso o valor do segundo parâmetro seja específicado. 
  - **subcontent** deve ser um dos objetos que representam as tags ```<ul>```, ```<ol>```. Utilizado para criar listas encadeadas. A tag criada é inserida como conteúdo da tag ```<li>```criada. Pode ser omitido caso não se queira criar uma lista encadeada. 

* **```function figure(img, caption)```**
  - **img** deve ser um objeto que representa a tag ```<img>```. A tag criada é inserida como conteúdo da tag ```<figure>``` criada. 
  - **caption** pode ser uma string ou um objeto que representa a tag ```<figcaption>```. Em caso de ser uma string, seu valor é inserido como conteúdo de uma tag ```<figcaption>```, que por sua vez é inserida como conteúdo da tag ```<figure>``` criada. Em caso de ser um objeto, a tag ```<figcaption>``` criada é inserida como conteúdo da tag ```<figure>``` criada. Pode ser omitido. 

* **```function img(src, alt)```**
  - **src** deve ser uma string e seu valor é utilizado como valor da propriedade **src** da tag ```<img>``` criada. 
  - **alt** deve ser uma string e seu valor é utilizado como valor da propriedade **alt** da tag ```<img>``` criada. 

* **```function figcaption(text)```**
  - **text** deve ser uma string e seu valor inserido com conteúdo da tag ```<figcaption>``` criada. 

* **```function breakline()```**
  - Essa função não recebe argumento e retorno um bojeto que representa a tag ```<br>```. Também existe uma variável global no framework chamada **br** que já armazena um bojeto desse tipo. 

* **```function section(content)```**
  - **content** pode ser um objeto ou uma lista de objetos que representam as tags ```<br>```, ```<p>```, ```<a>```, ```<h>```, ```<hgroup>```, ```<ul>```,  ```<ol>```, ```<figure>```, ```<img>```, ```<article>```, ```<nav>```, ```<aside>```, ```<form>```, ```<button>```. As tags criadas são inseridas como conteúdo da tag ```<section>```. 

* **```function article(content)```**
  - **content** pode ser um objeto ou uma lista de objetos que representam as tags ```<br>```, ```<p>```, ```<a>```, ```<h>```, ```<hgroup>```, ```<ul>```,  ```<ol>```, ```<figure>```, ```<img>```, ```<article>```, ```<nav>```, ```<aside>```, ```<form>```, ```<button>```. As tags criadas são inseridas como conteúdo da tag ```<article>``` criada. 

* **```function nav(content)```**
  - **content** pode ser um objeto ou uma lista de objetos que representam as tags ```<br>```, ```<a>```, ```<ul>```, ```<ol>```. As tags criadas são inseridas como conteúdo como conteúdo da tag ```<nav>``` criada. 

* **```function aside(content)```**
  - **content** pode ser um objeto ou uma lista de objetos que representam as tags ```<br>```, ```<a>```, ```<ul>```, ```<ol>```. As tags criadas são inseridas como conteúdo como conteúdo da tag ```<aside>``` criada.  

* **```function form(action, method, inputs, enctype)```**
  - **action** deve ser uma string e seu valor é utilizado como valor da propriedade **action** da tag ```<form>``` criada.
  - **method** deve ser uma string e seu valor é utilizado como valor da propriedade **method** da tag ```<form>``` criada.
  - **inputs** deve ser um array de objetos que podem ser dos tipos que repesentam as tags ```<br>```, ```<p>```, ```<a>```, ```<h>```, ```<hgroup>```, ```<ul>```,  ```<ol>```, ```<figure>```, ```<img>```, ```<input>```, ```<select>```, ```<button>```. As tags criadas são inseridas como conteúdo da tag ```<form>``` criada. 
  - ***enctype** deve ser uma string e seu valor é utilizado como valor da propriedade **enctype** da tag ```<form>``` criada. Pode ser omitido. 

* **```function input(type, name, label, placeholder, required)```**
  - **type** deve ser uma string e seu valor é utilizado como valor da propriedade **type** da tag ```<input>``` criada. O framework disponibiliza as váriaveis globais ```_text```, ```_number```, ```_tel```, ```_email```, ```_date```, ```_password```, ```_file```, que podem ser utilizadas como valores. 
  - **name** deve ser uma string e seu valor é utilizado como valor da propriedade **name** da tag ```<input>``` criada. 
  - **label** deve ser uma string e caso seja passado: é criado uma tag ```<label>``` e uma tag ```<span>```; o valor do parâmetro é adicionado como conteúdo da tag ```<span>``` criada; a tag ```<span>``` é inserida como conteúdo da tag ```<label>``` criada; e a tag ```<input>``` criada também é adicionada como conteúdo da tag ```<label>```. Pode ser omitido ou passada como **null**.
  - **placeholder** deve ser uma string e seu valor á utilizado como valor da propriedade **placeholder** da tag ```<input>``` criada. Pode ser omitido ou passado como **null**.
  - **required** deve ser um booleano e seu valor é utilizado como valor da propriedade **required** da tag ```<input>``` criada. Pode ser omitido.
  - O framework também disponibiliza as funções globais: 
    - **```function textInput(name, label, placeholder, required)```**
    - **```function numberInput(name, label, placeholder, required)```**
    - **```function telInput(name, label, placeholder, required)```** 
    - **```function emailInput(name, label, placeholder, required)```**
    - **```function dateInput(name, label, placeholder, required)```**
    - **```function passwordInput(name, label, placeholder, required)```**
    - **```function fileInput(name, label, placeholder, required)```**

   Elas servem para simplificar a criação desse tipos de input e funcionam exatamente como a função **```function input(type, name, label, placeholder, required)```**, somente não é necessário passar o parâmetro **type**. 

* **```function submit(text)```**
  - **text** deve ser uma string e seu valor é utilizado como valor da propriedade **value** da tag ```<input type="submit">``` criada. Pode ser omitido. Seu valor padrão é **"Submit"**.

* **```function reset(text)```**
  - **text** deve ser uma string e seu valor é utilizado como valor da propriedade **value** da tag ```<input type="reset">``` criada. Pode ser omitido. Seu valor padrão é **"Reset"**.

* **```button(text, onclick)```**
  - **text** deve ser uma string e seu valor é inserido como conteúdo da tag ```<button>``` criada.
  - **onclick** deve ser uma string e seu valor é utilizado como valor da propriedade **onclick** da tag ```<button>``` criada. 

## Os casos select, checkbox e radio

