
function getMainObjects() { 
    
    const registerTitle = h('Register <form>')
    const name = textInput('name', 'Name: ', 'enter your name', true)
    const surname = textInput('surname', 'Surname: ', 'enter your surname', true)
    const birth = dateInput('birth', 'Birth date: ', 'select your birth date', true)
    const height = select('height', [['Tall', 1, true], ['Medium', 2], ['Small', 3]], 'Height: ')
    const weight = numberInput('weight', 'Weight: ', true)
    const registerInputs = [registerTitle, name, surname, birth, height, weight, submit(), reset()]
    
    const registerForm = form('#', 'POST', registerInputs)
    registerForm.label_alignment = up
    registerForm.id = 'register-form'
    registerForm.style = 'width: 300px; margin: 10px;'

    registerForm.grid = [
        0, 1, 2, 3, [4, 5], [6, 7]
    ]

    const menuFormTitle = h('Menu <form>')
    
    const menuFormInputs = [menuFormTitle]

    const menuForm = form('#', 'POST', menuFormInputs)

    return [registerForm, menuForm]

}