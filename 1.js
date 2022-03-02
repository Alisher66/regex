// 1) Проверка надежности пароля

let regex = [/.{8,}/g, /[a-z]/g, /[A-Z]/g, /\d/g];


function setPassword(pass, regex) {
    let res = regex.every(reg => reg.test(pass))
    return res
}

console.log(setPassword("123456aA.", regex));