

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