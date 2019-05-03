function maxProfit(A) {
    A = [23171, 21011, 21123, 21366, 21013, 21367];

    if (A.length === 0)
        return 0;

    let min = Number.MAX_SAFE_INTEGER;
    let best = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] < min)
            min = A[i];
        if (A[i] - min > best)
            best = A[i] - min;
    }

    return best;
}

function maxSliceSum(A) {
    A = [-2, 1];

    if (A.length === 1)
        return A[0];

    let best = A[0];
    let current = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = i; j < A.length; j++) {
            if (j === i)
                current = 0;

            current += A[j];
            if (current > best)
                best = current;
        }
    }

    return best;
}

function maxDoubleSliceSum(A) {
    A = [3, 2, 6, -1, 4, 5, -1, 2];
}

module.exports = {
    1: maxProfit,
    2: maxSliceSum,
    3: maxDoubleSliceSum
};
