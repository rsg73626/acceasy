
function getMainObjects() { 

    const hgroupa = hgroup('H1 text')
    const hgroupb = hgroup(['H1 text', 'H1 text', 'H1 text'])

    const h1 = h('H1', 1)
    const h2 = h('H2', 2)
    const h3 = h('H3', 3)
    const h4 = h('H4', 4)
    const h5 = h('H5', 5)
    const h6 = h('H6', 6)

    const hgroupc = hgroup(h1)
    const hgroupd = hgroup(h2)
    const hgroupe = hgroup(h3)
    const hgroupf = hgroup(h4)
    const hgroupg = hgroup(h5)
    const hgrouph = hgroup(h6)

    const hgroupi = hgroup(['H1', h1, h2, h3, h4, h5, h6])

    return [h('<hgroup>'), hgroupa, hgroupb, hgroupc, hgroupd, hgroupe, hgroupf, hgroupg, hgrouph, hgroupi] 
}