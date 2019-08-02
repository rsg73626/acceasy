
function getMainObjects() { 
    
    const menuItem1 = mi('Option 1', '#')
    const menuItem2 = mi('Option 2', '#')
    const menuItem3 = menuItem('Option 3', '#')
    const menuItem4 = menuItem('Option 4', '#')
    const simpleMenu = mn([menuItem1, menuItem2, menuItem3, menuItem4])

    const menuItemWithIcon1 = mi('Option 1', '#', 'fa fa-home fa-lg')
    const menuItemWithIcon2 = mi('Option 2', '#', 'fa fa-info fa-lg')
    const menuItemWithIcon3 = menuItem('Option 3', '#', 'fa fa-handshake-o fa-lg')
    const menuItemWithIcon4 = menuItem('Option 4', '#', 'fa fa-smile-o')
    const simpleMenuWithIcon = menu([menuItemWithIcon1, menuItemWithIcon2, menuItemWithIcon3, menuItemWithIcon4])

    const simpleMenuWithIconsAtRight = mn([menuItemWithIcon1, menuItemWithIcon2, menuItemWithIcon3, menuItemWithIcon4])
    simpleMenuWithIconsAtRight.icon_side = right

    const menuSubItem1 = mi('Sub option 1', '#')
    const menuSubItem2 = mi('Sub option 2', '#')
    const menuSubItem3 = mi('Sub option 3', '#')
    const menuItemWithSubOptions = mi('Option with sub options', '#', null, [menuSubItem1, menuSubItem2, menuSubItem3])
    const simpleMenuWithSubOptions = mn([menuItem1, menuItem2, menuItem3, menuItemWithSubOptions])
    
    const simpleMenuWithSubOptionsShowingSuboptionsIcon = mn([menuItem1, menuItem2, menuItem3, menuItemWithSubOptions])
    simpleMenuWithSubOptionsShowingSuboptionsIcon.suboptions_icon = true

    const menuSubItem1WithIcon = mi('Sub option 1', '#', 'fa fa-home fa-lg')
    const menuItemWithSubOptionsAndIcon = mi('Option with sub options', '#', 'fa fa-smile-o', [menuSubItem1WithIcon, menuSubItem2, menuSubItem3])
    const simpleMenuWithIconAndSubOptions = menu([menuItemWithIcon1, menuItemWithIcon2, menuItemWithIcon3, menuItemWithSubOptionsAndIcon])
    simpleMenuWithIconAndSubOptions.suboptions_icon = true

    const simpleMenuWithIconsAtRightAndSubOptions = menu([menuItemWithIcon1, menuItemWithIcon2, menuItemWithIcon3, menuItemWithSubOptionsAndIcon])
    simpleMenuWithIconsAtRightAndSubOptions.suboptions_icon = true
    simpleMenuWithIconsAtRightAndSubOptions.icon_side = right

    const mediumMenu = mn([menuItem1, menuItem2, menuItem3, menuItem4])
    mediumMenu.size = menu_medium

    const largeMenu = mn([menuItem1, menuItem2, menuItem3, menuItem4])
    largeMenu.size = menu_large

    const extraLargeMenu = mn([menuItem1, menuItem2, menuItem3, menuItem4])
    extraLargeMenu.size = menu_extra_large

    const extraExtraLargeMenu = mn([menuItem1, menuItem2, menuItem3, menuItem4])
    extraExtraLargeMenu.size = menu_extra_extra_large

    return [h('menu'), simpleMenu, br, 
            simpleMenuWithIcon, br, 
            simpleMenuWithIconsAtRight, br,
            simpleMenuWithSubOptions, br,
            simpleMenuWithSubOptionsShowingSuboptionsIcon, br, 
            simpleMenuWithIconAndSubOptions, br, 
            simpleMenuWithIconsAtRightAndSubOptions, br, 
            mediumMenu, br, 
            largeMenu, br, 
            extraLargeMenu, br, 
            extraExtraLargeMenu]
}