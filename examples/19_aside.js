
function getMainObjects() { 

    const aTag1 = a('link 1', '#')
    const aTag2 = a('link 2', '#')
    const aTag3 = a('link 3', '#')
    const ulTag = ul([aTag1, aTag2, aTag3])
    const olTag = ol([aTag1, aTag2, aTag3])

    const aside1 = aside(aTag1)
    const aside2 = aside([aTag1, aTag2, aTag3])
    const aside3 = aside(ulTag)
    const aside4 = aside(olTag)
    const aside5 = aside([aTag1, aTag2, aTag3, ulTag, olTag])

    return [h('<aside>'), aside1, aside2, aside3, aside4, aside5]
    
}