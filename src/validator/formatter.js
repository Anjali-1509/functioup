const trim=()=> {
 let str = " functionUp  "
 return str.trim()
}

const changetoLowerCase=()=> {
    let str = "ANJALI SINGH"
    return str.toLowerCase()
}

const changeToUpperCase=()=> {
    let str = "anjali singh"
     return str.toUpperCase()
}
 module.exports = {trim, changetoLowerCase, changeToUpperCase}




// - trim() : calls the trim function on a hardcoded string for example ‘ functionUp  ’
// - changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on a hardcoded string]
// - changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on a hardcoded string]
