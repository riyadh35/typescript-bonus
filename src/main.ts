import { add as addTwo, substract } from './module'


const add = (param1: number, param2: number, param3: number): number => {
    return param1 + param2 + param3;
}

const res = addTwo(2, 3)

const substract1 = substract(10, 3)
