var eventType = prompt("Enter the event type: ");
var tempFarh = prompt(" Enter the temperature in fahrenheit: ");
var result = "Since it is ";
var resultAfterEvent = "";
var resultAfterTemp = "";

switch (eventType) {
    case "casual":
        resultAfterEvent = "Something comfy";
        break;
    case "semi-formal":
    resultAfterEvent = "A polo";
        break;
    case "formal":
    resultAfterEvent = "A suit";
        break;
    

}

if (tempFarh < 54) resultAfterTemp = "A coat";
else 
if (tempFarh >= 54 && tempFarh < 70) resultAfterTemp = "A jacket"
else resultAfterTemp = "No jacket";


result += tempFarh + " Degrees and you are going to a " + eventType + " event, you should wear " + resultAfterEvent + "and " + 
resultAfterTemp;

console.log(result);
