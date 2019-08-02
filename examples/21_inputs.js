
function getMainObjects() { 

    const simpleInput = input(_text, 'input-name')
    const simpleInput2 = textInput('input-name-2') // only the name parameter is required for all input types

    const inputText = input(_text, 'text', 'Input Text: ', 'insert a text', true)
    const inputText2 = textInput('text-2', 'Input Text 2: ', 'insert a text', true)

    const inputNumber = input(_number, 'number', 'Input Number: ', 'insert a number', true)
    const inputNumber2 = numberInput('number-2', 'Input Number 2: ', 'insert a number', true)

    const inputTel = input(_tel, 'tel', 'Input Tel: ', 'insert a telephone', true)
    const inputTel2 = telInput('tel-2', 'Input Tel 2: ', 'insert a telephone', true)

    const inputEmail = input(_email, 'email', 'Input E-mail: ', 'insert a e-mail', true)
    const inputEmail2 = emailInput('email-2', 'Input E-mail 2: ', 'insert a e-mail', true)

    const inputDate = input(_date, 'date', 'Input Date: ', 'insert a date', true)
    const inputDate2 = dateInput('date-2', 'Input Date 2: ', 'insert a date', true)

    const inputPassword = input(_password, 'password', 'Input Password: ', 'insert a password', true)
    const inputPassword2 = passwordInput('password-2', 'Input Password 2: ', 'insert a password', true)

    const inputFile = input(_file, 'file', 'Input File: ', 'insert a file', true)
    const inputFile2 = fileInput('file-2', 'Input File 2: ', 'insert a file', true)

    const inputSubmit = submit()
    const inputSubmit2 = submit('PERSONALIZED SUBMIT')

    const inputReset = reset()
    const inputReset2 = reset('PERSONALIZED RESET')

    const inputs = [simpleInput, simpleInput2,
                    inputText, inputText2, 
                    inputNumber, inputNumber2, 
                    inputTel, inputTel2, 
                    inputEmail, inputEmail2,
                    inputDate, inputDate2,
                    inputPassword, inputPassword2,
                    inputFile, inputFile2,
                    inputSubmit, inputSubmit2,
                    inputReset, inputReset2]
    const formTag = form('#', 'GET', inputs, 'multipart/form-data')
    formTag.grid = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
    formTag.label_alignment = left

    return [h('<input>'), formTag]

}