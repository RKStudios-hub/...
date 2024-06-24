var 
// Text lines
line = [],

// Last print time for printCharacter()
lastPrintTime = 0,

// Flag to not clear the screen if it's the last line
lastLine = false,

character = [];

cracked = '';

line[0] = 'Hello there...',
line[1] = 'This is me RK...',
line[2] = 'I want to tell you with very much happiness that...',
line[3] = 'This webpage will not work on Android...',
line[4] = 'Because I was too lazy to make it Responsive... (￣⩌￣!)',
line[5] = 'If you are using a Computer then set the text size to 80% for best experience...',
line[6] = '...',
line[7] = '...',
line[8] = 'Done?',
line[9] = 'Now press that button on the bottom right to enter.';

window.onload = function() {
    printAllLine();
    crackAllCharacter('RK Studios');
    setTimeout(function() {
        document.getElementById("screen").innerHTML = cracked;
    }, lastPrintTime + 3000);
}

printAllLine = function() {
    for (var i = 0; i < line.length; i++) {
        if (i == line.length - 1)
            lastLine = true;
        printCharacter(line[i]);
    }
}

printCharacter = function(str) {
    for (var i = 0; i < str.length; i++) {
        printSpeed = 100 * usefloor(1, 3);
        printTime = printSpeed + lastPrintTime;
        setTimeout(function(ch) {
            document.getElementById("screen").innerHTML += ch;
        }, printTime, str.charAt(i)); // Use function arguments for setTimeout
        lastPrintTime = printTime;
    }
    lastPrintTime = printTime + (1000 * usefloor(2, 4));
    if (!lastLine) {
        setTimeout(function() {
            document.getElementById("screen").innerHTML = "";
        }, lastPrintTime);
    } else {
        // Show the link after the last line
        setTimeout(showLink, lastPrintTime);
    }
}

crackCharacter = function(str) {
    for (var i = 0; i < character.length; i++) {
        printSpeed = 50 * usefloor(1, 2);
        printTime = printSpeed + lastPrintTime;
        var randChar = setTimeout(function(ch) {
            document.getElementById("screen").innerHTML = cracked + ch;
        }, printTime, character[i]); // Use function arguments for setTimeout
        if (character[i] == str[0]) {
            cracked = cracked + character[i];
            setTimeout(function() {
                document.getElementById("screen").innerHTML = cracked;
            }, printTime + 100);
            clearTimeout(randChar);
            break;
        }
        lastPrintTime = printTime;
    }
}

crackAllCharacter = function(str) {
    for (var i = 0; i < str.length; i++) {
        crackCharacter(str[i]);
    }
}

// Function to show the link
function showLink() {
    document.getElementById("enterLink").style.display = "inline-block";
}

function usefloor(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
