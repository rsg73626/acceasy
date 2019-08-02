
function getMainObjects() { 
    
    const brTag = br
    const pTag = p('Paragraph ')
    const aTag = a('link', '#')
    const hTag = h('H1 text')
    const hgroupTag = hgroup(['h1', 'h1', 'h1'])
    const ulTag = ul(['li 1', 'li 2', 'li 3'])
    const olTag = ol(['li 1', 'li 2', 'li 3'])
    const imgTag = img('./img.png', 'alt text')
    const figureTag = figure(imgTag, 'caption')
    const articleTag = article(p('<p> inside <article>'))
    const navTag = nav([a('link 1', '#'), a('link 2', '#'), a('link 3', '#')])
    const asideTag = aside([a('link 1', '#'), a('link 2', '#'), a('link 3', '#')])
    const formTag = form('#', 'GET', [textInput('name'), submit(), reset()])
    const buttonTag = button('Button', 'window.alert("did click button")')

    const section1 = section(brTag)
    const section2 = section(pTag)
    const section3 = section(aTag)
    const section4 = section(hTag)
    const section5 = section(hgroupTag)
    const section6 = section(ulTag)
    const section7 = section(olTag)
    const section8 = section(imgTag)
    const section9 = section(figureTag)
    const section10 = section(articleTag)
    const section11 = section(navTag)
    const section12 = section(asideTag)
    const section13 = section(formTag)
    const section14 = section(buttonTag)
    const section15 = section([pTag, br, aTag, hTag, hgroupTag, ulTag, olTag, imgTag, figureTag, articleTag, navTag, asideTag, formTag, buttonTag])
    
    return [h('<section>'), section1, section2, section3, section4, section5, section6, section7, section8, section9, section10, section11, section12, section13, section14, section15]
}