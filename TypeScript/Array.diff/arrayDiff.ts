export function arrayDiff(a: number[], b: number[]): number[] {
    b.forEach(e => {
        let elementIndex = a.indexOf(e);
        while (elementIndex !== -1) {
            a.splice(elementIndex, 1);
            elementIndex = a.indexOf(e);
        }
    });

    return a;
}