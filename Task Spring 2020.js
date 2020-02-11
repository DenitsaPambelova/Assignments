function MentorMateLogo(n) {

    let star = '*';
    let dash = "-";

    if(n< 3 || n > 9999) {
        console.log("The input must be odd number between 2 and 10 000.")
        return;
    }
    else if(Number(n) % 2 === 0) {
        console.log("The number must be odd!")
        return;
    }

    let printLogo = () => {
        let firstPart = '';
        for (let i = 0; i < (n + 1) / 2; i++) {
            let left = dash.repeat(n - i);
            let letter = star.repeat(n + 2 * i);
            let middle = dash.repeat(n - 2 * i);
            let betweenLetters = dash.repeat(2 * n - 2 * i);
            firstPart = left + letter + middle + letter + betweenLetters + letter + middle + letter + left;
            console.log(firstPart);
        }
        let secondPart = '';
        for (let i = 0; i < (n + 1) / 2; i++) {
            let left = dash.repeat(n / 2 - i);
            let letter1 = star.repeat(n);
            let middle = dash.repeat(1 + 2 * i);
            let letter2 = star.repeat((2 * n - 1) - 2 * i);
            let betWeenLetters = dash.repeat(n / 2 - i);
            let full = left + letter1 + middle + letter2 + middle + letter1;
            secondPart = full + betWeenLetters + full + left;
            console.log(secondPart);
        }
    }
    let MentorMateLogo = {
        printLogo: printLogo(),
    }
    return MentorMateLogo.printLogo;

}
