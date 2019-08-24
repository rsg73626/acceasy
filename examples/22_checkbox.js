
function getMainObjects() { 

    const simpleOption = checkbox('checkbox-option-1-name', 'Option 1')
    const selectedOption = checkbox('checkbox-option-2-name', 'Option 2', true)
    const optionWithId = checkbox('checkbox-option-3-name', 'Option 3', false, 'checkbox-option-id')

    const simpleOptionWithArray = ['checkbox-option-4-name', 'Option 4']
    const selectedOptionWithArray = ['checkbox-option-5-name', 'Option 5', true]
    const optionWithIdWithArray = ['checkbox-option-6-name', 'Option 6', false, 'checkbox-option-id']

    const checkbox1 = checkboxGroup(simpleOption, 'Checkbox 1') 
    const checkbox2 = checkboxGroup([simpleOption, selectedOption, optionWithId, 
                                     simpleOptionWithArray, selectedOptionWithArray, optionWithIdWithArray])

    const formTag = form('#', 'GET', [checkbox1, checkbox2, submit()])

    return [h('checkbox'), formTag]
}