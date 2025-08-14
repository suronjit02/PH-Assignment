
function totalFine(fare) {
    // You have to write your code here

    if (fare > 0 && typeof fare === 'number') {
        const fine = fare + (fare * 20 / 100) + 30;
        return fine;
    }
    else return 'Invalid';
}