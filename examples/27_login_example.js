
function getMainObjects() { 
    
    const inputEmail = emailInput('email', 'E-mail: ', 'enter e-mail')
    const inputPass = passwordInput('password', 'Senha: ', 'enter password')
    const forgotPassword = a('Recover Password', 'www.fakehost.com/recover-pass') 

    const enter = submit('Enter')
    const clear = reset('Clear')

    const formInputs = [inputEmail, inputPass, forgotPassword, enter, clear]
    const loginForm = form('www.fakehost.com/login', 'POST', formInputs)
    loginForm.style = 'width: 300px; margin: 20px;'
    loginForm.grid = [0, 1, 2, [3, 4]]

    return [loginForm]

}