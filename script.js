let
square_1 = document.getElementById('square_1'),
square_2 = document.getElementById('square_2'),
square_3 = document.getElementById('square_3'),
square_4 = document.getElementById('square_4'),
square_5 = document.getElementById('square_5'),
square_6 = document.getElementById('square_6'),
square_7 = document.getElementById('square_7'),
square_8 = document.getElementById('square_8'),
square_9 = document.getElementById('square_9'),
square_10 = document.getElementById('square_10'),
square_11 = document.getElementById('square_11'),
square_12 = document.getElementById('square_12');
square_13 = document.getElementById('square_13');
square_14 = document.getElementById('square_14');
square_15 = document.getElementById('square_15');
square_16 = document.getElementById('square_16');
square_17 = document.getElementById('square_17');
square_18 = document.getElementById('square_18');


function numberPlus(squareOne, squareTwo) {
    squareOne.style.borderColor = 'transparent transparent transparent transparent';
    squareTwo.style.borderColor = 'transparent transparent transparent transparent';
}

function numberMinus(squareOne, squareTwo) {
    squareOne.style.borderColor = 'transparent transparent yellow transparent';
    squareTwo.style.borderColor = 'yellow transparent transparent transparent';
}

function numberNull(squareOne, squareTwo) {
    squareOne.style.borderColor = 'yellow yellow transparent yellow';
    squareTwo.style.borderColor = 'transparent yellow yellow yellow';
}

function numberOne(squareOne, squareTwo) {
    squareOne.style.borderColor = 'transparent yellow transparent transparent';
    squareTwo.style.borderColor = 'transparent yellow transparent transparent';
}

function numberTwo(squareOne, squareTwo) {
    squareOne.style.borderColor = 'yellow yellow yellow transparent';
    squareTwo.style.borderColor = 'yellow transparent yellow yellow';
}

function numberThree(squareOne, squareTwo) {
    squareOne.style.borderColor = 'yellow yellow yellow transparent';
    squareTwo.style.borderColor = 'yellow yellow yellow transparent';
}

function numberForth(squareOne, squareTwo) {
    squareOne.style.borderColor = 'transparent yellow yellow yellow';
    squareTwo.style.borderColor = 'yellow yellow transparent transparent';
}

function numberFifth(squareOne, squareTwo) {
    squareOne.style.borderColor = 'yellow transparent yellow yellow';
    squareTwo.style.borderColor = 'yellow yellow yellow transparent';
}

function numberSixth(squareOne, squareTwo) {
    squareOne.style.borderColor = 'yellow transparent yellow yellow';
    squareTwo.style.borderColor = 'yellow yellow yellow yellow';
}

function numberSeventh(squareOne, squareTwo) {
    squareOne.style.borderColor = 'yellow yellow transparent transparent';
    squareTwo.style.borderColor = 'transparent yellow transparent transparent';
}

function numberEight(squareOne, squareTwo) {
    squareOne.style.borderColor = 'yellow yellow yellow yellow';
    squareTwo.style.borderColor = 'yellow yellow yellow yellow';
}

function numberNinth(squareOne, squareTwo) {
    squareOne.style.borderColor = 'yellow yellow yellow yellow';
    squareTwo.style.borderColor = 'yellow yellow yellow transparent';
}

function clock() {
    let today = new Date(),
        hours = today.getHours(),
        minutes = today.getMinutes(),
        seconds = today.getSeconds();
    
    switch (hours) {
        case 0:
            numberNull(square_1, square_2);
            numberNull(square_3, square_4);
            break;

        case 1:
            numberNull(square_1, square_2);
            numberOne(square_3, square_4);
            break;
        case 2:
            numberNull(square_1, square_2);
            numberTwo(square_3, square_4);
            break;
        case 3:
            numberNull(square_1, square_2);
            numberThree(square_3, square_4);
            break;
        case 4:
            numberNull(square_1, square_2);
            numberForth(square_3, square_4);
            break;
        case 5:
            numberNull(square_1, square_2);
            numberFifth(square_3, square_4);
            break;
        case 6:
            numberNull(square_1, square_2);
            numberSixth(square_3, square_4);
            break;
        case 7:
            numberNull(square_1, square_2);
            numberSeventh(square_3, square_4);
            break;
        case 8:
            numberNull(square_1, square_2);
            numberEight(square_3, square_4);
            break;
        case 9:
            numberNull(square_1, square_2);
            numberNinth(square_3, square_4);
            break;
        case 10:
            numberOne(square_1, square_2);
            numberNull(square_3, square_4);
            break;
        case 11:
            numberOne(square_1, square_2);
            numberOne(square_3, square_4);
            break;
        case 12:
            numberOne(square_1, square_2);
            numberTwo(square_3, square_4);
            break;
        case 13:
            numberOne(square_1, square_2);
            numberThree(square_3, square_4);
            break;
        case 14:
            numberOne(square_1, square_2);
            numberForth(square_3, square_4);
            break;
        case 15:
            numberOne(square_1, square_2);
            numberFifth(square_3, square_4);
            break;
        case 16:
            numberOne(square_1, square_2);
            numberSixth(square_3, square_4);
            break;
        case 17:
            numberOne(square_1, square_2);
            numberSeventh(square_3, square_4);
            break;
        case 18:
            numberOne(square_1, square_2);
            numberEight(square_3, square_4);
            break;
        case 19:
            numberOne(square_1, square_2);
            numberNinth(square_3, square_4);
            break;
        case 20:
            numberTwo(square_1, square_2);
            numberNull(square_3, square_4);
            break;
        case 21:
            numberTwo(square_1, square_2);
            numberOne(square_3, square_4);
            break;
        case 22:
            numberTwo(square_1, square_2);
            numberTwo(square_3, square_4);
            break;
        case 23:
            numberTwo(square_1, square_2);
            numberThree(square_3, square_4);
            break;
    }

    switch (minutes) {
        case 0:
            numberNull(square_5, square_6);
            numberNull(square_7, square_8);
            break;
        case 1:
            numberNull(square_5, square_6);
            numberOne(square_7, square_8);
            break;
        case 2:
            numberNull(square_5, square_6);
            numberTwo(square_7, square_8);
            break;
        case 3:
            numberNull(square_5, square_6);
            numberThree(square_7, square_8);
            break;
        case 4:
            numberNull(square_5, square_6);
            numberForth(square_7, square_8);
            break;
        case 5:
            numberNull(square_5, square_6);
            numberFifth(square_7, square_8);
            break;
        case 6:
            numberNull(square_5, square_6);
            numberSixth(square_7, square_8);
            break;
        case 7:
            numberNull(square_5, square_6);
            numberSeventh(square_7, square_8);
            break;
        case 8:
            numberNull(square_5, square_6);
            numberEight(square_7, square_8);
            break;
        case 9:
            numberNull(square_5, square_6);
            numberNinth(square_7, square_8);
            break;
        case 10:
            numberOne(square_5, square_6);
            numberNull(square_7, square_8);
            break;
        case 11:
            numberOne(square_5, square_6);
            numberOne(square_7, square_8);
            break;
        case 12:
            numberOne(square_5, square_6);
            numberTwo(square_7, square_8);
            break;
        case 13:
            numberOne(square_5, square_6);
            numberThree(square_7, square_8);
            break;
        case 14:
            numberOne(square_5, square_6);
            numberForth(square_7, square_8);
            break;
        case 15:
            numberOne(square_5, square_6);
            numberFifth(square_7, square_8);
            break;
        case 16:
            numberOne(square_5, square_6);
            numberSixth(square_7, square_8);
            break;
        case 17:
            numberOne(square_5, square_6);
            numberSeventh(square_7, square_8);
            break;
        case 18:
            numberOne(square_5, square_6);
            numberEight(square_7, square_8);
            break;
        case 19:
            numberOne(square_5, square_6);
            numberNinth(square_7, square_8);
            break;
        case 20:
            numberTwo(square_5, square_6);
            numberNull(square_7, square_8);
            break;
        case 21:
            numberTwo(square_5, square_6);
            numberOne(square_7, square_8);
            break;
        case 22:
            numberTwo(square_5, square_6);
            numberTwo(square_7, square_8);
            break;
        case 23:
            numberTwo(square_5, square_6);
            numberThree(square_7, square_8);
            break;
        case 24:
            numberTwo(square_5, square_6);
            numberForth(square_7, square_8);
            break;
        case 25:
            numberTwo(square_5, square_6);
            numberFifth(square_7, square_8);
            break;
        case 26:
            numberTwo(square_5, square_6);
            numberSixth(square_7, square_8);
            break;
        case 27:
            numberTwo(square_5, square_6);
            numberSeventh(square_7, square_8);
            break;
        case 28:
            numberTwo(square_5, square_6);
            numberEight(square_7, square_8);
            break;
        case 29:
            numberTwo(square_5, square_6);
            numberNinth(square_7, square_8);
            break;
        case 30:
            numberThree(square_5, square_6);
            numberNull(square_7, square_8);
            break;
        case 31:
            numberThree(square_5, square_6);
            numberOne(square_7, square_8);
            break;
        case 32:
            numberThree(square_5, square_6);
            numberTwo(square_7, square_8);
            break;
        case 33:
            numberThree(square_5, square_6);
            numberThree(square_7, square_8);
            break;
        case 34:
            numberThree(square_5, square_6);
            numberForth(square_7, square_8);
            break;
        case 35:
            numberThree(square_5, square_6);
            numberFifth(square_7, square_8);
            break;
        case 36:
            numberThree(square_5, square_6);
            numberSixth(square_7, square_8);
            break;
        case 37:
            numberThree(square_5, square_6);
            numberSeventh(square_7, square_8);
            break;
        case 38:
            numberThree(square_5, square_6);
            numberEight(square_7, square_8);
            break;
        case 39:
            numberThree(square_5, square_6);
            numberNinth(square_7, square_8);
            break;
        case 40:
            numberForth(square_5, square_6);
            numberNull(square_7, square_8);
            break;
        case 41:
            numberForth(square_5, square_6);
            numberOne(square_7, square_8);
            break;
        case 42:
            numberForth(square_5, square_6);
            numberTwo(square_7, square_8);
            break;
        case 43:
            numberForth(square_5, square_6);
            numberThree(square_7, square_8);
            break;
        case 44:
            numberForth(square_5, square_6);
            numberForth(square_7, square_8);
            break;
        case 45:
            numberForth(square_5, square_6);
            numberFifth(square_7, square_8);
            break;
        case 46:
            numberForth(square_5, square_6);
            numberSixth(square_7, square_8);
            break;
        case 47:
            numberForth(square_5, square_6);
            numberSeventh(square_7, square_8);
            break;
        case 48:
            numberForth(square_5, square_6);
            numberEight(square_7, square_8);
            break;
        case 49:
            numberForth(square_5, square_6);
            numberNinth(square_7, square_8);
            break;
        case 50:
            numberFifth(square_5, square_6);
            numberNull(square_7, square_8);
            break;
        case 51:
            numberFifth(square_5, square_6);
            numberOne(square_7, square_8);
            break;
        case 52:
            numberFifth(square_5, square_6);
            numberTwo(square_7, square_8);
            break;
        case 53:
            numberFifth(square_5, square_6);
            numberSeventh(square_7, square_8);
            break;
        case 54:
            numberFifth(square_5, square_6);
            numberForth(square_7, square_8);
            break;
        case 55:
            numberFifth(square_5, square_6);
            numberFifth(square_7, square_8);
            break;
        case 56:
            numberFifth(square_5, square_6);
            numberSixth(square_7, square_8);
            break;
        case 57:
            numberFifth(square_5, square_6);
            numberSeventh(square_7, square_8);
            break;
        case 58:
            numberFifth(square_5, square_6);
            numberEight(square_7, square_8);
            break;
        case 59:
            numberFifth(square_5, square_6);
            numberNinth(square_7, square_8);
            break;
    }

    switch (seconds) {
        case 0:
            numberNull(square_9, square_10);
            numberNull(square_11, square_12);
            break;
        case 1:
            numberNull(square_9, square_10);
            numberOne(square_11, square_12);
            break;
        case 2:
            numberNull(square_9, square_10);
            numberTwo(square_11, square_12);
            break;
        case 3:
            numberNull(square_9, square_10);
            numberThree(square_11, square_12);
            break;
        case 4:
            numberNull(square_9, square_10);
            numberForth(square_11, square_12);
            break;
        case 5:
            numberNull(square_9, square_10);
            numberFifth(square_11, square_12);
            break;
        case 6:
            numberNull(square_9, square_10);
            numberSixth(square_11, square_12);
            break;
        case 7:
            numberNull(square_9, square_10);
            numberSeventh(square_11, square_12);
            break;
        case 8:
            numberNull(square_9, square_10);
            numberEight(square_11, square_12);
            break;
        case 9:
            numberNull(square_9, square_10);
            numberNinth(square_11, square_12);
            break;
        case 10:
            numberOne(square_9, square_10);
            numberNull(square_11, square_12);
            break;
        case 11:
            numberOne(square_9, square_10);
            numberOne(square_11, square_12);
            break;
        case 12:
            numberOne(square_9, square_10);
            numberTwo(square_11, square_12);
            break;
        case 13:
            numberOne(square_9, square_10);
            numberThree(square_11, square_12);
            break;
        case 14:
            numberOne(square_9, square_10);
            numberForth(square_11, square_12);
            break;
        case 15:
            numberOne(square_9, square_10);
            numberFifth(square_11, square_12);
            break;
        case 16:
            numberOne(square_9, square_10);
            numberSixth(square_11, square_12);
            break;
        case 17:
            numberOne(square_9, square_10);
            numberSeventh(square_11, square_12);
            break;
        case 18:
            numberOne(square_9, square_10);
            numberEight(square_11, square_12);
            break;
        case 19:
            numberOne(square_9, square_10);
            numberNinth(square_11, square_12);
            break;
        case 20:
            numberTwo(square_9, square_10);
            numberNull(square_11, square_12);
            break;
        case 21:
            numberTwo(square_9, square_10);
            numberOne(square_11, square_12);
            break;
        case 22:
            numberTwo(square_9, square_10);
            numberTwo(square_11, square_12);
            break;
        case 23:
            numberTwo(square_9, square_10);
            numberThree(square_11, square_12);
            break;
        case 24:
            numberTwo(square_9, square_10);
            numberForth(square_11, square_12);
            break;
        case 25:
            numberTwo(square_9, square_10);
            numberFifth(square_11, square_12);
            break;
        case 26:
            numberTwo(square_9, square_10);
            numberSixth(square_11, square_12);
            break;
        case 27:
            numberTwo(square_9, square_10);
            numberSeventh(square_11, square_12);
            break;
        case 28:
            numberTwo(square_9, square_10);
            numberEight(square_11, square_12);
            break;
        case 29:
            numberTwo(square_9, square_10);
            numberNinth(square_11, square_12);
            break;
        case 30:
            numberThree(square_9, square_10);
            numberNull(square_11, square_12);
            break;
        case 31:
            numberThree(square_9, square_10);
            numberOne(square_11, square_12);
            break;
        case 32:
            numberThree(square_9, square_10);
            numberTwo(square_11, square_12);
            break;
        case 33:
            numberThree(square_9, square_10);
            numberThree(square_11, square_12);
            break;
        case 34:
            numberThree(square_9, square_10);
            numberForth(square_11, square_12);
            break;
        case 35:
            numberThree(square_9, square_10);
            numberFifth(square_11, square_12);
            break;
        case 36:
            numberThree(square_9, square_10);
            numberSixth(square_11, square_12);
            break;
        case 37:
            numberThree(square_9, square_10);
            numberSeventh(square_11, square_12);
            break;
        case 38:
            numberThree(square_9, square_10);
            numberEight(square_11, square_12);
            break;
        case 39:
            numberThree(square_9, square_10);
            numberNinth(square_11, square_12);
            break;
        case 40:
            numberForth(square_9, square_10);
            numberNull(square_11, square_12);
            break;
        case 41:
            numberForth(square_9, square_10);
            numberOne(square_11, square_12);
            break;
        case 42:
            numberForth(square_9, square_10);
            numberTwo(square_11, square_12);
            break;
        case 43:
            numberForth(square_9, square_10);
            numberThree(square_11, square_12);
            break;
        case 44:
            numberForth(square_9, square_10);
            numberForth(square_11, square_12);
            break;
        case 45:
            numberForth(square_9, square_10);
            numberFifth(square_11, square_12);
            break;
        case 46:
            numberForth(square_9, square_10);
            numberSixth(square_11, square_12);
            break;
        case 47:
            numberForth(square_9, square_10);
            numberSeventh(square_11, square_12);
            break;
        case 48:
            numberForth(square_9, square_10);
            numberEight(square_11, square_12);
            break;
        case 49:
            numberForth(square_9, square_10);
            numberNinth(square_11, square_12);
            break;
        case 50:
            numberFifth(square_9, square_10);
            numberNull(square_11, square_12);
            break;
        case 51:
            numberFifth(square_9, square_10);
            numberOne(square_11, square_12);
            break;
        case 52:
            numberFifth(square_9, square_10);
            numberTwo(square_11, square_12);
            break;
        case 53:
            numberFifth(square_9, square_10);
            numberSeventh(square_11, square_12);
            break;
        case 54:
            numberFifth(square_9, square_10);
            numberForth(square_11, square_12);
            break;
        case 55:
            numberFifth(square_9, square_10);
            numberFifth(square_11, square_12);
            break;
        case 56:
            numberFifth(square_9, square_10);
            numberSixth(square_11, square_12);
            break;
        case 57:
            numberFifth(square_9, square_10);
            numberSeventh(square_11, square_12);
            break;
        case 58:
            numberFifth(square_9, square_10);
            numberEight(square_11, square_12);
            break;
        case 59:
            numberFifth(square_9, square_10);
            numberNinth(square_11, square_12);
            break;
    }
}

setInterval(clock, 1000);

fetch('https://api.weatherapi.com/v1/current.json?key=d183b844252547c6bd2130631241201&q=Khimki&aqi=no')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        temp = data['current']['temp_c'];
        switch (temp) {
            case 0:
                numberPlus(square_13, square_14);
                numberNull(square_15, square_16);
                numberNull(square_17, square_18);
                break;
            case 1:
                numberPlus(square_13,square_14)
                numberNull(square_15, square_16);
                numberOne(square_17, square_18);
                break;
            case 2:
                numberPlus(square_13,square_14)
                numberNull(square_15, square_16);
                numberTwo(square_17, square_18);
                break;
            case 3:
                numberPlus(square_13,square_14)
                numberNull(square_15, square_16);
                numberThree(square_17, square_18);
                break;
            case 4:
                numberPlus(square_13,square_14)
                numberNull(square_15, square_16);
                numberForth(square_17, square_18);
                break;
            case 5:
                numberPlus(square_13,square_14)
                numberNull(square_15, square_16);
                numberFifth(square_17, square_18);
                break;
            case 6:
                numberPlus(square_13,square_14)
                numberNull(square_15, square_16);
                numberSixth(square_17, square_18);
                break;
            case 7:
                numberPlus(square_13,square_14)
                numberNull(square_15, square_16);
                numberSeventh(square_17, square_18);
                break;
            case 8:
                numberPlus(square_13,square_14)
                numberNull(square_15, square_16);
                numberEight(square_17, square_18);
                break;
            case 9:
                numberPlus(square_13,square_14)
                numberNull(square_15, square_16);
                numberNinth(square_17, square_18);
                break;
            case 10:
                numberPlus(square_13,square_14)
                numberOne(square_15, square_16);
                numberNull(square_17, square_18);
                break;
            case 11:
                numberPlus(square_13,square_14)
                numberOne(square_15, square_16);
                numberOne(square_17, square_18);
                break;
            case 12:
                numberPlus(square_13,square_14)
                numberOne(square_15, square_16);
                numberTwo(square_17, square_18);
                break;
            case 13:
                numberPlus(square_13,square_14)
                numberOne(square_15, square_16);
                numberThree(square_17, square_18);
                break;
            case 14:
                numberPlus(square_13,square_14)
                numberOne(square_15, square_16);
                numberForth(square_17, square_18);
                break;
            case 15:
                numberPlus(square_13,square_14)
                numberOne(square_15, square_16);
                numberFifth(square_17, square_18);
                break;
            case 16:
                numberPlus(square_13,square_14)
                numberOne(square_15, square_16);
                numberSixth(square_17, square_18);
                break;
            case 17:
                numberPlus(square_13,square_14)
                numberOne(square_15, square_16);
                numberSeventh(square_17, square_18);
                break;
            case 18:
                numberPlus(square_13,square_14)
                numberOne(square_15, square_16);
                numberEight(square_17, square_18);
                break;
            case 19:
                numberPlus(square_13,square_14)
                numberOne(square_15, square_16);
                numberNinth(square_17, square_18);
                break;
            case 20:
                numberPlus(square_13,square_14)
                numberTwo(square_15, square_16);
                numberNull(square_17, square_18);
                break;
            case 21:
                numberPlus(square_13,square_14)
                numberTwo(square_15, square_16);
                numberOne(square_17, square_18);
                break;
            case 22:
                numberPlus(square_13,square_14)
                numberTwo(square_15, square_16);
                numberTwo(square_17, square_18);
                break;
            case 23:
                numberPlus(square_13,square_14)
                numberTwo(square_15, square_16);
                numberThree(square_17, square_18);
                break;
            case 24:
                numberPlus(square_13,square_14)
                numberTwo(square_15, square_16);
                numberForth(square_17, square_18);
                break;
            case 25:
                numberPlus(square_13,square_14)
                numberTwo(square_15, square_16);
                numberFifth(square_17, square_18);
                break;
            case 26:
                numberPlus(square_13,square_14)
                numberTwo(square_15, square_16);
                numberSixth(square_17, square_18);
                break;
            case 27:
                numberPlus(square_13,square_14)
                numberTwo(square_15, square_16);
                numberSeventh(square_17, square_18);
                break;
            case 28:
                numberPlus(square_13,square_14)
                numberTwo(square_15, square_16);
                numberEight(square_17, square_18);
                break;
            case 29:
                numberPlus(square_13,square_14)
                numberTwo(square_15, square_16);
                numberNinth(square_17, square_18);
                break;
            case 30:
                numberPlus(square_13,square_14)
                numberThree(square_15, square_16);
                numberNull(square_17, square_18);
                break;
            case 31:
                numberPlus(square_13,square_14)
                numberThree(square_15, square_16);
                numberOne(square_17, square_18);
                break;
            case 32:
                numberPlus(square_13,square_14)
                numberThree(square_15, square_16);
                numberTwo(square_17, square_18);
                break;
            case 33:
                numberPlus(square_13,square_14)
                numberThree(square_15, square_16);
                numberThree(square_17, square_18);
                break;
            case 34:
                numberPlus(square_13,square_14)
                numberThree(square_15, square_16);
                numberForth(square_17, square_18);
                break;
            case 35:
                numberPlus(square_13,square_14)
                numberThree(square_15, square_16);
                numberFifth(square_17, square_18);
                break;
            case 36:
                numberPlus(square_13,square_14)
                numberThree(square_15, square_16);
                numberSixth(square_17, square_18);
                break;
            case 37:
                numberPlus(square_13,square_14)
                numberThree(square_15, square_16);
                numberSeventh(square_17, square_18);
                break;
            case 38:
                numberPlus(square_13,square_14)
                numberThree(square_15, square_16);
                numberEight(square_17, square_18);
                break;
            case 39:
                numberPlus(square_13,square_14)
                numberThree(square_15, square_16);
                numberNinth(square_17, square_18);
                break;
            case 40:
                numberPlus(square_13,square_14)
                numberForth(square_15, square_16);
                numberNull(square_17, square_18);
                break;
            case 41:
                numberPlus(square_13,square_14)
                numberForth(square_15, square_16);
                numberOne(square_17, square_18);
                break;
            case 42:
                numberPlus(square_13,square_14)
                numberForth(square_15, square_16);
                numberTwo(square_17, square_18);
                break;
            case 43:
                numberPlus(square_13,square_14)
                numberForth(square_15, square_16);
                numberThree(square_17, square_18);
                break;
            case 44:
                numberPlus(square_13,square_14)
                numberForth(square_15, square_16);
                numberForth(square_17, square_18);
                break;
            case 45:
                numberPlus(square_13,square_14)
                numberForth(square_15, square_16);
                numberFifth(square_17, square_18);
                break;
            case 46:
                numberPlus(square_13,square_14)
                numberForth(square_15, square_16);
                numberSixth(square_17, square_18);
                break;
            case 47:
                numberPlus(square_13,square_14)
                numberForth(square_15, square_16);
                numberSeventh(square_17, square_18);
                break;
            case 48:
                numberPlus(square_13,square_14)
                numberForth(square_15, square_16);
                numberEight(square_17, square_18);
                break;
            case 49:
                numberPlus(square_13,square_14)
                numberForth(square_15, square_16);
                numberNinth(square_17, square_18);
                break;
            case 50:
                numberPlus(square_13,square_14)
                numberFifth(square_15, square_16);
                numberNull(square_17, square_18);
                break;
            case 51:
                numberPlus(square_13,square_14)
                numberFifth(square_15, square_16);
                numberOne(square_17, square_18);
                break;
            case 52:
                numberPlus(square_13,square_14)
                numberFifth(square_15, square_16);
                numberTwo(square_17, square_18);
                break;
            case 53:
                numberPlus(square_13,square_14)
                numberFifth(square_15, square_16);
                numberSeventh(square_17, square_18);
                break;
            case 54:
                numberPlus(square_13,square_14)
                numberFifth(square_15, square_16);
                numberForth(square_17, square_18);
                break;
            case 55:
                numberPlus(square_13,square_14)
                numberFifth(square_15, square_16);
                numberFifth(square_17, square_18);
                break;
            case 56:
                numberPlus(square_13,square_14)
                numberFifth(square_15, square_16);
                numberSixth(square_17, square_18);
                break;
            case 57:
                numberPlus(square_13,square_14)
                numberFifth(square_15, square_16);
                numberSeventh(square_17, square_18);
                break;
            case 58:
                numberPlus(square_13,square_14)
                numberFifth(square_15, square_16);
                numberEight(square_17, square_18);
                break;
            case 59:
                numberPlus(square_13,square_14)
                numberFifth(square_15, square_16);
                numberNinth(square_17, square_18);
                break;
            case -1:
                numberMinus(square_13,square_14)
                numberNull(square_15, square_16);
                numberOne(square_17, square_18);
                break;
            case -2:
                numberMinus(square_13,square_14)
                numberNull(square_15, square_16);
                numberTwo(square_17, square_18);
                break;
            case -3:
                numberMinus(square_13,square_14)
                numberNull(square_15, square_16);
                numberThree(square_17, square_18);
                break;
            case -4:
                numberMinus(square_13,square_14)
                numberNull(square_15, square_16);
                numberForth(square_17, square_18);
                break;
            case -5:
                numberMinus(square_13,square_14)
                numberNull(square_15, square_16);
                numberFifth(square_17, square_18);
                break;
            case -6:
                numberMinus(square_13,square_14)
                numberNull(square_15, square_16);
                numberSixth(square_17, square_18);
                break;
            case -7:
                numberMinus(square_13,square_14)
                numberNull(square_15, square_16);
                numberSeventh(square_17, square_18);
                break;
            case -8:
                numberMinus(square_13,square_14)
                numberNull(square_15, square_16);
                numberEight(square_17, square_18);
                break;
            case -9:
                numberMinus(square_13,square_14)
                numberNull(square_15, square_16);
                numberNinth(square_17, square_18);
                break;
            case -10:
                numberMinus(square_13,square_14)
                numberOne(square_15, square_16);
                numberNull(square_17, square_18);
                break;
            case -11:
                numberMinus(square_13,square_14)
                numberOne(square_15, square_16);
                numberOne(square_17, square_18);
                break;
            case -12:
                numberMinus(square_13,square_14)
                numberOne(square_15, square_16);
                numberTwo(square_17, square_18);
                break;
            case -13:
                numberMinus(square_13,square_14)
                numberOne(square_15, square_16);
                numberThree(square_17, square_18);
                break;
            case -14:
                numberMinus(square_13,square_14)
                numberOne(square_15, square_16);
                numberForth(square_17, square_18);
                break;
            case -15:
                numberMinus(square_13,square_14)
                numberOne(square_15, square_16);
                numberFifth(square_17, square_18);
                break;
            case -16:
                numberMinus(square_13,square_14)
                numberOne(square_15, square_16);
                numberSixth(square_17, square_18);
                break;
            case -17:
                numberMinus(square_13,square_14)
                numberOne(square_15, square_16);
                numberSeventh(square_17, square_18);
                break;
            case -18:
                numberMinus(square_13,square_14)
                numberOne(square_15, square_16);
                numberEight(square_17, square_18);
                break;
            case -19:
                numberMinus(square_13,square_14)
                numberOne(square_15, square_16);
                numberNinth(square_17, square_18);
                break;
            case -20:
                numberMinus(square_13,square_14)
                numberTwo(square_15, square_16);
                numberNull(square_17, square_18);
                break;
            case -21:
                numberMinus(square_13,square_14)
                numberTwo(square_15, square_16);
                numberOne(square_17, square_18);
                break;
            case -22:
                numberMinus(square_13,square_14)
                numberTwo(square_15, square_16);
                numberTwo(square_17, square_18);
                break;
            case -23:
                numberMinus(square_13,square_14)
                numberTwo(square_15, square_16);
                numberThree(square_17, square_18);
                break;
            case -24:
                numberMinus(square_13,square_14)
                numberTwo(square_15, square_16);
                numberForth(square_17, square_18);
                break;
            case -25:
                numberMinus(square_13,square_14)
                numberTwo(square_15, square_16);
                numberFifth(square_17, square_18);
                break;
            case -26:
                numberMinus(square_13,square_14)
                numberTwo(square_15, square_16);
                numberSixth(square_17, square_18);
                break;
            case -27:
                numberMinus(square_13,square_14)
                numberTwo(square_15, square_16);
                numberSeventh(square_17, square_18);
                break;
            case -28:
                numberMinus(square_13,square_14)
                numberTwo(square_15, square_16);
                numberEight(square_17, square_18);
                break;
            case -29:
                numberMinus(square_13,square_14)
                numberTwo(square_15, square_16);
                numberNinth(square_17, square_18);
                break;
            case -30:
                numberMinus(square_13,square_14)
                numberThree(square_15, square_16);
                numberNull(square_17, square_18);
                break;
            case -31:
                numberMinus(square_13,square_14)
                numberThree(square_15, square_16);
                numberOne(square_17, square_18);
                break;
            case -32:
                numberMinus(square_13,square_14)
                numberThree(square_15, square_16);
                numberTwo(square_17, square_18);
                break;
            case -33:
                numberMinus(square_13,square_14)
                numberThree(square_15, square_16);
                numberThree(square_17, square_18);
                break;
            case -34:
                numberMinus(square_13,square_14)
                numberThree(square_15, square_16);
                numberForth(square_17, square_18);
                break;
            case -35:
                numberMinus(square_13,square_14)
                numberThree(square_15, square_16);
                numberFifth(square_17, square_18);
                break;
            case -36:
                numberMinus(square_13,square_14)
                numberThree(square_15, square_16);
                numberSixth(square_17, square_18);
                break;
            case -37:
                numberMinus(square_13,square_14)
                numberThree(square_15, square_16);
                numberSeventh(square_17, square_18);
                break;
            case -38:
                numberMinus(square_13,square_14)
                numberThree(square_15, square_16);
                numberEight(square_17, square_18);
                break;
            case -39:
                numberMinus(square_13,square_14)
                numberThree(square_15, square_16);
                numberNinth(square_17, square_18);
                break;
            case -40:
                numberMinus(square_13,square_14)
                numberForth(square_15, square_16);
                numberNull(square_17, square_18);
                break;
            case -41:
                numberMinus(square_13,square_14)
                numberForth(square_15, square_16);
                numberOne(square_17, square_18);
                break;
            case -42:
                numberMinus(square_13,square_14)
                numberForth(square_15, square_16);
                numberTwo(square_17, square_18);
                break;
            case -43:
                numberMinus(square_13,square_14)
                numberForth(square_15, square_16);
                numberThree(square_17, square_18);
                break;
            case -44:
                numberMinus(square_13,square_14)
                numberForth(square_15, square_16);
                numberForth(square_17, square_18);
                break;
            case -45:
                numberMinus(square_13,square_14)
                numberForth(square_15, square_16);
                numberFifth(square_17, square_18);
                break;
            case -46:
                numberMinus(square_13,square_14)
                numberForth(square_15, square_16);
                numberSixth(square_17, square_18);
                break;
            case -47:
                numberMinus(square_13,square_14)
                numberForth(square_15, square_16);
                numberSeventh(square_17, square_18);
                break;
            case -48:
                numberMinus(square_13,square_14)
                numberForth(square_15, square_16);
                numberEight(square_17, square_18);
                break;
            case -49:
                numberMinus(square_13,square_14)
                numberForth(square_15, square_16);
                numberNinth(square_17, square_18);
                break;
            case -50:
                numberMinus(square_13,square_14)
                numberFifth(square_15, square_16);
                numberNull(square_17, square_18);
                break;
            case -51:
                numberMinus(square_13,square_14)
                numberFifth(square_15, square_16);
                numberOne(square_17, square_18);
                break;
            case -52:
                numberMinus(square_13,square_14)
                numberFifth(square_15, square_16);
                numberTwo(square_17, square_18);
                break;
            case -53:
                numberMinus(square_13,square_14)
                numberFifth(square_15, square_16);
                numberSeventh(square_17, square_18);
                break;
            case -54:
                numberMinus(square_13,square_14)
                numberFifth(square_15, square_16);
                numberForth(square_17, square_18);
                break;
            case -55:
                numberMinus(square_13,square_14)
                numberFifth(square_15, square_16);
                numberFifth(square_17, square_18);
                break;
            case -56:
                numberMinus(square_13,square_14)
                numberFifth(square_15, square_16);
                numberSixth(square_17, square_18);
                break;
            case -57:
                numberMinus(square_13,square_14)
                numberFifth(square_15, square_16);
                numberSeventh(square_17, square_18);
                break;
            case -58:
                numberMinus(square_13,square_14)
                numberFifth(square_15, square_16);
                numberEight(square_17, square_18);
                break;
            case -59:
                numberMinus(square_13,square_14)
                numberFifth(square_15, square_16);
                numberNinth(square_17, square_18);
                break;
        }
    });

