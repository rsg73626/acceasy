
function getMainObjects() { 

    const i1 = i('i text')
    const i2 = i('i text', null)
    const i3 = i('i text', 'i-class-1 i-class-2 i-class-3')
    const i4 = i(null, 'i-class-1 i-class-2 i-class-3')

    return [h('<i>'), i1, i2, i3, i4] 
}