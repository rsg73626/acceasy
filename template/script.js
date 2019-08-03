
function didStartSetUp() {
    /* 
    Replace this implementation for any action you want to perform 
    before the framework execution.
    */
   print(' *** DID START SETUP *** ')
}

function getHeaderObjects() {
    // Build your header page content
    return [h('This is the <header>')]
}

function getMainObjects() { 
    // Build your page main content
    return [h('This is the <main>')]
}

function getFooterObjects() {
    // Build your footer page content
    return [h('This is the <footer>')]
}

function didFinishSetUp() {
 /* 
    Replace this implementation for any action you want to perform 
    after the framework finished running.
    */
   print(' *** DID END SETUP *** ')
}