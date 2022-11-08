/**
 * Capitalize a string
 * @param {string} str 
 * @returns string
 */
const cap = (str='') => {
    if(str.includes('_')) {
        let split = str.split('_')
        let result = ''
        for(let s of split) {
            result = `${result} ${s.charAt(0).toUpperCase()}${s.slice(1, s.length)}`
        }
        return result
    }
    return str.charAt(0).toUpperCase()+str.slice(1, str.length)
}

/**
 * Get changelog for a cofh mod.
 * @param {string} mod 
 */
async function getChangelog(mod) {
    let mod_data = await (await fetch(`https://raw.githubusercontent.com/CoFH/Version/main/${mod}/update.json`)).json()

    let versions = Object.keys(mod_data)

    // remove "homepage" and "promos" from the keys
    versions.shift() // homepage
    versions.pop() // promos

    let div = document.createElement('div')

    // label stuff for the select
    let label = document.createElement('label')
    label.innerHTML = `select ${cap(mod)} version to view changelog`
    label.htmlFor=`version_select_${mod}`
    div.append(label)

    // selector
    let version_select = document.createElement('select')
    version_select.name = `version_select_${mod}`
    version_select.classList.add('form-control')

    let option = document.createElement('option')
    option.value = 'empty'
    option.selected = true
    option.innerHTML = 'Select a version'
    version_select.append(option)

    versions.forEach(value => {
        let version_obj = mod_data[value]
        let version = Object.keys(version_obj)
        version.forEach(v => {
            let option = document.createElement('option')
            option.value = `${value}:${v}`
            option.innerHTML = `${value} ${v}`
            version_select.append(option)
        })
    })

    version_select.onclick=function(event) {
        let p = document.getElementById(`result_${mod}`)
        // checking if it's not empty
        if(version_select.value != 'empty') {
            let value = version_select.value.split(':')
            p.innerHTML = mod_data[value[0]][value[1]]
        }
        else {
            p.innerHTML = ''
        }
    }

    div.append(version_select)

    let result = document.createElement('p')
    result.id = `result_${mod}`
    div.append(result)


    document.getElementById('container').append(div)

}

async function setChangelog() {
    getChangelog('archers_paradox')
    getChangelog('cofh_core')
    getChangelog('ensorcellation')
    getChangelog('thermal')
}

setChangelog()