function brothersInTheBar(glasses) {

    let rounds = 0;

    // Validations:
    if (glasses.length < 1 || glasses.length >= 100000) {
        console.log(`Length of array must be between 1 and 100000!`)
        return;
    }
    for (let el of glasses) {
        if (el < 1 || el > 1000000) {
            console.log(`Every beer must be sized between 1 and 1000000!`)
            return;
        }
    }
    function equalSubsequences(glasses) {

        for (let i = 0; i < glasses.length; i++) {
            if (glasses[i] === glasses[i + 1] && glasses[i + 1] === glasses[i + 2]) {

                glasses.splice(i, 1);
                glasses.splice(i, 1);
                glasses.splice(i, 1);

                rounds++;

                if (glasses.length !== 2) {
                    equalSubsequences(glasses);
                }
                break;
            } else if (i === glasses.length - 3) {
                break;
            }
        }
    }

    function result() {
        if (rounds === 0) {
            console.log('There are no three consecutive glasses of the same size in this array!');
        } else {
            console.log(`Maximum rounds are ${rounds}.`);
        }
        rounds = 0;
    }

    equalSubsequences(glasses);
    result()

}
brothersInTheBar([1, 1, 2, 3, 3, 3, 2, 2, 1, 1])
brothersInTheBar([1, 1, 2, 1, 2, 2, 1, 1])




