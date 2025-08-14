
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