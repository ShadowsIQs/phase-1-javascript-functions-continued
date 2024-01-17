function saturdayFun(word1 = "roller-skate"){
    return (`This Saturday, I want to ${word1}!`)
}
saturdayFun()

function mondayWork(word2 = "go to the office"){
    return (`This Monday, I will ${word2}.`)
}
mondayWork()

// function wrapAdjective(){
// const wrap = wrapAdjective(`*`) <--- can't use because it will make a loop hole
// can't call a funcion in a function.
// return function (msg = "special"){
// const hey = wrap (`You are ${msg}!`)
//         return hey
//     }
// }

function wrapAdjective(symbol = "*"){
     return function (msg = "special"){
                const hey =  (`You are ${symbol}${msg}${symbol}!`)
                return hey
            }
}

console.log(wrapAdjective("%")("a dedicated programmer"))