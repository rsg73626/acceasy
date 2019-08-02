
function getMainObjects() { 
    
    const simpleOption = option('Option 1', 'option-1-value')
    const selectedOption = option('Option 2', 'option-2-value', true)
    
    const simpleOPtionWithArray = ['Option 3', 'option-3-value']
    const selectedOptionWithArray = ['Option 4', 'option-4-value', true]

    const select1 = select('select-1-name', simpleOption)
    const select2 = select('select-2-name', simpleOption, 'Select 2: ')
    const select3 = select('select-3-name', simpleOption, 'Select 3 required: ', true)
    const select4 = select('select-4-name', [simpleOption, selectedOption, simpleOPtionWithArray, selectedOptionWithArray])

    const formTag = form('#', 'GET', [select1, select2, select3, select4, submit()])

    return [h('<select>'), formTag]
}