
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
    const navTag = nav([a('link 1', '#'), a('link 2', '#'), a('link 3', '#')])
    const asideTag = aside([a('link 1', '#'), a('link 2', '#'), a('link 3', '#')])
    const formTag = form('#', 'GET', [textInput('name'), submit(), reset()])
    const buttonTag = button('Button', 'window.alert("did click button")')

    const article1 = article(brTag)
    const article2 = article(pTag)
    const article3 = article(aTag)
    const article4 = article(hTag)
    const article5 = article(hgroupTag)
    const article6 = article(ulTag)
    const article7 = article(olTag)
    const article8 = article(imgTag)
    const article9 = article(figureTag)
    const article10 = article(navTag)
    const article11 = article(asideTag)
    const article12 = article(formTag)
    const article13 = article(buttonTag)
    const article14 = article([pTag, br, aTag, hTag, hgroupTag, ulTag, olTag, imgTag, figureTag, navTag, asideTag, formTag, buttonTag])

    const sectionTag = section([article1, article2, article3, article4, article5, article6, article7, article8, article9, article10, article11, article12, article13, article14])
    
    return [h('<article>'), sectionTag]
}