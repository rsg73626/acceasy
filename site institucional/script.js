
const textDescricaoSiteCia = 'Na Site e CIA você encontra os melhores serviços tecnológicos para a sua empresa, com Confiança, Integridade e Agilidade. Faça já um orçamento.'
const textQuemSomos = 'Somos a maior consultoria de toda a américa latina, estando presente em todo o continente, oferecemos os melhores serivços do mercado, sobre demanda e personalizado.'
const textMissao = 'Ser a maior consultoria do mundo inteiro e poder levar a qualidade dos nossos produtos e serviços para todos.'

function didStartSetup() {
    /* 
    Replace this implementation for any action you want to perform 
    before the framework execution.
    */
   print(' *** DID START SETUP *** ')
}

function getHeaderObjects() {
    const inicio = mi('Inicio', '#inicio')
    const sobre = mi('Sobre', '#sobre')
    const servicos = mi('Serviços', '#servicos')
    const contato = mi('Contato', '#contato')
    const menuNavegacao = mn([inicio, sobre, servicos, contato])
    menuNavegacao.size = menu_extra_large
    menuNavegacao.id = 'menu'
    return [menuNavegacao]
}

function getMainObjects() { 

    function inicioArticle() {
        const imgSiteCia = img('site-e-cia.png', 'Logo do site.')
        const tituloSubtituloSiteCia = hgroup([h('Site & CIA', 2), 
                                               h('Confiança Integridade Agilidade ', 3)])
        const descriçãoSiteCia = p(textDescricaoSiteCia)
        const inicio = article([imgSiteCia, tituloSubtituloSiteCia, descriçãoSiteCia])
        inicio.id = 'inicio'
        return inicio
    }

    function sobreArticle() {
        const tituloQuemSomos = h('Quem Somos?', 3)
        const descricaoQuemSomos = p(textQuemSomos)
        const tituloMissao = h('Qual nossa missão?', 3)
        const descricaoMissao = p(textMissao)
        const tituloValores = h('Qual nossos valores?', 3)
        const descricaoValores = ul(['Confiança', 'Agilidade', 'Integridade'])
        const conteudoSobre = [ h('Sobre'), 
                                tituloQuemSomos, descricaoQuemSomos, 
                                tituloMissao, descricaoMissao, 
                                tituloValores, descricaoValores ]
        const sobre = article(conteudoSobre)
        sobre.id = 'sobre'
        return sobre
    }

    function servicosArticle() {
        const descricaoServico = 'Com este serviço você aumentará muito os lucros da sua empresa.'
        const figureServico1 = figure(img('servico1.png', 'Imagem do serviço 1.'), descricaoServico)
        const figureServico2 = figure(img('servico2.png', 'Imagem do serviço 2.'), descricaoServico)
        const figureServico3 = figure(img('servico3.png', 'Imagem do serviço 3.'), descricaoServico)
        const listaServicos = ul([figureServico1, figureServico2, figureServico3])
        const servicos = article([h('Serviços'), listaServicos])
        servicos.id = 'servicos'
        return servicos
    }

    function contatoArticle() {
        const nome = textInput('nome', 'Nome: ', 'insira seu nome', true)
        const sobrenome = textInput('sobrenome', 'Sobrenome: ', 'insira seu sobrenome', true)
        const email = emailInput('email', 'Email: ', 'insira seu e-mail', true)
        const telefone = telInput('telefone', 'Telefone: ', 'insira seu telefone')
        const mensagem = textInput('mensagem', 'Mensagem: ', 'insira sua mensagem', true)
        const enviar = submit('Enviar')
        const limpar = reset('Limpar')
        const inputs = [nome, sobrenome, email, telefone, mensagem, enviar, limpar]
        const formularioContato = form('#', 'POST', inputs)
        formularioContato.grid = [[0, 1], [2, 3], 4, [5, 6]]
        const descricaoContato = p('Deixe seus dados e a mensagem desejada que entraremos em contato.')
        const contato = article([h('Contato'), descricaoContato, formularioContato])
        contato.id = 'contato'
        return contato
    }

    const conteudoPrincipal = [inicioArticle(), sobreArticle(), 
                               servicosArticle(), contatoArticle()]
    const principal = section(conteudoPrincipal)
    principal.id = 'principal'
    return [principal]
}

function getFooterObjects() {
    const facebook = a('Facebook', 'https://web.facebook.com')
    const instagram = a('Instagram', 'https://www.instagram.com')
    const linkedin = a('Linkedin', 'https://www.linkedin.com')
    const copyright = span('Todos os direitos reservados.')
    return [ul([facebook, instagram, linkedin]), copyright]
}

function getMenuColors() {
    const laranja = 'rgb(255,140,0)'
    const branco = 'white'
    const coral = 'rgb(210,105,30)'
    const colors = menuColors([
        laranja, branco,
        coral, branco
    ])
    return [colors]
}

function didEndSetup() {
 /* 
    Replace this implementation for any action you want to perform 
    after the framework finished running.
    */
   print(' *** DID END SETUP *** ')
}