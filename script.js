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


function numberNull(squareOne, squareTwo) {
    squareOne.style.borderColor = 'red red white red';
    squareTwo.style.borderColor = 'white red red red';
}

function numberOne(squareOne, squareTwo) {
    squareOne.style.borderColor = 'white red white white';
    squareTwo.style.borderColor = 'white red white white';
}

function numberTwo(squareOne, squareTwo) {
    squareOne.style.borderColor = 'red red white white';
    squareTwo.style.borderColor = 'red white red red';
}

function numberThree(squareOne, squareTwo) {
    squareOne.style.borderColor = 'red red white white';
    squareTwo.style.borderColor = 'red red red white';
}

function numberForth(squareOne, squareTwo) {
    squareOne.style.borderColor = 'white red red red';
    squareTwo.style.borderColor = 'white red white white';
}

function numberFifth(squareOne, squareTwo) {
    squareOne.style.borderColor = 'red white red red';
    squareTwo.style.borderColor = 'white red red white';
}

function numberSixth(squareOne, squareTwo) {
    squareOne.style.borderColor = 'red white white red';
    squareTwo.style.borderColor = 'red red red red';
}

function numberSeventh(squareOne, squareTwo) {
    squareOne.style.borderColor = 'red red white white';
    squareTwo.style.borderColor = 'white red white white';
}

function numberEight(squareOne, squareTwo) {
    squareOne.style.borderColor = 'red red white red';
    squareTwo.style.borderColor = 'red red red red';
}

function numberNinth(squareOne, squareTwo) {
    squareOne.style.borderColor = 'red red red red';
    squareTwo.style.borderColor = 'white red red white';
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

setInterval(clock, 1000)