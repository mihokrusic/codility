function permCheck(A) {
    A = [4, 1, 3, 2, 7, 5, 8, 6];

    let duplicates = new Set();
    let sum = 0;
    for (var i = 0; i < A.length; i++) {
        if (duplicates.has(A[i]))
            return 0;

        duplicates.add(A[i]);
        sum += A[i];
    }

    let expectedSum = (A.length * (A.length + 1)) / 2;

    return (expectedSum === sum ? 1 : 0);
}

function frogRiverOne(X, N) {
    X = 5;
    A = [1, 3, 1, 4, 2, 3, 5, 4];

    let positions = {};
    for (let i = 0; i < X; i++) {
        positions[i + 1] = true;
    }

    let positionsUnoccupied = X;
    for (let i = 0; i < A.length; i++) {
        var element = A[i];
        if (positions[element]) {
            delete positions[element];
            positionsUnoccupied--;
        }

        if (positionsUnoccupied === 0)
            return i;
    }
    return -1;
}

function maxCounters(N, A) {
    N = 5;
    A = [3, 4, 4, 6, 1, 4, 4];

    let maxCounter = 0;

    let useMaxCounter = false;
    let lastMaxCounter = 0;

    let couters = [];
    for (let i = 0; i < N; i++) {
        couters.push(0);
    }

    for (let i = 0; i < A.length; i++) {
        let element = A[i];

        if (element === N + 1) {
            useMaxCounter = true;
            lastMaxCounter = maxCounter;
        } else {
            if (useMaxCounter && couters[element - 1] < lastMaxCounter) {
                couters[element - 1] = lastMaxCounter + 1;
            } else {
                couters[element - 1]++;
            }

            if (couters[element - 1] > maxCounter)
                maxCounter = couters[element - 1];
        }
    }

    for (let i = 0; i < N; i++) {
        if (useMaxCounter && couters[i] < lastMaxCounter) {
            couters[i] = lastMaxCounter;
        }
    }

    return couters;
}

function missingInteger(A) {
    A = [1, 3, 6, 4, 1, 2];


    return 4;
}

module.exports = {
    1: permCheck,
    2: frogRiverOne,
    3: maxCounters,
    4: missingInteger
};
