function distinct(A) {
    A = [2,1,1,2,3,1];

    let distincts = {};

    for (var i = 0; i < A.length; i++) {
        let element = A[i];
        if (!distincts[element]) {
            distincts[element] = true;
        }
    }

    return Object.keys(distincts).length;
}

function maxProductOfThree(A) {
    A = [-3, 1, 2, -2, 5, 6];
    A = [-5, -6, -4, -7, -10];
    sortedA = A.sort((a, b) => a - b);

    let twoNegativesEdgeCase = sortedA[0] * sortedA[1] * sortedA[sortedA.length - 1];
    let usualResult = sortedA[sortedA.length - 1] * sortedA[sortedA.length - 2] * sortedA[sortedA.length - 3];
    return Math.max(twoNegativesEdgeCase, usualResult);
}

function triangle(A) {
    A = [10, 2, 5, 1, 8, 20];
    A = [10, 50, 5, 1];

    function isTriangle(p, q, r) {
        return ((p + q > r) && (p + r > q) && (r + q > p));
    }

    if (A.length < 3)
        return 0;

    for (let i = 0; i < A.length - 2; i++) {
        for (let j = i + 1; j < A.length - 1; j++) {
            for (let k = j + 1; k < A.length; k++) {
                if (isTriangle(A[i], A[j], A[k]))
                    return 1;
            }
        }
    }

    return 0;
}

function numberOfDiscIntersections(A) {
    A = [1, 5, 2, 1, 4, 0];

    if (A.length < 2)
        return 0;

    let intersect = 0;
    for (let i = 0; i < A.length - 1; i++) {
        for (let j = i + 1; j < A.length; j++) {
            let rightBoundary = (i + A[i]);
            let leftBoundary = (j - A[j]);
            if (rightBoundary >= leftBoundary)
                intersect++;
        }
    }

    return intersect;
}

module.exports = {
    1: distinct,
    2: maxProductOfThree,
    3: triangle,
    4: numberOfDiscIntersections
};
