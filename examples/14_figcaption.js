
function getMainObjects() { 
    
    const image = img('./img.png', 'An icon with the image of two template images.')
    const caption = figcaption('Figure caption')
    const fig = figure(image, caption)
    
    return [h('<figcaption>'), fig] 
}