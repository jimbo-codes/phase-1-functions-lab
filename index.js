// Code your solution in this file
function distanceFromHqInBlocks(input1){
    if(input1>42){
    return input1-42;
    }
    else if(input1<42){
        return 42-input1;
    }
    else
    return 0;
}

function distanceFromHqInFeet(input1){
return distanceFromHqInBlocks(input1)*264;
}

function distanceTravelledInFeet(input1,input2){
return Math.abs((input1-input2)*264);
}

function calculatesFarePrice(input1,input2){
    if(distanceTravelledInFeet(input1,input2)<400)
    return 0;
    else if(distanceTravelledInFeet(input1,input2)<=2000)
    return (distanceTravelledInFeet(input1,input2)-400)*.02
    else if(distanceTravelledInFeet(input1,input2)>2000 && distanceTravelledInFeet(input1,input2)<2500)
    return 25;
    else
    return "cannot travel that far";
}