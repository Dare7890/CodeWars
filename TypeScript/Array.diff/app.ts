import { arrayDiff } from "./arrayDiff";

const firstArray: number[] = [1, 2, 3, 4, 5, 5, 2, 6];
const secondArray: number[] = [2, 5, 6];

const diffResult = arrayDiff(firstArray, secondArray);
alert(diffResult);