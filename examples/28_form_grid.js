
function getMainObjects() { 

    /* REGISTER FORM */
    
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

    /* FORM WITH RADIOS AND CHECKBOXES */

    const transportMediums = checkboxGroup([ ['train', 'Train'], 
                                             ['bus', 'Bus'], 
                                             ['subway', 'Subway'], 
                                             ['bike', 'Bike'] ],  
                                            'Which of these do you use? ')
    transportMediums.container_alignment = line
    transportMediums.style = 'display: flex; flex-direction: row;'

    const ratingOptions = [ ['1', '1', 'r1', false],
                            ['2', '2', 'r2', false],
                            ['3', '3', 'r3', false],
                            ['4', '4', 'r4', false],
                            ['5', '5', 'r5', false] ]

    const trainRating = radioGroup('train-rating', ratingOptions, 'Train')
    trainRating.container_alignment = column

    const busRating = radioGroup('bus-rating', ratingOptions, 'Bus')
    busRating.container_alignment = column

    const subwayRating = radioGroup('subway-rating', ratingOptions, 'Subway')
    subwayRating.container_alignment = column

    const bikeRating = radioGroup('bike-rating', ratingOptions, 'Bike')
    bikeRating.container_alignment = column

    const transportRatingForm = form('#', 'POST', [
        h('Public Transport Rating'),
        transportMediums,
        h('Avaliate the quality of each one', 5),
        trainRating, busRating, subwayRating, bikeRating
    ])

    transportRatingForm.grid = [
        0, 1, 2, [3, 4, 5, 6]
    ]


    return [registerForm, transportRatingForm]

}