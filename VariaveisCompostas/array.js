let num = [1, 2, 3, 4]
/*for (let i = 0; i <= num.length; i++) {
    console.log(num[i])
}*/

for(let i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}