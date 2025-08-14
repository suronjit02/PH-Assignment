
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