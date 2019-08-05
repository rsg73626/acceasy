# Framework Frontend Responsivo Acessivel

Framework JavaScript para criação de páginas web responsivas com acessibilidade para deficientes visuais.

## Indice

1. [Como usar?](#como-usar)
   - [Template](#template)
2. [Como criar os objetos que serão transformados nas tags?](#como-criar-os-objetos-que-serão-transformados-nas-tags)
3. [Funções para criar os objetos que representam as tags](#funções-para-criar-os-objetos-que-representam-as-tags)
   - [\<p\>](#p-func)
   - [\<i\>](#i-func)
   - [\<span\>](#span-func)
   - [\<a\>](#a-func)
   - [\<h\>](#h-func)
   - [\<hgroup\>](#hgroup-func)
   - [\<abbr\>](#abbr-func)
   - [\<acronym\>](#acronym-func)
   - [\<ul\>](#ul-func)
   - [\<ol\>](#ol-func)
   - [\<li\>](#li-func)
   - [\<figure\>](#figure-func)
   - [\<img\>](#img-func)
   - [\<figcaption\>](#figcaption-func)
   - [\<br\>](#breakline-func)
   - [\<section\>](#section-func)
   - [\<article\>](#article-func)
   - [\<nav\>](#nav-func)
   - [\<aside\>](#aside-func)
   - [\<form\>](#form-func)
   - [\<input\>](#input-func)
   - [iput submit](#submit-func)
   - [input reset](#reset-func)
   - [\<button\>](#button-func)
   <!-- - [\<\>](#-func) -->
4. [Os casos select, checkbox e radio](#os-casos-select-checkbox-e-radio)
   - [Select](#select)
     - [\<select\>](#select-func)
     - [\<option\>](#option-func)
   - [Checkbox](#checkbox)
     - [checkboxGroup](#checkboxGroup-func)
     - [\<input type="checkbox"\>](#checkbox-func)
   - [Radio](#radio)
     - [radioGroup](#radioGroup-func)
     - [\<input type="radio"\>](#radio-func)
5. [Menu](#menu)
   - [function menu(items) ou mn(items)](#function-menuitems-ou-mnitems)
   - [function menuItem(text, link, icon, subitems) ou mi(text, link, icon, subitems)](#function-menuitemtext-link-icon-subitems-ou-mitext-link-icon-subitems)
6. [Acessbilidade](#acessibilidade)
6. [Notas](#notas)

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

<div id="p-func"></div>

* **```function p(content)```**
  - **content** pode ser uma string, um dos objetos que representam as tags ```<i>```, ```<span>```, ```<a>```, ```<abbr>```, ```<acronym>```, ou um array contendo strings e objetos (os que representam as tags suportadas de forma aninhada apresentados anteriomente).Os textos e tags criadas (se for o caso) são inseridos como conteúdo da tag ```<p>``` criada.

<div id="i-func"></div>

* **```function i(text, clss)```**
  - **text** deve ser uma string e será inserido como conteúdo da tag ```<i>``` criada. 
  - **clss** deve ser uma string e será usado como valor da propriedade **class** da tag ```<i>``` criada.

<div id="span-func"></div> 

* **```function span(text)```**
  - **text** deve ser uma string e será inserido como conteúdo da tag ```<span>``` criada. 

<div id="a-func"></div>

* **```function a(text, link)```**
  - **text** deve ser uma string e será inserido como conteúdo da tag ```<a>```criada. 
  - **link** deve ser uma string e será utilizado como valor da propriedade **href** da tag ```<a>```criada. 

<div id="h-func"></div>

* **```function h(text, level)```**
  - **text** deve ser uma string e será inserido como conteúdo da tag ```<h>``` criada. 
  - **level** deve ser um inteiro entre 1 e 6 e é utilizado para definir qual tag será criada (```<h1>```, ```<h2>```, ```<h3>```, ```<h4>```, ```<h5```, ```<h6>```). É opcional. Caso seja omitido ou caso seja menor que 1 ou maior que 6 é cirado uma tag ```<h1>```. 

<div id="hgroup-func"></div>

* **```function hgroup(content)```**
  - **content** pode ser uma string, um dos objetos que representam uma das tags ```<h>``` ou uma array contendo strings e objetos. As strings são transformadas em tags ```<h1>```. Todas as tags criadas são inseridas como conteúdo da tag ```<hgroup>``` criada. 

<div id="abbr-func"></div>

* **```function abbr(text, title)```**
  - **text** deve ser uma string e será inserido como conteúdo da tag ```<abbr>``` criada. 
  - **title** deve ser uma string e seru valor será utilizado como valor da propriedade **title** da tag ```<abbr>``` cirada. 

<div id="acronym-func"></div>

* **```function acronym(text, title)```**
  - **text** deve ser uma string e será inserido como conteúdo da tag ```<acronym>``` criada. 
  - **title** deve ser uma string e seru valor será utilizado como valor da propriedade **title** da tag ```<acronym>``` cirada. 

<div id="ul-func"></div>

* **```function ul(content)```**
  - **content** pode ser uma string, um dos objetos que representam as tags ```<p>```, ```<a>```, ```<h>```, ```<hgroup>```,```<img>```,  ```<figure>```, ```<li>```, ou um array contendo strings e objetos (os que representam as tags suportadas de forma aninhada apresentados anteriormente). Os textos e tags criada (se for o caso) são inseridos como conteúdo de uma tag ```<li>```, que por sua vez é inserida como ocnteúdo da tag ```<ul>``` criada. 

<div id="ol-func"></div>

* **```function ol(content)```**
  - **content** pode ser uma string, um dos objetos que representam as tags ```<p>```, ```<a>```, ```<h>```, ```<hgroup>```,```<img>```,  ```<figure>```, ```<li>```, ou um array contendo strings e objetos (os que representam as tags suportadas de forma aninhada apresentados anteriormente). Os textos e tags criada (se for o caso) são inseridos como conteúdo de uma tag ```<li>```, que por sua vez é inserida como ocnteúdo da tag ```<ol>``` criada. 

<div id="li-func"></div>

* **```function li(content, subcontent)```**
  - **content** pode ser uma string, um dos objetos que representam as tags ```<p>```, ```<a>```, ```<h>```, ```<hgroup>```,```<img>```,  ```<figure>```, ou um array contendo strings e objetos (os que representam as tags suportadas de forma aninhada apresentados anteriormente). Os textos e tagas criadas (se for o caso) são inseridos como conteúdo das tag ```<li>``` criada. Pode ser passado como **null** caso o valor do segundo parâmetro seja específicado. 
  - **subcontent** deve ser um dos objetos que representam as tags ```<ul>```, ```<ol>```. Utilizado para criar listas encadeadas. A tag criada é inserida como conteúdo da tag ```<li>```criada. Pode ser omitido caso não se queira criar uma lista encadeada. 

<div id="figure-func"></div>

* **```function figure(img, caption)```**
  - **img** deve ser um objeto que representa a tag ```<img>```. A tag criada é inserida como conteúdo da tag ```<figure>``` criada. 
  - **caption** pode ser uma string ou um objeto que representa a tag ```<figcaption>```. Em caso de ser uma string, seu valor é inserido como conteúdo de uma tag ```<figcaption>```, que por sua vez é inserida como conteúdo da tag ```<figure>``` criada. Em caso de ser um objeto, a tag ```<figcaption>``` criada é inserida como conteúdo da tag ```<figure>``` criada. Pode ser omitido. 

<div id="img-func"></div>

* **```function img(src, alt)```**
  - **src** deve ser uma string e seu valor é utilizado como valor da propriedade **src** da tag ```<img>``` criada. 
  - **alt** deve ser uma string e seu valor é utilizado como valor da propriedade **alt** da tag ```<img>``` criada. 

<div id="figcaption-func"></div>

* **```function figcaption(text)```**
  - **text** deve ser uma string e seu valor inserido com conteúdo da tag ```<figcaption>``` criada. 

<div id="breakline-func"></div>

* **```function breakline()```**
  - Essa função não recebe argumento e retorno um bojeto que representa a tag ```<br>```. Também existe uma variável global no framework chamada **br** que já armazena um bojeto desse tipo. 

<div id="section-func"></div>

* **```function section(content)```**
  - **content** pode ser um objeto ou uma lista de objetos que representam as tags ```<br>```, ```<p>```, ```<a>```, ```<h>```, ```<hgroup>```, ```<ul>```,  ```<ol>```, ```<figure>```, ```<img>```, ```<article>```, ```<nav>```, ```<aside>```, ```<form>```, ```<button>```. As tags criadas são inseridas como conteúdo da tag ```<section>```. 

<div id="article-func"></div>

* **```function article(content)```**
  - **content** pode ser um objeto ou uma lista de objetos que representam as tags ```<br>```, ```<p>```, ```<a>```, ```<h>```, ```<hgroup>```, ```<ul>```,  ```<ol>```, ```<figure>```, ```<img>```, ```<article>```, ```<nav>```, ```<aside>```, ```<form>```, ```<button>```. As tags criadas são inseridas como conteúdo da tag ```<article>``` criada. 

<div id="nav-func"></div>

* **```function nav(content)```**
  - **content** pode ser um objeto ou uma lista de objetos que representam as tags ```<br>```, ```<a>```, ```<ul>```, ```<ol>```. As tags criadas são inseridas como conteúdo como conteúdo da tag ```<nav>``` criada. 

<div id="aside-func"></div>

* **```function aside(content)```**
  - **content** pode ser um objeto ou uma lista de objetos que representam as tags ```<br>```, ```<a>```, ```<ul>```, ```<ol>```. As tags criadas são inseridas como conteúdo como conteúdo da tag ```<aside>``` criada.  

<div id="form-func"></div>

* **```function form(action, method, inputs, enctype)```**
  - **action** deve ser uma string e seu valor é utilizado como valor da propriedade **action** da tag ```<form>``` criada.
  - **method** deve ser uma string e seu valor é utilizado como valor da propriedade **method** da tag ```<form>``` criada.
  - **inputs** deve ser um array de objetos que podem ser dos tipos que repesentam as tags ```<br>```, ```<p>```, ```<a>```, ```<h>```, ```<hgroup>```, ```<ul>```,  ```<ol>```, ```<figure>```, ```<img>```, ```<input>```, ```<select>```, ```<button>```. As tags criadas são inseridas como conteúdo da tag ```<form>``` criada. 
  - ***enctype** deve ser uma string e seu valor é utilizado como valor da propriedade **enctype** da tag ```<form>``` criada. Pode ser omitido. 

<div id="input-func"></div>

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

<div id="submit-func"></div>

* **```function submit(text)```**
  - **text** deve ser uma string e seu valor é utilizado como valor da propriedade **value** da tag ```<input type="submit">``` criada. Pode ser omitido. Seu valor padrão é **"Submit"**.

<div id="reset-func"></div>

* **```function reset(text)```**
  - **text** deve ser uma string e seu valor é utilizado como valor da propriedade **value** da tag ```<input type="reset">``` criada. Pode ser omitido. Seu valor padrão é **"Reset"**.

<div id="button-func"></div>

* **```function button(text, onclick)```**
  - **text** deve ser uma string e seu valor é inserido como conteúdo da tag ```<button>``` criada.
  - **onclick** deve ser uma string e seu valor é utilizado como valor da propriedade **onclick** da tag ```<button>``` criada. 

## Os casos select, checkbox e radio

A tag ```<select>```, e os inputs dos tipos **checkbox** e **radio** apresentam grupo de opções para que os usuário possa selecionar. No framewok essas tags possuem duas funções cada uma para a criação do que se deseja. 

### Select

<div id="select-func"></div>

* **```function select(name, options, label, required)```**
  - **name** deve ser uma string e seu valor é utilizado como valor da propriedade **name** da tag ```<select>``` criada.
  - **options** pode ser um objeto ou uma lista de objetos do tipo que representa a tag ```<otpion>```.
  - **label** deve ser uma string e caso seja passado: é criado uma tag ```<label>``` e uma tag ```<span>```; o valor do parâmetro é adicionado como conteúdo da tag ```<span>``` criada; a tag ```<span>``` é inserida como conteúdo da tag ```<label>``` criada; e a tag ```<select>``` criada também é adicionada como conteúdo da tag ```<label>```. Pode ser omitido ou passada como **null**.
  - **required** deve ser um booleano e seu valor é utilizado como valor da propriedade **required** da tag ```<select>``` criada. Pode ser omitido.

<div id="option-func"></div>

* **```function option(text, value, selected)```**
  - **text** deve ser uma string e seu valor é inserido como conteúdo da tag ```<option>``` criada. 
  - **value** pode ser uma string ou número e seu valor é utilizado como valor da propriedade **value** da tag ```<option>``` criada. 
  - **selected** deve ser um booleano e seu valor é utilizado como valor da propriedade **selected** da tag ```<option>``` criada. Pode ser omitida. 

Os objetos criados por essa função somente serão utilizados para a passagem do parâmetro **options** da função anterior que cria a tag ```<select>```. Esse objeto também pode ser substituído por um array que deve conter no mínimo dois e no máximo três valores, que devem obedecer as mesmas regras dos parâmetros da função (com relação a ordem, tipo e obrigatoriedade). 

### Checkbox

<div id="checkboxGroup-func"></div>

* **```function checkboxGroup(options)```**
  - **options** pode ser um objeto ou uma lista de objetos do tipo que representa a tag ```<input type="checkbox">```.

<div id="checkbox-func"></div>

* **```function checkbox(name, text, checked, id)```**
  - **name** deve ser uma string e seu valor é utilizado como valor da propriedade **name** da tag ```<input type="checkbox">``` criada. 
  - **text** deve ser uma string. Os seguintes passos são executados: cria-se uma tag ```<span>```; adiciona-se o valor do parâmetro como conteúdo da tag ```<span>``` criada; criate-se a tag ```<input type="checkbox">```; cria-se uma tag ```<label>```; adiciona-se as tags ```<input type="checkbox">```e ```<span>``` (nessa ordem) como conteúdos da tag ```<label>```.
  - **checked** deve ser um booleano e seu valor é utilizado como valor da propriedade **checked** da tag ```<input type="checkbox">``` criada. Pode ser omitida ou passada como **null**.
  - **id** deve ser uma string e seu valor é utilizado como valor da propriedade **id** da tag ```<input type="checkbox">``` e como valor da propriedade **for** da tag ```<label>``` criada. Pode ser omitda, e nesse caso o valor da propriedade **name** é usado em seu lugar. 

Os objetos criados por essa função somente serão utilizados para a passagem do parâmetro **options** da função anterior. Esse objeto também pode ser substituído por um array que deve conter no mínimo três e no máximo quatro valores, que devem obedecer as mesmas regras dos parâmetros da função (com relação a ordem, tipo e obrigatoriedade). 

### Radio

<div id="radioGroup-func"></div>

* **```function radioGroup(name, options)```**
  - **name** deve ser uma string e seu valor é utilizado como valor da propriedade **name** das tags ```<input type="radio">``` criadas. 
  - **options** pode ser um objeto ou uma lista de objetos do tipo que representa a tag ```<input type="radio">```.

<div id="radio-func"></div>

* **```function radio(text, value, id, checked)```** 
  - **text** deve ser uma string. Os seguintes passos são executados: cria-se uma tag ```<span>```; adiciona-se o valor do parâmetro como conteúdo da tag ```<span>``` criada; criate-se a tag ```<input type="radio">```; cria-se uma tag ```<label>```; adiciona-se as tags ```<input type="radio">```e ```<span>``` (nessa ordem) como conteúdos da tag ```<label>```.
  - **value** pode ser uma string ou número e seu valor é utilizado como valor da propriedade **value** da tag ```<input type="radio">``` criada.
  - **id** deve ser uma string e seu valor é utilizado como valor da propriedade **id** da tag ```<input type="radio">``` e como valor da propriedade **for** da tag ```<label>``` criada.
  - **checked** deve ser um booleano e seu valor é utilizado como valor da propriedade **checked** da tag ```<input type="checkbox">``` criada. Pode ser omitida.

Os objetos criados por essa função somente serão utilizados para a passagem do parâmetro **options** da função anterior. Esse objeto também pode ser substituído por um array que deve conter no mínimo três e no máximo quatro valores, que devem obedecer as mesmas regras dos parâmetros da função (com relação a ordem, tipo e obrigatoriedade). 

## Menu

O framework também disponibiliza uma função que retorna um objeto para a criação de um menu de navegação.

Esse componente possui ajuste automático de layout quando sendo utilizado em telas menores que 800 pixels. O layout assumido para esse tamnho é colocar as opções de menu uma em baixo da outra. Também é criado um botão no topo do menu que permite mostrar e esconder as opções. 

### ```function menu(items) ou mn(items)```

A função ```mn``` é uma maneira mais prática de se criar o bojeto que presenta o menu, mas sua implementação é exatamente a mesma da função ```menu```.

* **items** pode ser um objeto ou um array de objetos do tipo item de menu. 

### ```function menuItem(text, link, icon, subitems)``` ou ```mi(text, link, icon, subitems)```

A função ```mi``` é uma maneira mais prática de se criar o objeto que representa um item de menu, mas sua impelmentação é exatamente a mesma da função ```menuItem```. 

* **text** deve ser uma string e seu valor é utilizado como nome da exibido para a opção de menu correspondente.

* **link** deve ser uma string e seu valor para redirecionar o usuário para o local desejado quando a opção correspondente for selecionada.

* **icon** deve ser uma string e é usado para adicionar um ícone ao lado do nome da opção de menu correspondente. Pode ser omitido ou passado como **null**.

* **subitems** deve ser uma lista de objetos do tipo item de menu que serão utilizados como sub opções da opção de menu correspondente. 

Para ver a estrutura das tags criadas execute o exemplo presente no repositório. 

## Acessibilidade 

O presente framework foi desenvolvido pensando em disponnibilizar páginas web acessiveis para usuário que fazem a navegação através do teclado ou por leitores de tela. Pensando nisso, há duas características podem ser observadas: 

1. As tags semânticas do HTML5 são utilizadas sempre que possível, sendo raro a utilização da tag ```<div>```. 

2. O componente ```menu``` possui acessibilidade para navegação com uso de teclado de acordo com especícações do padrão WAI-ARIA criado pela W3C. Além disso, o mesmo componente também faz utilização de outras propriedade do WAI-ARIA, como por exemplo a propriedade ```expanded``` que possibilita para os leitores de tela identificar se uma opção que possui sub items está exibindo as sub opções disponíveis (o que signficaria dizer para um usuário que não utiliza o leitor de tela que o menu está aberto ou fechado). 

## Notas

O framework ainda está em fase de teste e desenvolvimento, por isso, erros podem ocorrer. Além disso ainda há muito trabalho para ser feito, tanto com relação ao suporte as tags HTML existente quanto ao suporte a acessibilidade. 