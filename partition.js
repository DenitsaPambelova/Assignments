/*
Write a JS program that partitions the elements of an array into two arrays,
by using a provided function as a predicate for each element.
Falsy predicates go in the first array, truthy go in the second.
If a third argument is passed, use it to transform each of the items in the arrays
If a third argument (transforming function) is not passed, don't apply any transforms to the item.
You can see that in the last example
-----------------------------------------------------------------
Expected Output - a tuple [[falsy elements], [truthy elements]]
-----------------------------------------------------------------
partition(sampleInput1, x => x.hasKids, x => x.name) => [['bernard'], ['barney', 'fred']]
partition(sampleInput1, x => x.hasKids, x => x.age) => [[34], [36, 40]]
partition(sampleInput1, x => x.age < 40, x => ({ n: x.name })) => [[{n: 'fred'}], [{n: 'barney'}, {n: 'bernard'}]]

NOTE: there is no third argument passed (transforming function). The program should still work properly!
partition(sampleInput2, x => typeof x === 'string') => [[null], ['foo', 'bar', '']]
-----------------------------------------------------------------
*/

const sampleInput1 = [
    { name: 'barney', age: 36, hasKids: true },
    { name: 'fred', age: 40, hasKids: true },
    { name: 'bernard', age: 34, hasKids: false }
];

const sampleInput2 = ['foo', 'bar', '', null];

function partition(array, predicate, transform) {

    let functionContainsProp=predicate;
    let functionTransfrom=transform;

    let output=array.reduce(
        function (tupleAccumulator,element,index,array){
            if(!functionContainsProp(element,index,array)){
                tupleAccumulator[0].push(element)
            }else{
                tupleAccumulator[1].push(element)
            }
            return tupleAccumulator;
        },[[],[]]
    )
    if (!functionTransfrom){
        return output;
    }
    let result=[];
    let arrayFalsy=output[0].map(functionTransfrom);
    let arrayTruthy=output[1].map(functionTransfrom);

    result=[arrayFalsy,arrayTruthy];

    return result;
}

console.log(partition(sampleInput1, x => x.hasKids, x => x.name));
console.log(partition(sampleInput1,x=>x.hasKids,x=>x.age));
console.log(partition(sampleInput2, x => typeof x === 'string'));
