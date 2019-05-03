function denominator(A) {
    A = [0, 0, 1, 1, 1];

    if (A.length === 0)-1;
    if (A.length === 1) return 0;

    C = A
        .map((item, index) => {
            return { value: item, originalIndex: index }
        })
        .sort((a, b) => {
            if (a.value === b.value) return a.originalIndex > b.originalIndex ? 1 : -1
            return a.value > b.value ? 1 : -1
        });

        let element;
    let currOccurances = 0;

    let denominator;
    let denominatorOccurances = 0;
    for (let i = 0; i < C.length; i++) {
        if (i === 0) {
            element = C[i];
            currOccurances++;
            continue;
        }

        if (C[i].value !== element.value) {
            if (currOccurances > denominatorOccurances) {
                denominator = element;
                denominatorOccurances = currOccurances;
            }
            element = C[i];
            currOccurances = 1;
        } else {
            currOccurances++;
        }

        if (i === C.length - 1) {
            if (currOccurances > denominatorOccurances) {
                denominator = element;
                denominatorOccurances = currOccurances;
            }
        }
    }
    return (denominatorOccurances > Math.floor(A.length / 2) ? denominator.originalIndex : -1);
}

module.exports = {
    1: denominator,
};
