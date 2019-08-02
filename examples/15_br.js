
function getMainObjects() { 
    
    const br1 = breakline()
    const br2 = br
    const sectionTag = section([button('button one', 'window.alert("button one tapped")'), br1, 
                                button('button two', 'window.alert("button two tapped")'), br2, 
                                button('button three', 'window.alert("button three tapped")'), br, 
                                button('button four', 'window.alert("button four tapped")')])
    
    return [h('<br>'), sectionTag] 
}