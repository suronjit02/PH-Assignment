


function totalFine(fare) {
    // You have to write your code here

    if (fare > 0 && typeof fare === 'number') {
        const fine = fare + (fare * 20 / 100) + 30;
        return fine;
    }
    else return 'Invalid';
}



function onlyCharacter(str) {
    // You have to write your code here


    if (typeof str === "string") {

        let newString = "";
        for (let char of str) {

            if (char === " ") {
                continue;
            }
            else newString += char;
        }
        newString = newString.toUpperCase();
        return newString;

    }
    else return 'Invalid';

}



function bestTeam(player1, player2) {
    // You have to write your code here

    if (typeof player1 === 'object' && typeof player2 === 'object') {

        const team1Total = player1.foul + player1.cardY + player1.cardR;
        const team2Total = player2.foul + player2.cardY + player2.cardR;

        if (team1Total < team2Total) {
            return player1.name;
        }
        else if (team1Total == team2Total) {
            return 'Tie'
        }
        else {
            return player2.name;
        }

    }
    else return 'Invalid';

}


function isSame(arr1, arr2) {
    // You have to write your code here

    if (Array.isArray(arr1) === true && Array.isArray(arr2) === true) {

        if (arr1.length !== arr2.length) {
            return false;
        }

        for (let i = 0; i < arr1.length; i++) {

            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }

        return true;

    }
    else return 'Invalid';

}


function resultReport(marks) {
    // You have to write your code here

    if (Array.isArray(marks)) {

        let pass = 0;
        let fail = 0;
        let totalSubject = 0;
        let totalMark = 0;

        for (let mark of marks) {

            totalMark += mark;
            totalSubject++;

            if (mark >= 40) {
                pass++;
            }

            if (mark < 40) {
                fail++;
            }

        }


        let finalScore;

        if (totalMark === 0 || totalSubject === 0) {
            finalScore = 0;
        }
        else finalScore = Math.round(totalMark / totalSubject);

        const result = {
            finalScore: finalScore,
            pass: pass,
            fail: fail
        }
        return result;

    }
    else return 'Invalid';

}