
function getMainObjects() { 

    const ol1 = ol('Simple ol with only a option')
    const ol2 = ol(['ol option 1', 'ol option 2', 'ol option 3'])

    const pTag = p('paragraph')
    const aTag = a('link', '#')
    const hTag = h('H1 text')
    const hgroupTag = hgroup(['First H1', 'Second H1', 'Third H1'])
    const imgTag = img('./img.png', 'An icon with the image of two template images.')
    const figureTag = figure(imgTag, 'Fig caption caption example.')
    const ulTag = ul(['Sub item 1', 'Sub item 2', 'Sub item 3'])
    const liTag = li('Simple <li>')
    const liTag2 = li('<li> with sub list <ul>', ulTag)
    const liTag3 = li('<li> with sub list <ol>', ol1)

    const ol3 = ol(pTag)
    const ol4 = ol(aTag)
    const ol5 = ol(hTag)
    const ol6 = ol(hgroupTag)
    const ol7 = ol(imgTag)
    const ol8 = ol(figureTag)
    const ol9 = ol(ulTag)
    const ol10 = ol(liTag)
    const ol11 = ol(liTag2)
    const ol12 = ol(liTag3)
    
    const ol13 = ol(['text', pTag, aTag, hTag, hgroupTag, imgTag, figureTag, ulTag, liTag, liTag2, liTag3])

    return [h('<ol>'), ol1, ol2, ol3, ol4, ol5, ol6, ol7, ol8, ol9, ol10, ol11, ol12, ol13] 
}