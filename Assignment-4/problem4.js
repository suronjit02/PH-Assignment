
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