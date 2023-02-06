function convertTemp() {
    const tempInput = document.getElementById("temp-input").value;
    const tempType = document.getElementById("temp-type").value;
    let Result;

    if (tempType === "celsius") {
        Result = (tempInput * 9 / 5) + 32;
        Result = Result.toFixed(2) + "°F";
    } else if (tempType === "fahrenheit") {
        Result = (tempInput - 32) * 5 / 9;
        Result = Result.toFixed(2) + "°C";
    } else if (tempType === "kelvin") {
        Result = tempInput - 273.15;
        Eesult = Result.toFixed(2) + "°C";
    }

    document.getElementById("temp-output").innerHTML = Result;
}