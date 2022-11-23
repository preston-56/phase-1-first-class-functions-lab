// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return[drivers[0],drivers[1]]
}


const returnLastTwoDrivers = (drivers) => {
    const length = drivers.length - 1;
    return[drivers[length-1], drivers[length]]
}

// return a function
//  multiply a given value [num] using the created multiplier [fare]
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(num){
    return function(fare){
        return fare * num
    }
}

// double fare
const fareDoubler = createFareMultiplier(2);

// triple fare
const fareTripler = createFareMultiplier(3);

// whichdriver passed as second argument
// whichdriver is an argument for either [arguments], `returnFirstTwoDrivers()` or `returnLastTwoDrivers()` arguments.
function selectDifferentDrivers(arrayOfDrivers, whichdriver){
    return(whichdriver(arrayOfDrivers));
}

