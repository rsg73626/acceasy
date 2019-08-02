
function getMainObjects() { 

    const ul1 = ul('Simple ul with only a option')
    const ul2 = ul(['ul option 1', 'ul option 2', 'ul option 3'])

    const pTag = p('paragraph')
    const aTag = a('link', '#')
    const hTag = h('H1 text')
    const hgroupTag = hgroup(['First H1', 'Second H1', 'Third H1'])
    const imgTag = img('./img.png', 'An icon with the image of two template images.')
    const figureTag = figure(imgTag, 'Fig caption caption example.')
    const olTag = ol(['Sub item 1', 'Sub item 2', 'Sub item 3'])
    const liTag = li('Simple <li>')
    const liTag2 = li('<li> with sub list <ol>', olTag)
    const liTag3 = li('<li> with sub list <ul>', ul1)

    const ul3 = ul(pTag)
    const ul4 = ul(aTag)
    const ul5 = ul(hTag)
    const ul6 = ul(hgroupTag)
    const ul7 = ul(imgTag)
    const ul8 = ul(figureTag)
    const ul9 = ul(olTag)
    const ul10 = ul(liTag)
    const ul11 = ul(liTag2)
    const ul12 = ul(liTag3)
    
    const ul13 = ul(['text', pTag, aTag, hTag, hgroupTag, imgTag, figureTag, olTag, liTag, liTag2, liTag3])

    return [h('<ul>'), ul1, ul2, ul3, ul4, ul5, ul6, ul7, ul8, ul9, ul10, ul11, ul12, ul13] 
}