function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x == "" || x != 627) {
        text = "Input not valid";
    } else {
        location.href = "./Example.html";
    }
    document.getElementById("demo").innerHTML = text;
}