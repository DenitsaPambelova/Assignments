function solve(products, discounts) {

    let discount_tags_filtered;
    let discount_tag;
    let type;
    let amount;
    let totalPrice = [];

    for (let arr of products) {

        discount_tags_filtered = arr.filter(e => e !== 'EMPTY')
        if (discount_tags_filtered.length === 1) {
            totalPrice.push(+discount_tags_filtered[0])
        }
        let price = +arr[0];

        for (let inner of discounts) {
            discount_tag = inner[0];  // check second element in array of products
            type = inner[1];   // 0, 1 or 2
            amount = inner[2];  // amount for discount
            let currPrice = 0;
            currPrice = price;
            if (type === "0") {         //  case 0 - fixed discounted price given
                if (discount_tags_filtered.includes(discount_tag)) {
                    currPrice = price;
                    currPrice = amount;
                    totalPrice.push(+currPrice);
                }
            } else if (type === "1") {    // case 2 - percent discount
                if (discount_tags_filtered.includes(discount_tag)) {
                    let percentDiscount = +currPrice * (amount / 100)
                    currPrice = Math.floor(+currPrice - percentDiscount);
                    totalPrice.push(currPrice);
                }
            } else if (type === "2") {        // case 2- fixed sum to be extracted from original price
                let min = Math.min(...totalPrice);
                if (discount_tags_filtered.includes(discount_tag)) {

                    totalPrice.push(currPrice - amount)
                }
            }

        }

    }
    let minArr = totalPrice.slice(0, 2);  // extract the first two values from array
    let minValue = Math.min(...minArr); //check which one from both values is the lowest
    totalPrice.splice(0, 2, minValue) //remove the first two values and insert the lower one

    return totalPrice.reduce((a, b) => a + b);  //return sum of the discounted values
}

prod = [['10', 'sale', 'january-sale'], ['200', 'sale', 'EMPTY']]  //price and discount tags
disc = [['sale', '0', '10'], ['january-sale', '1', '10']]  //tag type amount
// prod =[['10','d0','d1'],['15','EMPTY','EMPTY'],['20','d1','EMPTY']];
// disc =[['d0','1','27'],['d1','2','5']]

console.log(solve(prod, disc));





