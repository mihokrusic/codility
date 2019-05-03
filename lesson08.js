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

function equiLeader(A) {
    A = [4, 4, 2, 5, 3, 4, 4, 4];

    function getLeader(obj, itemCount) {
        let max = 0;
        let leader = 0;

        let keys = Object.keys(obj);
        keys.forEach((key) => {
            if (obj[key] > max) {
                max = obj[key];
                leader = key;
            }
        });
        if (max > Math.floor(itemCount / 2))
            return +leader;
        return -1;
    }

    let left = {};
    let right = {};
    for (let i = 0; i < A.length; i++)
        right[A[i]] = (right[A[i]] || 0) + 1;

    let leftCount = 0;
    let rightCount = A.length;

    let equiLeaders = 0;
    for (let i = 0; i < A.length; i++) {
        let item = A[i];
        left[item] = (left[item] || 0) + 1;
        right[item] = (right[item] || 0) - 1;

        leftCount++;
        rightCount--;

        if (right[item] === 0)
            delete right[item];

        let leftLeader = getLeader(left, leftCount);
        let rightLeader = getLeader(right, rightCount);

        if (leftLeader === rightLeader && leftLeader !== -1) {
            equiLeaders++;
        }
    }

    return equiLeaders;
}

module.exports = {
    1: denominator,
    2: equiLeader
};
