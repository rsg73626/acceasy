
function getMainObjects() { 

    const aTag1 = a('link 1', '#')
    const aTag2 = a('link 2', '#')
    const aTag3 = a('link 3', '#')
    const ulTag = ul([aTag1, aTag2, aTag3])
    const olTag = ol([aTag1, aTag2, aTag3])

    const nav1 = nav(aTag1)
    const nav2 = nav([aTag1, aTag2, aTag3])
    const nav3 = nav(ulTag)
    const nav4 = nav(olTag)
    const nav5 = nav([aTag1, aTag2, aTag3, ulTag, olTag])

    return [h('<nav>'), nav1, nav2, nav3, nav4, nav5]
    
}