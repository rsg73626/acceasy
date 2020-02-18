
function getMainObjects() { 
    
    const simpleRadio = radio('Radio 1', 'value-1', 'radio-1-id')
    const selectedRadio = radio('Radio 2', 'value-2', 'radio-2-id', true)

    const simpleRadioWithArray = ['Radio 1', 'value-1', 'radio-1-id']
    const selectedRadioWithArray = ['Radio 2', 'value-2', 'radio-2-id', true]

    const radio1 = radioGroup('radio-group-1-name', simpleRadio)
    const radio2 = radioGroup('radio-group-2-name', [simpleRadio, selectedRadio, simpleRadioWithArray, selectedRadioWithArray], 'Radio label')

    const radio3 = radioGroup('radio-group-3-name', [simpleRadio, selectedRadio])
    radio3.container = false

    const radio4 = radioGroup('radio-group-4-name', [simpleRadio, selectedRadio])
    radio4.container = true
    radio4.container_alignment = column

    const formTag = form('#', 'GET', [radio1, radio2, radio3, radio4, submit()])

    return [h('radio'), formTag]
}