
function getMainObjects() { 
    
    const div = tag('div', 'This is a div')
    
    const tableHead = tag('tr', [ tag('th', 'Firstname'), tag('th', 'Lastname'), tag('th', 'Age') ])
    const tableLine1 = tag('tr', [ tag('td', 'Jill'), tag('td', 'Smith'), tag('td', 50) ])
    const tableLine2 = tag('tr', [ tag('td', 'Eve'), tag('td', 'Jackson'), tag('td', 94) ])
    const table = tag('table', [tableHead, tableLine1, tableLine2])
    table.style = 'width: 300px;'

    const list = tag('ul', [ tag('li', 'item 1'), tag('li', 'item 2'), tag('li', 'item 3') ])

    return [div, table, list]

}