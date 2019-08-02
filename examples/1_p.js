
function getMainObjects() { 

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

    const p8 = p(['text 1 ', 'text 2 ', 'text 3 ', iTag, spanTag, aTag, abbrTag, acronymTag])

    return [h('<p>'), p1, p2, p3, p4, p5, p6, p7, p8]

}