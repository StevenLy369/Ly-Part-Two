var eventType = prompt("Enter the event type: ");
var tempFarh = prompt(" Enter the temperature in fahrenheit: ");
var result = "Since it is ";
var resultAfterEvent = "";
var resultAfterTemp = "";

switch (eventType) {
    case "casual":
        resultAfterEvent = "something comfy";
        break;
    case "semi-formal":
    resultAfterEvent = "a polo";
        break;
    case "formal":
    resultAfterEvent = "a suit";
        break;
    

}

if (tempFarh < 54) resultAfterTemp = " a coat ";
else 
if (tempFarh >= 54 && tempFarh < 70) resultAfterTemp = "a jacket"
else resultAfterTemp = " no jacket ";


result += tempFarh + " Degrees and you are going to a " + eventType + " event, you should wear " + resultAfterEvent + " and " + 
resultAfterTemp;

console.log(result);
