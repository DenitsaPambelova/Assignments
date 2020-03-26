/*
Write a JS program to compare two objects and determine if they're deeply equal.
This means that they contain equivalent property values.
----------------------------------
Expected Output - a boolean
----------------------------------
deepEquals(obj1, obj2) => true
deepEquals(obj1, obj3) => false
deepEquals(obj3, obj4) => true
----------------------------------
Defend the program against bad inputs!
 */

const obj1 = {
    foo: 'bar',
    baz: {
        qax: 'max',
        fax: {
            bax: 'gax'
        }
    }
};
const obj2 = {
    foo: 'bar',
    baz: {
        qax: 'max',
        fax: {
            bax: 'gax'
        }
    }
};
const obj3 = {
    foo: [1, 2, 3]
};
const obj4 = {
    foo: [1, 2, 3]
};

function deepEquals(a, b) {
    if (a === b) return true;
    if (a == null || typeof a != "object" ||
    b == null || typeof b != "object")
    return false;
    let propsInA = 0, propsInB = 0;
    for (let prop in a)
        propsInA += 1;
    for (let prop in b) {
        propsInB += 1;
        if (!(prop in a) || !deepEquals(a[prop], b[prop]))
            return false;
    }
    return propsInA === propsInB;
}
console.log(deepEquals(obj1, obj2));
console.log(deepEquals(obj2, obj3));
console.log(deepEquals(obj3, obj4));
console.log(deepEquals(obj1, obj4));
