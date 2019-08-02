
function getMainObjects() { 

    const string = 'string'
    const pTag = p('paragraph')
    const aTag = a('link', '#')
    const hTag = h('H1 text')
    const hgroupTag = hgroup(['First H1', 'Second H1', 'Third H1'])
    const imgTag = img('./img.png', 'An icon with the image of two template images.')
    const figureTag = figure(imgTag, 'Fig caption caption example.')
    const ulTag = ul(['Sub item 1', 'Sub item 2', 'Sub item 3'])
    const olTag = ol(['Sub item 1', 'Sub item 2', 'Sub item 3'])

    const li1 = string
    const li2 = li(string)
    const li3 = li(pTag)
    const li4 = li(aTag)
    const li5 = li(hTag)
    const li6 = li(hgroupTag)
    const li7 = li(imgTag)
    const li8 = li(figureTag)
    const li9 = li('<li> with sub list <ul>', ulTag)
    const li10 = li('<li> with sub list <ol>', olTag)
    const li11 = li(ulTag)
    const li12 = li(olTag)

    const list = ul([li1, li2, li3, li4, li5, li6, li7, li8, li9, li10, li11, li12])

    return [h('<li>'), list] 
}