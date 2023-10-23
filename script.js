
let word = + prompt("number")
while (isNaN(word) || word == 0 ) {
     word = + prompt ("not right")
}
 box = ""
for (let i = 1; i < (word + 1); i++) {
    if (i == 1 ) {
        box +=  i +" human..."
    }
    else{
        box +=  i +" humans.. "
       
    }
    
}
alert (box)
