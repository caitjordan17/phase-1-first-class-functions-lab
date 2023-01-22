const returnFirstTwoDrivers = function(array){
    const halfArray = [...array]
    return halfArray.slice(0,2);
}

const returnLastTwoDrivers = function(array){
    const halfArray = [...array]
    return halfArray.slice(2,5);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number){
    let multiply = (fare) => fare * number
    return multiply;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (array, fn){
    return fn([...array]);
}
