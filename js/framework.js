
/* - - - - - - - - - - Error variables - - - - - - - - - - */

// const NAV_ERROR_B = 'The function nav requires a list of objets or a single objetc of types: <a>, <ul> ou <ol>.'
// const ASIDE_ERROR_B = 'The function aside requires a list of objets or a single objetc of types: <a>, <ul> ou <ol>.'
// const P_ERROR_B = 'The function p requires a string or a list of items of types: string, <i>, <span>, <a>, <abbr>, <acronym>.'
// const A_ERROR_B = 'The function a requires the parameters text (string) and link (string).'
// const H_ERROR_B = 'The function h requires the parameter text (string).'
// const HGROUP_ERROR_B = 'The function hgroup requires a single string, or a single object, or a list of items of types: string, <h>.'



/* - - - - - - - - - - Theme variables - - - - - - - - - - */

const _menu_colors_ = -1

/* - - - - - - - - - - Component types - - - - - - - - - - */

/* Text component types */

const _p_ = 0
const _i_ = 1
const _span_ = 2
const _a_ = 3
const _h_ = 4
const _hgroup_ = 5
const _abbr_ = 6
const _acronym_ = 7

/* List component types */

const _ul_ = 8
const _ol_ = 9
const _li_ = 10

/* Image component types */

const _figure_ = 11
const _img_ = 12
const _figcaption_ = 13

/* Structure component types */

const _br_ = 14
const _section_ = 15
const _article_ = 16
const _nav_ = 17
const _aside_ = 18

/* Form component types */

const _form_ = 19
const _input_ = 20
const _checkbox_ = 21
const _radio_ = 22
const _button_ = 23
const _select_ = 24

/* - Menu  - */

const _menu_ = 25

/* Input types */

const _text = 'text'
const _number = 'number'
const _tel = 'tel'
const _email = 'email'
const _date = 'date'
const _submit = 'submit'
const _reset = 'reset'
const _password = 'password'
const _file = 'file'

/* Custom components */

const menu_small = 'menu-small'
const menu_medium = 'menu-medium'
const menu_large = 'menu-large'
const menu_extra_large = 'menu-extra-large'
const menu_extra_extra_large = 'menu-extra-extra-large'
const right = 'right'
const left = 'left'

/* Alignment */

const up = 'up'
const line = 'line'
const column = 'column'
const row = 'row'

/* Form */

const input_small = 'input-small'
const input_medium = 'input-medium'
const input_large = 'input-large'
const input_extra_large = 'input-extra-large'
const input_extra_extra_large = 'input-extra-extra-large'

const option_small = 'option-small'
const option_medium = 'option-medium'
const option_large = 'option-large'
const option_extra_large = 'option-extra-large'
const option_extra_extra_large = 'option-extra-extra-large'

const button_small = 'button-small'
const button_medium = 'button-medium'
const button_large = 'button-large'
const button_extra_large = 'button-extra-large'
const button_extra_extra_large = 'button-extra-extra-large'

/* Colors */

const menuBackgroundColor = '--menu-background-color'
const menuTextColor = '--menu-text-color'
const menuBackgroundColorHover = '--menu-background-color-hover'
const menuTextColorHover = '--menu-text-color-hover'

const submenuBackgroundColor = '--submenu-background-color'
const submenuTextColor = '--submenu-text-color'
const submenuBackgroundColorHover = '--submenu-background-color-hover'
const submenuTextColorHover = '--submenu-text-color-hover'

/* - - - - - - - - - - Aux - - - - - - - - - - */

/* - - - - - Global variables - - - - - */

var _globalStyleVariables
var _globalStyle
var _body
var _buildFunctions
const _STRING = 'string'
const _NUMBER = 'number'
const _OBJECT = 'object'
const _UNDEFINED = 'undefined'
const _BOOLEAN = 'boolean'

/* - - - - - Functions - - - - - */

/**
 * It gets the HTML DOM body object and sets to the body global variable.
 */
function _setGlobalVariables() {
    _body = $('body')
    _globalStyleVariables = $('<style>')
    _globalStyle = $('<style>')
    _buildFunctions = [ 
        _p, _i, _span, _a, _h, _hgroup, _abbr, _acronym, 
        _ul, _ol, _li, 
        _figure, _img, _figcaption, 
        _br, _section, _article, _nav, _aside, 
        _form, _input, _checkbox, _radio, _button, _select, 
        _mn
    ]
    $('head').append(_globalStyleVariables)
    $('head').append(_globalStyle)
}



function styleVariable(name, value) {
    if (isString(name) && (isString(value) || isNumber(value))) { 
        return { 
            name: name, 
            value: value 
        } 
    }
    return null
}
function addGlobalStyleVariable(name, value, scope) {
    if (!isString(name) || !(isString(value) || isNumber(value))) { return }
    _globalStyleVariables.append((isString(scope) ? scope : 'body') + ' { ' + name + ': ' + value + '; }')
}
function addGlobalStyleVariables(variables, scope) {
    if (isEmpty(variables)) { return }
    var variablesString = (isString(scope) ? scope : 'body') + ' {\n'
    variables.forEach(function(object, index, array) {
        const name = object.name
        const value = object.value
        if (isString(name) && (isString(value) || isNumber(value))) {
            variablesString += name + ': ' + value + ';\n'
        }
    })
    variablesString += '}'
    _globalStyleVariables.append(variablesString)
}



function style(property, value) {
    if (isString(property) && (isString(value) || isNumber(value))) {
        return {
            property: property,
            value: value
        }
    }
}
function addGlobalStyle(property, value, selector) {
    if (!isString(property) || !(isString(value) || isNumber(value))) { return }
    _globalStyle.append((isString(selector) ? selector : 'body') + ' { ' + property + ': ' + value + '; }')
}
function addGlobalStyles(styles, selector) {
    if (isEmpty(styles)) { return }
    var stylesString = (isString(selector) ? selector : 'body') + ' {\n'
    styles.forEach(function(object, index, array) {
        const property = object.property
        const value = object.value
        if (isString(property) && (isString(value) || isNumber(value))) {
            stylesString += property + ': ' + value + ';\n'
        }
    })
    stylesString += '}'
    _globalStyle.append(stylesString)
}



function getScreenWidth() {
    return $(window).width()
}
function isString(content) {
    return (typeof content) == _STRING
}
function isNumber(content) {
    return (typeof content) == _NUMBER
}
function isObject(content) {
    return (typeof content) == _OBJECT
}
function isArray(content) {
    return Array.isArray(content)
}
function isEmpty(array) {
    if (isArray(array)) {
        return array.length == 0
    } else { 
        return true
    }
}
function isBoolean(content) {
    return (typeof content) == _BOOLEAN
}



function _addIdAndClassToTag(tag, content) {
    if (tag != null && content != null) {
        const id = content.id
        const classes = content.class
        if (id != null && isString(id)) {
            tag.attr('id', id)
        }
        if (classes != null && isString(classes)) {
            tag.addClass(classes)
        }
    }
}

function _addOtherPropertiesToTag(tag, content) {
    for (var property in content) {
        if (property == 'id' || 
            property == 'class' || 
            property == 'container' || 
            property == 'container_alignment' || 
            property == 'label_alignment' || 
            property == 'input_size' || 
            property == 'option_size' || 
            property == 'button_size' || 
            property == 'grid' ||
            property == 'size' || 
            property == 'icon_side' ||
            property == 'suboptions_icon' ||
            property == 'type') { continue }
        const value = content[property]
        if (isString(property)) {
            if (isString(value) || isNumber(value)) {
                $(tag).attr(property, value)
            } else if (isBoolean(value)) {
                $(tag).prop(property, value)
            }
        }
    }
}

function _addFormGrid(tag, object) {
    if (object.type != _form_) { return }

    const gridValues = object.grid
    if (isEmpty(gridValues)) { return }

    const formObjects = $(tag).children()

    var amountOfColumns = 0
    gridValues.forEach(function(object, index, array){
        if (isArray(object) && object.length > amountOfColumns) { amountOfColumns = object.length }
    })

    var gridNumbers = []
    gridValues.forEach(function(object, index, array){
        if (isNumber(object)) {
            var line = [object]
            for (i = 1; i < amountOfColumns; i++) { line.push(object) }
            gridNumbers.push(line)
        } else if (isArray(object)) {
            if (object.length < amountOfColumns) {
                let stop = amountOfColumns - object.length
                for (i = 0; i < stop; i++) { object.push(object[object.length-1]) }
            }
            gridNumbers.push(object)
        }
    })

    function printErrorMessage(message) {
        print(message)
        print('GRID: ')
        print(gridNumbers)
    }
    
    // CHECKING IF THE GRID IS IN ASCENDING ORDER, IF ALL THE COMPONENETS WERE POSITIONED AND IF ALL THE VALUES ARE VALID
    var currentValue = gridNumbers[0][0]
    if (currentValue != 0) {
        printErrorMessage('ERROR: you must set the position of every form component starting from zero. ')
        return
    }
    for (i = 0; i < gridNumbers.length; i++) {
        for (j = 0; j < gridNumbers[i].length; j++) {
            if (i == 0 && j == i) { continue }
            const value = gridNumbers[i][j]
            if (value < 0 || value >= formObjects.length) {
                printErrorMessage('ERROR: ' + value + ' at position (' + i + ', ' + j + ') is not a valid grid value. You have to use the range of values 0...' + (formObjects.length - 1) + ' to configure the form grid. ')
                return
            }
            if (value < currentValue) {
                if (i > 0) {
                    if (gridNumbers[i-1][j] != value) {
                        printErrorMessage('ERROR: ' + value + ' at position (' + i + ', ' + j + ') is invalid. ' + 
                                          'You can not chage the original HTML tag positions in the CSS because it can cause accessibity problems.')
                        return
                    }
                } else {
                    printErrorMessage('ERROR: ' + value + ' at position (' + i + ', ' + j + ') is invalid. ' + 
                                      'You can not chage the original HTML tag positions in the CSS because it can cause accessibity problems.')
                    return
                }
            } else if (value - currentValue > 1) {
                if (i > 0) {
                    if (j > 0) {
                        if (gridNumbers[i-1][j-1] != currentValue) {
                            printErrorMessage('ERROR: you must set the position of every form component. ')
                            return 
                        }
                    } else {
                        printErrorMessage('ERROR: you must set the position of every form component. ')
                        return 
                    }
                } else {
                    printErrorMessage('ERROR: you must set the position of every form component. ')
                    return 
                }
            }
            currentValue = value
        }
    }

    if (currentValue != formObjects.length - 1) {
        print('ERROR: you must set the position of every form component. ')
        print('GRID: ')
        print(gridNumbers)
        return 
    }

    var formId = $(tag).attr('id')
    if (!isString(formId)) {
        formId = 'form-' + _formId++
        $(tag).attr('id', formId)
    }

    var tagAreaId = 0
    var tagAreaNames = []
    formObjects.each(function(index, formComponent){
        var formComponentId = $(formComponent).attr('id')
        if (formComponentId == null) {  
            formComponentId = 'form-content-' + _formContentId++
            $(formComponent).attr('id', formComponentId)
        }
        const tagAreaName = 'area-' + tagAreaId++
        addGlobalStyle('grid-area', tagAreaName, ('#' + formId + ' #' + formComponentId))
        tagAreaNames.push(tagAreaName)
    })

    var gridTemplateAreas = ''
    for (i = 0; i < gridNumbers.length; i++) {
        var gridTemplateLine = '" '
        for (j = 0; j < gridNumbers[i].length; j++) {
            gridTemplateLine += tagAreaNames[gridNumbers[i][j]] + ' '
        }
        gridTemplateLine += '"\n'
        gridTemplateAreas += gridTemplateLine
    }

    var rowGap = object.grid_row_spacing
    rowGap = isString(rowGap) ? rowGap : isNumber(rowGap) ? rowGap + 'px' : '5px'
    var columnGap = object.grid_column_spacing
    columnGap = isString(columnGap) ? columnGap : isNumber(columnGap) ? columnGap + 'px' : '5px'

    addGlobalStyles([ style('display', 'grid'), 
                      style('grid-template-areas', gridTemplateAreas),
                      style('row-gap', rowGap),
                      style('column-gap', columnGap) ],
                    ('#' + formId))

}

function _addFormComplements(tag, object) {
    // GRID
    _addFormGrid(tag, object)

    // INPUT LABEL ALIGNMENT
    var labelAlignment = object.label_alignment
    if (labelAlignment != up && labelAlignment != left) { labelAlignment = up }
    addGlobalStyles([ style('display', 'flex'),
                      style('flex-direction', labelAlignment == up ? column : row),
                      style('justify-content', 'flex-start') ], 
                    '#' + $(tag).attr('id') + ' .input-label')

    // INPUT SIZE
    const inputSize = object.input_size
    var inputSizeValue = 'var(--input-size-small)'
    switch (inputSize) {
        case input_small: inputSizeValue = 'var(--input-size-small)'; break
        case input_medium: inputSizeValue = 'var(--input-size-medium)'; break
        case input_large: inputSizeValue = 'var(--input-size-large)'; break;
        case input_extra_large: inputSizeValue = 'var(--input-size-extra-large)'; break;
        case input_extra_extra_large: inputSizeValue = 'var(--input-size-extra-extra-large)'
    }
    addGlobalStyle('height', inputSizeValue, 'form .input')

    // OPTIONS SIZE (size for checkbox, radio and select.option)
    const optionSize = object.option_size
    var optionSizeValue = 'var(--option-size-small)'
    switch (optionSize) {
        case option_small: optionSizeValue = 'var(--option-size-small)'; break
        case option_medium: optionSizeValue = 'var(--option-size-medium)'; break
        case option_large: optionSizeValue = 'var(--option-size-large)'; break;
        case option_extra_large: optionSizeValue = 'var(--option-size-extra-large)'; break;
        case option_extra_extra_large: optionSizeValue = 'var(--option-size-extra-extra-large)'
    }
    addGlobalStyle('height', optionSizeValue, 'form .option')

    // BUTTON SIZE
    const buttonSize = object.button_size
    var buttonSizeValue = 'var(--button-size-small)'
    switch (buttonSize) {
        case button_small: buttonSizeValue = 'var(--button-size-small)'; break
        case button_medium: buttonSizeValue = 'var(--button-size-medium)'; break
        case button_large: buttonSizeValue = 'var(--button-size-large)'; break;
        case button_extra_large: buttonSizeValue = 'var(--button-size-extra-large)'; break;
        case button_extra_extra_large: buttonSizeValue = 'var(--button-size-extra-extra-large)'
    }
    addGlobalStyles([style('border', 'none'), style('height', buttonSizeValue)], 'form .button')
    
}



function _tagWithTypeInTypesForObject(type, types, object) {
    if (isNumber(type) && !isEmpty(types)) {
        for (i = 0; i < types.length; i++) {
            const t = types[i]
            if (t == type && t >= 0 && t < _buildFunctions.length) {
                const buildFunction = _buildFunctions[t]
                return buildFunction(object)
            }
        }
    }
    return null
}

function _tagForObjectWithTypes(object, types) {
    const type = object.type

    const content = type != _menu_ ? object.content : object
    if (typeof object.button_size != _UNDEFINED) { content.button_size = object.button_size } else { content.button_size = button_small }
    if (typeof object.label_alignment != _UNDEFINED) { content.label_alignment = object.label_alignment } else { content.label_alignment = left }
    if (typeof object.input_size != _UNDEFINED) { content.input_size = object.input_size } else { content.input_size = input_small }
    if (typeof object.container != _UNDEFINED) { content.container = object.container != null ? object.container : true } else { content.container = true }
    if (typeof object.container_alignment != _UNDEFINED) { content.container_alignment = object.container_alignment != null ? object.container_alignment : line } else {content.container_alignment = line }
    if (typeof object.option_size != _UNDEFINED) { content.option_size = object.option_size } else { content.option_size = option_small }

    var tag = _tagWithTypeInTypesForObject(type, types, content)
    if (type == _form_) { _addFormComplements(tag, object) }
    _addIdAndClassToTag(tag, object)
    _addOtherPropertiesToTag(tag, object)

    return tag
}

function _tagForObject(object) {
    const types = [_br_, _menu_, _p_, _i_, _span_, _abbr_, _acronym_, _a_, _h_, _hgroup_, _ul_, _ol_, _figure_, _img_, _section_, _nav_, _aside_, _form_, _button_]
    return _tagForObjectWithTypes(object, types)
}

function _tagForObjectInsideParagraph(object) {
    const types = [_i_, _span_, _a_, _abbr_, _acronym_]
    return _tagForObjectWithTypes(object, types)
}

function _tagForObjectInsideListItem(object) {
    const types = [_p_, _a_, _h_, _hgroup_, _ul_, _ol_, _figure_, _img_]
    return _tagForObjectWithTypes(object, types)
}

function _tagForObjectInsideSection(object) {
    const types = [_br_, _p_, _a_, _h_, _hgroup_, _ul_, _ol_, _figure_, _img_, _article_, _nav_, _aside_, _form_, _button_]
    return _tagForObjectWithTypes(object, types)
}

function _tagForObjectInsideArticle(object) {
    const types = [_br_, _p_, _a_, _h_, _hgroup_, _ul_, _ol_, _figure_, _img_, _nav_, _aside_, _form_, _button_]
    return _tagForObjectWithTypes(object, types)
}

function _tagForObejctInsideNav(object) {
    const types = [_br_, _a_, _ul_, _ol_]
    return _tagForObjectWithTypes(object, types)
}

function _tagForObjectInsideAside(object) {
    const types = [_br_, _a_, _ul_, _ol_]
    return _tagForObjectWithTypes(object, types)
}

function _tagForObjectInsideForm(object) {
    const types = [_br_, _p_, _a_, _h_, _hgroup_, _ul_, _ol_, _figure_, _img_, _input_, _checkbox_, _radio_, _button_, _select_]
    return _tagForObjectWithTypes(object, types)
}



function print(content) {
    console.log(content)
}

function error(content) {
    console.error(content)
}

/* - - - - - - - - - - Startup - - - - - - - - - - */

$(document).ready(function(){
    _setGlobalVariables()

    if (typeof didStartSetup == 'function') { didStartSetup() }

    var menuColors = typeof getMenuColors == 'function' ? getMenuColors() : []
    var header = typeof getHeaderObjects  == 'function' ? getHeaderObjects() : []
    var main = typeof getMainObjects  == 'function' ? getMainObjects() : []
    var footer = typeof getFooterObjects  == 'function' ? getFooterObjects() : []

    if (!isEmpty(menuColors)) { _setMenuColors(menuColors) } else { print('Empty menu colors') }
    if (!isEmpty(header)) { _buildHeader(header) } else { print('Empty header') }
    if (!isEmpty(main)) { _buildMain(main) } else { print('Empty main') }
    if (!isEmpty(footer)) { _buildFooter(footer) } else { print('Empty footer') }

    if (typeof didEndSetup == 'function') { didEndSetup() }
})

$(window).resize(function() {
    var width = getScreenWidth()
    if (width <= 800) {
        $('.menu-open-close-button').removeClass('.menu-open-close-button')
    } 
}) 

function _setMenuColors(content) {
    content.forEach(function(object, index, array){
        const type = object.type
        if (isNumber(type)) {
            const content = object.content
            if (type == _menu_colors_, !isEmpty(content)) {
                var globalStyleVariables = []
                const variableNames = [menuBackgroundColor,
                                       menuTextColor,
                                       menuBackgroundColorHover,
                                       menuTextColorHover,
                                       submenuBackgroundColor,
                                       submenuTextColor,
                                       submenuBackgroundColorHover,
                                       submenuTextColorHover]
                var i = 0
                content.forEach(function(value, index2, array2){
                    if (isString(value)) { globalStyleVariables.push(styleVariable(variableNames[i], value)) }
                    i++
                })
                addGlobalStyleVariables(globalStyleVariables)
            }
        }
    })
}

function _buildHeader(content) { 
    var header = $('<header>')
    if (!(isEmpty(content))) {
        content.forEach(function(object, index, array){
            header.append(_tagForObject(object))
        })
    }
    _body.append(header)
}

function _buildMain(content) { 
    var main = $('<main>')
    if (!(isEmpty(content))) {
        content.forEach(function(object, index, array){
            main.append(_tagForObject(object))
        })
    }
    _body.append(main)
}

function _buildFooter(content) { 
    var footer = $('<footer>')
    if (!(isEmpty(content))) {
        content.forEach(function(object, index, array){
            footer.append(_tagForObject(object))
        })
    }
    _body.append(footer)
}

/* - - - - - - - - - - Object creation functions - - - - - - - - - - */

function menuColors(content) {
    if (isArray(content)) {
        return {
            type: _menu_colors_,
            content: content
        }
    }
    return null
}

/* - - - - - - - - - - HTML builder functions - - - - - - - - - - */

/* Text component types */

function p(content) {
    if (isString(content) || isArray(content)) {
        return {
            type: _p_,
            content: content
        }
    } else if (isObject(content)) {
        return {
            type: _p_,
            content: [content]
        }
    }
    return null
}

function _p(content) {
    var p = $('<p>')
    if (!(isEmpty(content))) {
        content.forEach(function(object, index, array) {
            if (isString(object)) {
                p.append(object)
            } else { 
                p.append(_tagForObjectInsideParagraph(object))
            }
        })
    } else if (isString(content)) {
        p.text(content)
    } else { 
        return null     
    }
    return p
} 

function i(text, clss) {
    if (isString(text) || isString(clss)) {
        return {
            type: _i_,
            content: {
                text: text,
                class: clss
            }
        }
    }
    return null
}

function _i(content) {
    const text = content.text
    const clss = content.class
    var iTag = $('<i>')
    if (isString(text) && isString(clss)) {
        iTag.text(text)
        $(iTag).addClass(clss)
    } else if(isString(text)) {
        iTag.text(text)
    } else if(isString(clss)) {
        $(iTag).addClass(clss)
    } else { 
        return
    }
    return iTag
} 

function span(text) {
    if (isString(text)) {
        return {
            type: _span_,
            content: text
        }
    }
    return null
}

function _span(content) { 
    if (isString(content)) {
        var span = $('<span>')
        span.text(content)
        return span
    } else { 
        return null
    }
} 

function a(text, link) {
    if (isString(text) && isString(link)) {
        return {
            type: _a_,
            content: {
                text: text,
                link: link
            }
        }
    }
    return null
}

function _a(content) {
    const text = content.text
    const link = content.link
    if ((text != null && isString(text)) && 
        (link != null && isString(link))) {
        var a = $('<a>')
        a.text(text)
        a.attr('href', link)
        return a
    } else {
        return null
    }
} 

function h(text, level) {
    if (isString(text)) {
        if (isNumber(level) && level >= 1 && level <= 6) {
            return {
                type: _h_,
                content: {
                    text: text,
                    level: level
                }
            }
        } else {
            return {
                type: _h_,
                content: text
            }
        }
    }
    return null
}

function _h(content) {
    if (content != null, isString(content)) {
        var h = $('<h1>')
        h.text(content)
        return h
    }
    const text = content.text
    const level = content.level
    if (text != null, isString(text)) {
        var tagText = '<h1>'
        if (level != null && 
            (isNumber(level) || isString(level)) && 
            (Number(level) > 0 && Number(level) < 7)) {
            tagText = '<h' + level + '>'
        } 
        var h = $(tagText)
        h.text(text)
        return h
    } else {
        return null
    }
} 

function hgroup(content) {
    if (isArray(content)) {
        return {
            type: _hgroup_,
            content: content
        }
    } else if (isObject(content) || isString(content)) {
        return {
            type: _hgroup_,
            content: [ content ]
        }
    }
    return null
}

function _hgroup(content) {
    if (!(isEmpty(content))) {
        var hgroup = $('<hgroup>')
        content.forEach(function(object, index, array){
            hgroup.append(_h(isString(object) ? object : object.content))
        })
        return hgroup
    } else {
        return null
    }
} 

function abbr(text, title) {
    if (isString(text) && isString(title)) {
        return {
            type: _abbr_,
            content: {
                text: text,
                title: title
            }
        }
    }
}

function _abbr(content) { 
    return _abbr(content)
} 

function _abbr(content) { 
    const text = content.text
    const title = content.title
    if ((text != null && isString(text)) &&
        (title != null && isString(title))) {
        var abbr = $('<abbr>')
        abbr.text(text)
        abbr.attr('title', title)
        return abbr
    } else {
        return null
    }
} 

function acronym(text, title) {
    if (isString(text) && isString(title)) {
        return {
            type: _acronym_,
            content: {
                text: text,
                title: title
            }
        }
    }
}

function _acronym(content) {
    const text = content.text
    const title = content.title
    if ((text != null && isString(text)) && 
        (title != null && isString(title))) {
        var acronym = $('<acronym>')
        acronym.text(text)
        acronym.attr('title', title)
        return acronym
    } else {
        return null
    }
} 

/* List component types */

function ul(content) {
    if (isArray(content)) {
        return {
            type: _ul_,
            content: content
        }
    } else if (isObject(content) || isString(content)) {
        return {
            type: _ul_,
            content: [content]
        }
    }
    return null
}

function _ul(content) {
    if (!isEmpty(content)) {
        var ul = $('<ul>')
        content.forEach(function(object, index, array){
            if (object.type == _li_) {
                if (object.content != null) {
                    ul.append(_li(object.content))
                }
            } else {
                ul.append(_li(object))
            }
        })
        return ul
    } else { 
        return null
    }
} 

function ol(content) {
    if (isArray(content)) {
        return {
            type: _ol_,
            content: content
        }
    } else if (isObject(content) || isString(content)) {
        return {
            type: _ol_,
            content: [content]
        }
    }
    return null
}

function _ol(content) {
    if (!isEmpty(content)) {
        var ol = $('<ol>')
        content.forEach(function(object, index, array){
            if (object.type == _li_) {
                if (object.content != null) {
                    ol.append(_li(object.content))
                }
            } else {
                ol.append(_li(object))
            }
        })
        return ol
    } else { 
        return null
    }
} 

function li(content, subcontent) {
    if (isString(content)) {
        if (isObject(subcontent)) {
            return {
                type: _li_,
                content: { 
                    text: content,
                    subcontent: subcontent
                }
            }
        } else { return content }
    } else if (isObject(content)) {
        return {
            type: _li_,
            content: content
        }
    }
    return null
}

function _li(content) { 
    var li = $('<li>')

    if (isString(content)) {
        li.text(content)
        return li
    } 

    const text = content.text
    const subItemContent = content.subcontent
    if (text != null && isString(text)) {
        li.text(text)
        if (subItemContent != null) {
            const type = subItemContent.type
            if (type != null && (type == _ul_ || type == _ol_)) {
                const tagForObject = _tagForObjectInsideListItem(subItemContent)
                if (tagForObject != null) {
                    li.append(tagForObject)
                } 
            }
        } 
        return li
    }

    const tagForObject = _tagForObjectInsideListItem(content)
    if (tagForObject != null) {
        li.append(tagForObject)
        return li
    } else {
        return null
    }
} 

/* Image component types */

function figure(image, caption) {
    if (isObject(image)) {
        return {
            type: _figure_,
            content: {
                img: image,
                caption: caption
            }
        }
    }
    return null
}

function _figure(content) { 
    const image = content.img
    const caption = content.caption
    if (image != null && isObject(image)) {
        var figure = $('<figure>')
        const imgObject = _img(image.content)
        if (imgObject != null) {
            figure.append(imgObject)
            figure.append(_figcaption(isString(caption) ? caption : caption.content))
            return figure
        } else {
            return null
        }
    } else {
        return null
    }
} 

function img(src, alt) {
    if (isString(src) && isString(alt)) {
        return {
            type: _img_,
            content: {
                src: src,
                alt: alt
            }
        }
    }
    return null
}

function _img(content) {
    const src = content.src
    const alt = content.alt
    if ((src != null && isString(src)) && 
        (alt != null && isString(alt))) {
        var img = $('<img/>')
        img.attr('src', src)
        img.attr('alt', alt)
        return img
    } else {
        return null
    }
} 

function figcaption(text) {
    if (isString(text)) {
        return {
            type: _figcaption_,
            content: text
        }
    }
}

function _figcaption(content) { 
    if (content != null && isString(content)) {
        var figcaption = $('<figcaption>')
        figcaption.text(content)
        return figcaption
    } else {
        return null
    }
} 

/* Structure component types */

function breakline() {
    return { type: _br_, content: {} }
}

var br = breakline()

function _br(_ = null) {
    return $('<br>')
} 

function section(content) {
    if (isArray(content)) {
        return {
            type: _section_,
            content: content
        }
    } else if (isObject(content)) {
        return {
            type: _section_,
            content: [content]
        }
    }
    return null
}

function _section(content) {
    if (content != null) {
        var section = $('<section>')
        if (!isEmpty(content)) {
            content.forEach(function(object, index, array) {
                section.append(_tagForObjectInsideSection(object))
            })
            return section
        }
        return null
    } else {
        return null
    }
} 

function article(content) {
    if (isArray(content)) {
        return {
            type: _article_,
            content: content
        }
    } else if (isObject(content)) {
        return {
            type: _article_,
            content: [content]
        }
    }
    return null
}

function _article(content) { 
    if (content != null) {
        var article = $('<article>')
        if (!isEmpty(content)) {
            content.forEach(function(object, index, array) {
                article.append(_tagForObjectInsideArticle(object))
            })
            return article
        }
        return null
    } else {
        return null
    }
} 

function nav(content) {
    if (isArray(content)) {
        return {
            type: _nav_,
            content: content
        }
    } else if (isObject(content)) {
        return {
            type: _nav_,
            content: [content]
        }
    }
    return null
}

function _nav(content) { 
    if (!isEmpty(content)) {
        var navTag = $('<nav>')
        content.forEach(function(object, index, array) {
            navTag.append(_tagForObejctInsideNav(object))
        })
        return navTag
    } else {
        return null
    }
} 

function aside(content) {
    if (isArray(content)) {
        return {
            type: _aside_,
            content: content
        }
    } else if (isObject(content)) {
        return {
            type: _aside_,
            content: [content]
        }
    }
    return null
}

function _aside(content) { 
    if (!isEmpty(content)) {
        var asideTag = $('<aside>')
        content.forEach(function(object, index, array) {
            asideTag.append(_tagForObjectInsideAside(object))
        })
        return asideTag
    } else {
        return null
    }
} 

/* Form component types */

function form(action, method, inputs, enctype) {
    if (isString(action) && isString(method)) {
        if (isArray(inputs)) {
            return {
                type: _form_,
                content: {
                    action: action,
                    method: method,
                    inputs: inputs,
                    enctype: enctype
                }
            }
        } else if (isObject(inputs)) {
            return {
                type: _form_,
                content: {
                    action: action,
                    method: method,
                    inputs: [inputs],
                    enctype: enctype
                }
            }
        }
    }
    return null
}

var _formId = 0
var _formContentId = 0

function _form(content) {
   const action = content.action
   const method = content.method
   const inputs = content.inputs
   const enctype = content.enctype
   if ((action != null && isString(action)) && 
       (method != null && isString(method)) && 
       !isEmpty(inputs)) {
        var form = $('<form>')
        form.attr('action', action)
        form.attr('method', method)
        inputs.forEach(function(object, index, array) {
            const tagObject = _tagForObjectInsideForm(object)
            if (!isEmpty(tagObject)) {
                tagObject.forEach(function(object, index, array){
                    form.append(object)
                })
            } else {
                form.append(tagObject)
            }
        })
        if (isString(enctype)) { $(form).attr('enctype', enctype) }
        return form
   } else {
       return null
   }
} 



function input(type, name, label, placeholder, required) {
    if (isString(type) && isString(name)) {
        return {
            type: _input_,
            content: {
                type: type,
                name: name,
                label: label,
                placeholder: placeholder,
                required: required
            }
        }
    }
    return null
}

function textInput(name, label, placeholder, required) { return input(_text, name, label, placeholder, required)  }
function numberInput(name, label, placeholder, required) { return input(_number, name, label, placeholder, required)  }
function telInput(name, label, placeholder, required) { return input(_tel,name, label, placeholder, required)  }
function emailInput(name, label, placeholder, required) { return input(_email, name, label, placeholder, required)  }
function dateInput(name, label, placeholder, required) { return input(_date, name, label, placeholder, required)  }
function passwordInput(name, label, placeholder, required) { return input(_password, name, label, placeholder, required) }
function fileInput(name, label, placeholder, required, accept) { 
    let inputObject = input(_file, name, label, placeholder, required)
    inputObject.content.accept = accept
    return inputObject
}

function submit(text) {
    const submitButtonText = (text != null && isString(text)) ? text : 'Submit'
    return {
        type: _input_,
        content: {
            type: _submit,
            text: submitButtonText
        }
    }
}

function reset(text) {
    const resetButtonText = (text != null && isString(text)) ? text : 'Reset'
    return {
        type: _input_,
        content: {
            type: _reset,
            text: resetButtonText
        }
    }
}

function _input(content) {
    const type = content.type
    const name = content.name
    const label = content.label
    const labelAlignment = content.label_alignment
    const placeholder = content.placeholder
    const required = content.required
    const inputSize = content.input_size
    if (type != null && isString(type)) {
        if (type == _submit || type == _reset) {
            var input = $('<input>')
            input.attr('type', type)
            const text = content.text
            if (text != null && isString(text)) {
                input.attr('value', text)
            }
            const buttonSize = content.button_size
            if (isString(buttonSize) && 
                (buttonSize == button_small ||
                buttonSize == button_medium || 
                buttonSize == button_large ||
                buttonSize == button_extra_large ||
                buttonSize == button_extra_extra_large)) {
                input.addClass(buttonSize)
            } else {
                input.addClass('button')
            }
            return input
        } else if (name != null && isString(name)) {
            var labelTag = $('<label>')
            var input = $('<input>')
            input.attr('name', name)
            input.attr('type', type)

            if (label != null && isString(label)) {
                var spanTag = $('<span>')
                spanTag.text(label)
                labelTag.append(spanTag)
                labelTag.append(input)
                labelTag.addClass('input-label')
                if (labelAlignment == up || labelAlignment == left) {
                    $(labelTag).css('display', 'flex') 
                    $(labelTag).css('flex-direction', labelAlignment == up ? column : row) 
                    $(labelTag).css('justify-content', 'flex-start')
                }
            }

            if (placeholder != null && isString(placeholder)) {
                input.attr('placeholder', placeholder)
            }
            if (required != null) {
                input.prop('required', required == true)
            }
            if (isString(inputSize) && 
                (inputSize == input_small ||
                inputSize == input_medium || 
                inputSize == input_large ||
                inputSize == input_extra_large ||
                inputSize == input_extra_extra_large)) {
                input.addClass(inputSize)
            } else {
                input.addClass('input')
            }
            if (type == _file && isString(content.accept)) { $(input).attr('accept', content.accept) }
            if (isString(label)) {
                return labelTag
            } else {
                return input
            }
        } else {
            return null
        }
    } else {
        return null
    }
} 

function checkboxGroup(options) {
    var optionObjects = []
    let opts = isArray(options) ? options : isObject(options) ? [options] : []
    if (!isEmpty(opts)) {
        opts.forEach(function(object, index, array) {
            if (isArray(object)) {
                const name = object[0]
                const text = object[1]
                const checked = object[2]
                const id = object[3]
                optionObjects.push(checkbox(name, text, checked, id))
            } else if (isObject(object)) {
                optionObjects.push(object)
            }
        })
    }
    var checkboxGroupObject = {
        type: _checkbox_,
        content: optionObjects
    }
    return checkboxGroupObject
}

function checkbox(name, text, checked, id) {
    if (isString(name) && isString(text)) {
        return {
            name: name,
            text: text,
            checked: checked,
            id: id
        }
    }
    return null
}

function _checkbox(content) { 
    if (!isEmpty(content)) {
        const useContainer = content.container
        var checkboxTags = []
        var container = $('<div>')
        var containerAlignment = content.container_alignment
        content.forEach(function(object, index, array){
            const name = object.name
            const text = object.text
            const checked = (object.checked == true)
            const id = object.id
            const optionSize = object.option_size
            var idText = name
            if (id != null && isString(id)) {
                idText = id
            } 
            if ((name != null && isString(name)) && 
                (text != null && isString(text))) {

                var checkbox = $('<input>')
                checkbox.attr('type', 'checkbox')
                checkbox.attr('name', name)
                checkbox.attr('id', idText)
                checkbox.prop('checked', checked)
                
                var label = $('<label>')
                label.append(checkbox)
                const span = $('<span>')
                span.text(text)
                label.append(span)
                label.attr('for', idText)

                checkboxTags.push(label)
                container.append(label)

                if (isString(optionSize) && 
                    (optionSize == option_small ||
                     optionSize == option_medium || 
                     optionSize == option_large ||
                     optionSize == option_extra_large ||
                     optionSize == option_extra_extra_large)) {
                    label.addClass(optionSize)
                } else {
                    label.addClass('option')
                }

            } 
        })
        $(container).css('display', 'flex')
        if (containerAlignment == line || containerAlignment == column) {
            $(container).css('flex-direction', containerAlignment)
        } else {
            $(container).css('flex-direction', column)
        }
        if (useContainer) { return container }
        return checkboxTags
    } else {
        return null
    }
} 

function radioGroup(name, options) {
    var optionObjects = []
    let opts = isArray(options) ? options : isObject(options) ? [options] : []
    if (isString(name) && !isEmpty(opts)) {
        opts.forEach(function(object, index, array) {
            if (isArray(object)) {
                const text = object[0]
                const value = object[1]
                const id = object[2]
                const checked = object[3]
                optionObjects.push(radio(text, value, id, checked))
            } else if (isObject(object)) {
                optionObjects.push(object)
            }
        })
    } else { return null }
    var radioGroupObject = {
        type: _radio_,
        content: {
            name: name,
            options: optionObjects
        }
    }
    return radioGroupObject
}

function radio(text, value, id, checked) {
    return {
        text: text,
        value: value,
        id: id,
        checked: checked
    }
}

function _radio(content) { 
    const name = content.name
    const options = content.options
    const useContainer = content.container
    const containerAlignment = content.container_alignment
    if ((name != null && isString(name)) && 
        !isEmpty(options)) {
        var radioTags = []
        var container = $('<div>')
        options.forEach(function(object, index, array){
            const text = object.text
            const id = object.id
            const value = object.value
            const checked = (object.checked == true)
            const optionSize = object.option_size
            if ((text != null && isString(text)) &&
                (id != null && isString(id)) &&
                (value != null && (isNumber(value) || isString(value)))) {

                var radio = $('<input>')
                radio.attr('type', 'radio')
                radio.attr('name', name)
                radio.attr('id', id)
                radio.attr('value', value)
                radio.prop('checked', checked)
                
                var label = $('<label>')
                label.append(radio)
                let span = $('<span>')
                span.text(text)
                label.append(span)
                label.attr('for', id)

                radioTags.push(label)
                container.append(label)

                if (isString(optionSize) && 
                    (optionSize == option_small ||
                     optionSize == option_medium || 
                     optionSize == option_large ||
                     optionSize == option_extra_large ||
                     optionSize == option_extra_extra_large)) {
                    label.addClass(optionSize)
                } else {
                    label.addClass('option')
                }

            } 
        })
        $(container).css('display', 'flex')
        if (containerAlignment == line || containerAlignment == column) {
            $(container).css('flex-direction', containerAlignment)
        } else {
            $(container).css('flex-direction', column)
        }
        if (useContainer) { return container }
        return radioTags
    } else {
        return null
    }
} 

function button(text, onclick) {
    if (isString(text) && isString(onclick)) {
        return {
            type: _button_,
            content: {
                text: text,
                onclick, onclick
            }
        }
    }
    return null
}

function _button(content) { 
    const text = content.text
    const onclick = content.onclick
    const buttonSize = content.button_size
    if ((text != null && isString(text)) &&
        (onclick != null && isString(onclick))) {
        var button = $('<button>')
        button.text(text)
        button.attr('onclick', onclick)
        if (isString(buttonSize) && 
            (buttonSize == button_small ||
             buttonSize == button_medium || 
             buttonSize == button_large ||
             buttonSize == button_extra_large ||
             buttonSize == button_extra_extra_large)) {
            button.addClass(buttonSize)
        } else {
            button.addClass('button')
        }
        return button
    } else { 
        return null
    }
} 

function select(name, options, label, required) {
    var optionObjects = []
    let opts = isArray(options) ? options : isObject(options) ? [options] : []
    if (isString(name) && !isEmpty(opts)) {
        opts.forEach(function(object, index, array) {
            if (isArray(object)) {
                const text = object[0]
                const value = object[1]
                const selected = object[2]
                optionObjects.push(option(text, value, selected))
            } else if (isObject(object)) {
                optionObjects.push(object)
            }
        })
    } else { return null }
    var selectObject = {
        type: _select_,
        content: {
            name: name, 
            label: label,
            required: required,
            options: optionObjects
        }
    }
    return selectObject
}

function option(text, value, selected) {
    return {
        text: text,
        value: value,
        selected: selected
    }
}

function _select(content) {
   const label = content.label
   const labelAlignment = content.label_alignment
   const name = content.name
   const required = content.required
   const options = content.options
   const inputSize = content.input_size
    if ((name != null && isString(name)) && 
        !isEmpty(options)) {
        var selectTag = $('<select>')
        selectTag.attr('name', name)
        selectTag.attr('required', required == true)
        options.forEach(function (object, index, array) {
            const text = object.text
            const value = object.value
            const selected = object.selected
            if ((text != null && isString(text)) && 
                (value != null && (isNumber(value) || isString(value)))) {
                var option = $('<option>')
                option.text(text)
                option.attr('value', value)
                option.prop('selected', selected == true)
                selectTag.append(option)
            }
        })
        if (isString(inputSize) && 
            (inputSize == input_small ||
            inputSize == input_medium || 
            inputSize == input_large ||
            inputSize == input_extra_large ||
            inputSize == input_extra_extra_large)) {
            selectTag.addClass(inputSize)
        } else {
            selectTag.addClass('input')
        }
        if (label != null && isString(label)) {
            var labelTag = $('<label>')
            var spanTag = $('<span>')
            spanTag.text(label)
            labelTag.append(spanTag)
            labelTag.append(selectTag)
            labelTag.addClass('input-label')
            if (labelAlignment == up || labelAlignment == left) {
                $(labelTag).css('display', 'flex') 
                $(labelTag).css('flex-direction', labelAlignment == up ? column : row) 
                $(labelTag).css('justify-content', 'flex-start')
            }
            return labelTag
        } else {
            return selectTag
        }
    } else {
        return null
    }
}

/* Custom menu */

function menu(items) { return mn(items) }

function mn(items) {
    if (!isEmpty(items)) {
        return {
            type: _menu_,
            content: items
        }
    }
}

function menuItem(text, link, icon, subitems) { return mi(text, link, icon, subitems) }

function mi(text, link, icon, subitems) {
    if (isString(text)) {
        var menuItem = {
            text: text,
        }
        if (isString(link)) {
            menuItem.link = link
        }
        if (isString(icon)) {
            menuItem.icon = icon
        }
        if (subitems != null) {
            if (isArray(subitems)) {
                menuItem.subitems = subitems
            } else if (isObject(subitems)) {
                menuItem.subitems = [ subitems ]
            } 
        }
        return menuItem
    }
}

var menuId = 0

function _mn(object) {
    const content = object.content
    const size = object.size
    const suboptionsIcon = object.suboptions_icon == true
    if (!isEmpty(content)) {
        var nav = $('<nav>') 
        nav.attr('aria-label', 'Main menu') 
        nav.addClass('menu-nav')

        var thisMenuId = null
        if (object.id != null && isString(object.id)) {
            thisMenuId = object.id
        } else {
            thisMenuId = 'menu-' + menuId
            menuId++
        }

        var openCloseMenuButton = $('<button>')
        openCloseMenuButton.addClass('fa fa-bars fa-lg')
        openCloseMenuButton.addClass('menu-open-close-button')
        openCloseMenuButton.prop('aria-haspopup', 'true') 
        openCloseMenuButton.attr('aria-controls', thisMenuId) 
        openCloseMenuButton.attr('onclick', '_menuOpenCloseButtonOnClick(this)')
        nav.append(openCloseMenuButton)

        if (isString(size) && 
            (size == menu_small || 
             size == menu_medium ||
             size == menu_large ||
             size == menu_extra_large ||
             size == menu_extra_extra_large)) {
            nav.addClass(size)
        } else { nav.addClass(menu_small) }

        var ul = $('<ul>')
        ul.attr('id', thisMenuId)
        ul.attr('role', 'menubar')
        ul.addClass('menu-ul')
        content.forEach(function(obj, index, array) {
            obj.icon_side = object.icon_side
            ul.append(_mi(obj, suboptionsIcon))
        })
        nav.append(ul)
        return nav
    } else {
        return null
    }
}

function _mi(content, suboptionsIcon) {
    if (isObject(content)) {
        const text = content.text
        const link = content.link
        const icon = content.icon
        const side = content.icon_side
        const subitems = content.subitems
        if (isString(text) && isString(link)) {

            var li = $('<li>')
            li.attr('role', 'none')
            li.addClass('menu-li')
            li.attr('onkeydown', '_menuItemOnkeydown(this, event)')

            var iconSide = null
            var menuAIconClass = null

            var a = $('<a>')
            a.attr('role', 'menuitem')
            a.addClass('menu-a')
            a.attr('href', link)
            a.attr('_tabindex', '0')
            a.text(text)

            if (isString(icon)) {
                if (isString(side) && (side == right || side == left)) {
                    iconSide = side
                } else { iconSide = left }
            
                var i = $('<i>')
                i.addClass('menu-a-i')
                i.addClass(icon)
                
                if (iconSide == right) {
                    a.append(i)
                } else {
                    a.prepend(i)
                }
                menuAIconClass = 'menu-a-icon-'+iconSide
                a.addClass(menuAIconClass)
            }

            li.append(a)

            if (!isEmpty(subitems)) {
                a.attr('aria-haspopup', 'true')
                a.attr('aria-expanded', 'false')
                li.removeClass()
                li.addClass('menu-item-with-suboptions')

                li.attr('onmouseover', '_menuItemOnMouseHover(this)')
                li.attr('onmouseleave', '_menuItemOnMouseLeave(this)')
                a.attr('onclick', '_menuItemWithSuboptionsOnclick(this)')
                a.attr('onfocus', '_onFocus(this)')
                
                if (suboptionsIcon) {
                    var shrinkExpandIcon = $('<i>')
                    shrinkExpandIcon.addClass('fa fa-chevron-down fa-lg')
                    shrinkExpandIcon.addClass('menu-a-i-suboptions')
                    
                    if (isString(menuAIconClass)) {
                        if (iconSide == left) {
                            a.append(shrinkExpandIcon)
                        } else {
                            a.prepend(shrinkExpandIcon)
                        }
                        a.removeClass(menuAIconClass)
                        a.addClass('menu-a-icon-both')
                    } else {
                        a.append(shrinkExpandIcon)
                        a.removeClass(menuAIconClass)
                        a.addClass('menu-a-icon-right')
                    }
                }

                var ul = $('<ul>')
                // ul.attr('role', 'menu')
                ul.attr('aria-label', text)
                ul.addClass('menu-submenu-ul')
                subitems.forEach(function(object, index, array) {
                    object.icon_side = side
                    ul.append(_mi(object))
                })
                li.append(ul)
            }

            return li
        } else {
            return null
        }
    } else {
        return null
    }
}

function _menuOpenCloseButtonOnClick(button) {
    const menu = $(button).siblings('.menu-ul')[0]
    if ($(menu).css('display') == 'grid') {
        $(menu).css('display', 'none')
        $(button).removeAttr('aria-expanded')
    } else {
        $(menu).css('display', 'grid')
        $(button).attr('aria-expanded', 'true')
    }
}

function _isSubmenuExpanded(menuItem) {
    const submenu = $(menuItem).children('.menu-submenu-ul')
    if (isObject(submenu) && $(submenu).css('display') == 'block') {
        return true
    } else { return false }
}

function _setExpandIcon(icon) {
    $(icon).removeClass('fa fa-chevron-up fa-lg')
    $(icon).addClass('fa fa-chevron-down fa-lg')
}

function _setShrinkIcon(icon) {
    $(icon).removeClass('fa fa-chevron-down fa-lg')
    $(icon).addClass('fa fa-chevron-up fa-lg')
}

function _expandMenu(menuItem, isHoverAction, updateFocus) {
    const link = $(menuItem).children('.menu-a')[0]
    const shrinkExpandIcon = $(link).children('.menu-a-i-suboptions')[0]
    const submenu = $(menuItem).children('.menu-submenu-ul')[0]
    $(submenu).css('display', 'block')
    _setShrinkIcon(shrinkExpandIcon)
    if (isHoverAction) {
        $(menuItem).css('background-color', 'var(--menu-background-color-hover)')
        $(link).css('color', 'var(--menu-text-color-hover)')
    }
    if (updateFocus) {
        const firstSubmenuItem = $(submenu).children('.menu-li')[0]
        const firstSubmenuLink = $(firstSubmenuItem).children('.menu-a')[0]
        $(firstSubmenuLink).focus()
        $(link).attr('aria-expanded', 'true')
    } else {
        $(link).attr('aria-expanded', 'true')
    }
}

function _shrinkMenu(menuItem, isHoverAction, updateFocus) {
    const link = $(menuItem).children('.menu-a')[0]
    const shrinkExpandIcon = $(link).children('.menu-a-i-suboptions')[0]
    const submenu = $(menuItem).children('.menu-submenu-ul')[0]
    $(submenu).css('display', 'none')
    _setExpandIcon(shrinkExpandIcon)
    $(link).attr('aria-expanded', 'false')
    if (isHoverAction) {
        $(menuItem).css('background-color', 'var(--menu-background-color)')
        $(link).css('color', 'var(--menu-text-color)')
    }
    if (updateFocus) {
        $(link).focus()
    }
}

function _menuItemOnMouseHover(menuItem) { _expandMenu(menuItem, true) }

function _menuItemOnMouseLeave(menuItem) { _shrinkMenu(menuItem, true) } 

function _onFocus(link) {
    const menuItem = $(link).parent()
    if ($(menuItem).hasClass('menu-item-with-suboptions')) {
        $(menuItem).attr('onkeydown', '_menuItemOnkeydown(this, event)')
    }
}

function _menuItemWithSuboptionsOnclick(link) {
    if (_isSubmenuExpanded($(link).parent())) {
        _shrinkMenu($(link).parent(), false, true)
    } else {
        _expandMenu($(link).parent(), false, true)
    }
}

const _left_arrow = 37
const _up_arrow = 38
const _right_arrow = 39
const _down_arrow = 40
const _tab = 9
const _esc = 27
const _enter = 13
const _space = 32

function _menuItemOnkeydown(menuItem, event) {
    const keycode = event.keyCode
    const link = $(menuItem).children('.menu-a')[0]
    const parent = $(menuItem).parent()
    if ($(parent).hasClass('menu-submenu-ul')) {
        _sub_menuItemOnkeydown(menuItem, link, parent, keycode)
    } else if ($(menuItem).hasClass('menu-item-with-suboptions')) {
        _menuItemWithSubOptionsOnkeydown(menuItem, link, parent, keycode)
    } else {
        _menuItemRootOnkeydown(menuItem, link, parent, keycode)
    }
}

function _sub_menuItemOnkeydown(menuItem, link, parent, keycode) {
    const menuItemWithSuboptions = $(parent).parent()
    const allMenuItems = $(parent).children('.menu-li')
    const amountOfMenuItems = $(allMenuItems).length
    const indexOfMenuItem = $(allMenuItems).index(menuItem)     
    if (keycode == _down_arrow) {
        if (indexOfMenuItem < amountOfMenuItems-1) {
            const nextMenuItemLink = $(allMenuItems[indexOfMenuItem+1]).children('.menu-a')[0]
            $(nextMenuItemLink).focus()
        } else {
            const nextMenuItemLink = $(allMenuItems[0]).children('.menu-a')[0]
            $(nextMenuItemLink).focus()
        }
    } else if (keycode == _up_arrow) {
        if (indexOfMenuItem > 0) {
            const nextMenuItemLink = $(allMenuItems[indexOfMenuItem-1]).children('.menu-a')[0]
            $(nextMenuItemLink).focus()
        } else {
            const nextMenuItemLink = $(allMenuItems[amountOfMenuItems-1]).children('.menu-a')[0]
            $(nextMenuItemLink).focus()
        }
    } else if (keycode == _right_arrow || keycode == _left_arrow) {
        _submenuItemOnkeydownLeftOrRight(
            menuItemWithSuboptions, 
            $(menuItemWithSuboptions).children('.menu-a')[0], 
            $(menuItemWithSuboptions).parent(), 
            keycode)
    } else if (keycode == _esc) {
        _shrinkMenu(menuItemWithSuboptions, false, true)
    }
}

function _submenuItemOnkeydownLeftOrRight(menuItem, link, parent, keycode) {
    const menuItems = $(parent).children('li')
    const amountOfMenuItems = $(menuItems).length
    const indexOfMenuitem = $(menuItems).index(menuItem)
    var next
    if (keycode == _right_arrow) {
        if (indexOfMenuitem < amountOfMenuItems-1) {
            next = menuItems[indexOfMenuitem+1]
        } else {
            next = menuItems[0]
        }
    } else if (keycode == _left_arrow) {
        if (indexOfMenuitem > 0) {
            next = menuItems[indexOfMenuitem-1]
        } else {
            next = menuItems[amountOfMenuItems-1]
        }
    }
    if ($(next).hasClass('menu-item-with-suboptions')) {
        _expandMenu(next, false, false)
    } 
    $(next).children('.menu-a')[0].focus()
    _shrinkMenu(menuItem, false, false)
}

function _menuItemWithSubOptionsOnkeydown(menuItem, link, parent, keycode) {
    if (keycode == _left_arrow || keycode == _right_arrow) {
        _menuItemRootOnkeydown(menuItem, link, parent, keycode)
    } else {
        const shrinkExpandIcon = $(link).children('.menu-a-i-suboptions')
        const submenu = $(menuItem).children('.menu-submenu-ul')[0]
        const allSubmenuItems = $(submenu).children('.menu-li')
        const amountOfSubmenuItems = $(allSubmenuItems).length
        const submenuFirstItem = allSubmenuItems[0]
        const submenuFirstLink = $(submenuFirstItem).children('.menu-a')[0]
        const submenuLastItem = allSubmenuItems[amountOfSubmenuItems-1]
        const submenuLastLink = $(submenuLastItem).children('.menu-a')[0]
        if ((keycode == _esc) && _isSubmenuExpanded(menuItem)) {
            $(submenu).css('display', 'none')
            $(link).attr('aria-expanded', 'false')
            _setExpandIcon(shrinkExpandIcon)
        } else if (keycode == _down_arrow || keycode == _enter || keycode == _space) {
            $(submenu).css('display', 'block')
            _setShrinkIcon(shrinkExpandIcon)
            $(submenuFirstLink).focus()
            $(link).attr('aria-expanded', 'true')
            $(menuItem).removeAttr('onkeydown')
        } else if (keycode == _up_arrow) {
            $(submenu).css('display', 'block')
            _setShrinkIcon(shrinkExpandIcon)
            $(submenuLastLink).focus()
            $(link).attr('aria-expanded', 'true')
            $(menuItem).removeAttr('onkeydown')
        }
    }
}

function _menuItemRootOnkeydown(menuItem, link, parent, keycode) {
    const menuItems = $(parent).children('li')
    const amountOfMenuItems = $(menuItems).length
    const indexOfMenuitem = $(menuItems).index(menuItem)
    var next
    if (keycode == _right_arrow) {
        if (indexOfMenuitem < amountOfMenuItems-1) {
            next = menuItems[indexOfMenuitem+1]
        } else {
            next = menuItems[0]
        }
    } else if (keycode == _left_arrow) {
        if (indexOfMenuitem > 0) {
            next = menuItems[indexOfMenuitem-1]
        } else {
            next = menuItems[amountOfMenuItems-1]
        }
    } 
    if (isObject(next)) {
        $(next).children('.menu-a')[0].focus()
    }
}
