const returnValue = <T> (value: T): T => value

const message = returnValue <string> ('Hello World')
const count = returnValue <number>  (5)

function getFirstValueFromArray(array: any) {
    return array [0];
}

const firstValueFromStringArray = getFirstValueFromArray (["1","2"]);
const firstValueFromNumberArray = getFirstValueFromArray ([10, 20]);