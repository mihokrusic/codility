function frogJump(X, Y, D) {
    return Math.ceil((Y - X) / D);
}

function permMissingElem(A) {
    A = [1, 2, 3, 5];

    let expectedArrayLength = A.length + 1;
    let expectedSum = (expectedArrayLength * (expectedArrayLength + 1)) / 2;
    let currentSum = A.reduce((total, num) => total + num);

    return expectedSum - currentSum;
}

function tapeEquilibrium(A) {
    A = [3, 1, 2, 4, 3];

    let diff = 0;
    let minDiff = Number.MAX_SAFE_INTEGER;
    let leftSum = 0;
    let rightSum = 0;

    for (var i = 1; i < A.length; i++) {
        if (i === 1) {
            leftSum = A[0];
            for (var j = 1; j < A.length; j++) {
                rightSum += A[j];
            }
        } else {
            leftSum += A[i - 1];
            rightSum -= A[i - 1];
        }

        diff = Math.abs(leftSum - rightSum);
        if (diff < minDiff)
            minDiff = diff;
    }

    return minDiff;
}

module.exports = {
    1: frogJump,
    2: permMissingElem,
    3: tapeEquilibrium
};
