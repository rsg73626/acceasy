
function getMainObjects() { 

    const emailInputTag = emailInput('email', 'E-mail: ', 'enter your e-mail', true)
    const passwordInputTag = passwordInput('password', 'Password', 'enter your password', true)
    const submitInputTag = submit('ENTER')
    const form1 = form('#', 'POST', [emailInputTag, passwordInputTag, submitInputTag])

    const fileInputTag = fileInput('file', 'Select file: ', 'select file', true)

    const form2 = form('#', 'POST', [fileInputTag, submit()], 'multipart/form-data')

    return [h('<form>'), form1, br,  form2]
    
}