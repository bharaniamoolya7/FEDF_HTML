//Hours
//if Hour is between 6AM and 12PM : Good Morning 
//if Hour is between 12PM and 6PM : Good Afternoon
//if Hour is between 6PM and 12AM : Good Night 
let hour = 12;  

if (hour >= 6 && hour < 12) {
    console.log("Good Morning");
} else if (hour >= 12 && hour < 18) {
    console.log("Good Afternoon");
} else if (hour >= 18 && hour < 24) {
    console.log("Good Night");
} else if (hour >= 0 && hour < 6) {
    console.log("Good Night");
} else {
    console.log("Invalid hour entered");
}
