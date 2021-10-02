current_language = "en"

/**
 * change the language based on the parametter
 * @param {string} lang 
 */
let changeLanguage = (lang) => {
    // get every elements with the attribute 'en'
    let selector = document.querySelectorAll('[en]')

    selector.forEach(s => {
        s.innerHTML = s.getAttribute(lang)
    })

    // global variable to store the language
    current_language=lang
}

/**
 * update the language based on the url params e.g ?lang=fr
 */
let updateParams = () => {
    let params = new URLSearchParams(location.search)
    if(params.has('lang')) {
        let lang = params.get('lang')
        changeLanguage(lang)
    }
}