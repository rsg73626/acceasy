
function getMainObjects() { 
    
    const image = img('./img.png', 'An icon with the image of two template images.')
    const caption = figcaption('Caption')
    
    const figure1 = figure(image, 'Caption 2')
    const figure2 = figure(image, caption)
    
    return [h('<figure>'), figure1, figure2] 
}