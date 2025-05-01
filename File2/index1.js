// function isBookingEligible(age, hasPassport){
//     if(age>18 && hasPassport==true){
//         console.log("Eligible")
//     }else{
//         console.log("Ineligible")
//     }

// }
// isBookingEligible(20, true)
// isBookingEligible(15, true)
// isBookingEligible(34, false)
// isBookingEligible(25, true)

// for(let i=3; i<=10; i++){
//     bag=""
//     for(let j=3; j<=i; j++){
//         bag +=j +" "
//     }
//     console.log(bag);
// }

function formatPassengerNames(arr){
    return arr
    .map(name=>name.trim())
    .map(name=>name.charAt(0).toUpperCase()+name.slice(1).toLowerCase())
    .sort();

}
const names=["Alice ","bob"," charlie","David"]
const formattedNames=formatPassengerNames(names)
console.log(formattedNames);