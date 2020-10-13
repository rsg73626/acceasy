
function getMainObjects() { 

    const a1 = a('link', '#')

    const image = img('./img.png', 'An icon with the image of two template images.')
    const caption = figcaption('Caption')
    const figure1 = figure(image, 'Caption 2')
    const figure2 = figure(image, caption)
    const p1 = p('text')
    const p2 = p(['text 1 ', 'text 2 ', 'text 3 '])

    const iTag = i('icon text ', 'icon-class-1 icon-class-2')
    const spanTag = span('span text ')
    const aTag = a('link ', '#')
    const abbrTag = abbr('abbr ', 'abreviation')
    const acronymTag = acronym('HTML ', 'Hiper Text Markup Language')

    const p3 = p(iTag)
    const p4 = p(spanTag)
    const p5 = p(aTag)
    const p6 = p(abbrTag)
    const p7 = p(acronymTag)

    const a2 = a(image, '#')
    const a3 = a(figure1, '#')
    const a4 = a(figure2, '#')
    const a5 = a(p1, '#')
    const a6 = a(p2, '#')
    const a7 = a(spanTag, '#')
    const a8 = a(p3, '#')
    const a9 = a(p4, '#')
    const a10 = a(p5, '#')
    const a11 = a(p6, '#')
    const a12 = a(p7, '#')
    const a13 = a(['link', image, figure1, figure2, p1, p2, spanTag, p3, p4, p5, p6, p7], '#')

    return [h('<a>'), a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13] 
}