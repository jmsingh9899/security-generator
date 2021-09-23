var generateBtn = document.querySelector("#generate");
var lOption = "";
var uOption = "";
var numeric = 0;
var sOption = "";
var finalPass = "";

var passwordLength = function () {
    userChoice = prompt("Please select a character length for your password using a numberbetween 8 and 128");
    var passLength = Number(userChoice);
    if (typeof (passLength) === 'number' && passLength >= 8 && passLength <= 128) {
        return passLength;
    } else {
        passwordLength();
    }
}

function generateLCase() {
    var possible = Math.floor(Math.random() * 123)
    if (possible >= 97) {
        lOption = String.fromCharCode(possible);
        return lOption;
    } else {
        generateLCase();
    }

}


var generateUCase = function () {
    var possible = Math.floor(Math.random() * 91)
    if (possible >= 65) {
        return uOption = String.fromCharCode(possible)
    } else {
        generateUCase();
    }
}

var generateNCase = function () {
    var numeric = Math.floor(Math.random() * 10)
    return (numeric);
}

var generateSCase = function () {
    choices = ["!", "@", "#", "$", "%", "^", "&", "*"];
    return sOption = choices[Math.floor(Math.random() * choices.length)];

}

var loweredCase = function (x) {
    userChoice = confirm("Do you want lower case characters?");
    if (userChoice) {
        x.push("a");
    }
}

var upperCase = function (x) {
    userChoice = confirm("Do you want upper case characters?");
    if (userChoice) {
        x.push("A");
    }
}

var numberCase = function (x) {
    userChoice = confirm("Do you want numeric characters?");
    if (userChoice) {
        x.push("0");
    }
}

var specialCase = function (x) {
    userChoice = confirm("Do you want special characters?");
    if (userChoice) {
        x.push("@");
    }
}

var paramenterCheck = function (x) {
    if (x.length == 0) {
        alert("You must select at least one criteria");
        start();
    }
}

var newPass = function (x, y, e) {
    for (let i = 0; i < y; i++) {
        select = Math.floor(Math.random() * 4)
        z = x[select];
        if (z == "a") {
            generateLCase();
            e.push(lOption);
        } else if (z == "A") {
            generateUCase();
            e.push(uOption);
        } else if (z == "0") {
            generateNCase();
            e.push(numeric);
        } else if (z == "@") {
            generateSCase();
            e.push(sOption);
        }
    }
}

var final = function (x) {
    finalPass = x.join("");
    return finalPass
}

var start = function () {
    var parameters = [];
    var pass = [];
    pLength = passwordLength();
    loweredCase(parameters);
    upperCase(parameters);
    numberCase(parameters);
    specialCase(parameters);
    newPass(parameters, pLength, pass);
    final(pass);
    console.log(finalPass);
}
var finalPass = function () {

}
var generatePassword = function () {
    if (window.confirm("Ready to make your password?")) {
        start();
        return (finalPass);
    } else {
        console.log("goodbye")
    };
};
generateSCase();
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
