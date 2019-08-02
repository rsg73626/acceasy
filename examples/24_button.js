
function getMainObjects() { 
    
    const button1= button('Button 1', 'window.alert("Button 1 onClick() action.")')

    const smallButton = button('Small Button', 'window.alert("Small Button onClick() action.")')
    smallButton.button_size = button_small

    const mediumButton = button('Medium Button', 'window.alert("Medium Button onClick() action.")')
    mediumButton.button_size = button_medium

    const largeButton = button('Large Button', 'window.alert("Large Button onClick() action.")')
    largeButton.button_size = button_large

    const extraLargeButton = button('Extra Large Button', 'window.alert("Extra Large Button onClick() action.")')
    extraLargeButton.button_size = button_extra_large

    const extraExtraLargeButton = button('Extra Extra Large Button', 'window.alert("Extra Extra Large Button onClick() action.")')
    extraExtraLargeButton.button_size = button_extra_extra_large

    return [h('<button>'), button1, br, br, 
            smallButton, br, br, 
            mediumButton, br, br, 
            largeButton, br, br,
            extraLargeButton, br, br, 
            extraExtraLargeButton]
}