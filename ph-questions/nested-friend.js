/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let myResult = 88
let frndResult = 95

if (myResult > 80) {
    if (frndResult > 80) {
        console.log("Treat de beda")
    } else if (frndResult < 80 && frndResult >= 60) {
        console.log("Next time balo koris bondhu")
    } else if (frndResult < 60 && frndResult >= 40) {
        console.log("Message unseen kore rhako halar***er")
    } else if (frndResult < 40) {
        console.log("Halare block kor")
    }
} else {
    console.log("Gore geya gumaw tumi")
}