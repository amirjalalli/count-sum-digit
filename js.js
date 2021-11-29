var userNumber = Number(prompt("enter your Number: "))
var sum = 0;
var conter = 0
while (userNumber / 10 != 0){
    sum += (userNumber % 10)
    conter++
    userNumber = Math.floor(userNumber / 10)
}
alert(sum)
alert(conter)